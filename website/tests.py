from html.parser import HTMLParser
from unittest.mock import patch

from django.contrib.staticfiles import finders
from django.test import SimpleTestCase
from django.urls import reverse


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.resources = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.append(attributes["id"])
        if tag in {"script", "img"}:
            self.resources.append(attributes.get("src", ""))
        if tag == "link" and attributes.get("rel") == "stylesheet":
            self.resources.append(attributes.get("href", ""))


class HomeTests(SimpleTestCase):
    def test_home_is_rendered_by_django(self):
        response = self.client.get(reverse("website:home"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "website/home.html")
        self.assertContains(response, "DesignSimples")

    def test_home_does_not_accept_contact_data(self):
        response = self.client.post(reverse("website:home"), {"name": "Test"})
        self.assertEqual(response.status_code, 405)

    def test_real_projects_and_concepts_are_distinct(self):
        response = self.client.get(reverse("website:home"))
        self.assertEqual(len(response.context["real_projects"]), 2)
        self.assertEqual(len(response.context["concepts"]), 3)
        self.assertContains(response, "1.º lugar · Hackathon")
        self.assertContains(response, "Demonstração indisponível")
        self.assertContains(response, 'href="https://elun.website"')
        self.assertContains(response, "Marcas fictícias e conceitos visuais")

    def test_static_resources_exist_without_react(self):
        response = self.client.get(reverse("website:home"))
        parser = PageParser()
        parser.feed(response.content.decode())
        self.assertGreater(len(parser.resources), 8)
        for resource in parser.resources:
            with self.subTest(resource=resource):
                self.assertTrue(resource.startswith("/static/"))
                self.assertIsNotNone(finders.find(resource.removeprefix("/static/")))
        self.assertNotContains(response, "@vite")
        self.assertNotContains(response, "react")

    def test_dialog_ids_are_unique(self):
        response = self.client.get(reverse("website:home"))
        parser = PageParser()
        parser.feed(response.content.decode())
        self.assertEqual(len(parser.ids), len(set(parser.ids)))
        for slug in ("forma", "raiz", "lina"):
            self.assertIn(f"project-{slug}", parser.ids)
            self.assertIn(f"title-{slug}", parser.ids)

    def test_content_is_escaped(self):
        with patch("website.views.REAL_PROJECTS", [{"name": '<script>alert("test")</script>'}]):
            response = self.client.get(reverse("website:home"))
        self.assertContains(response, "&lt;script&gt;")
        self.assertNotContains(response, '<script>alert("test")</script>')

    def test_contact_has_direct_fallback_and_no_server_submission(self):
        response = self.client.get(reverse("website:home"))
        self.assertContains(response, "https://wa.me/244927155574?")
        self.assertContains(response, 'id="brief-form" data-phone="244927155574" hidden')
        self.assertContains(response, 'name="message"')