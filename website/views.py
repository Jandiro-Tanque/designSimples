from django.shortcuts import render
from django.views.decorators.http import require_GET

from .content import CONCEPTS, CONTACT, CONTACT_URL, FAQS, REAL_PROJECTS, SERVICES, STEPS


@require_GET
def home(request):
    return render(request, "website/home.html", {
        "contact": CONTACT, "contact_url": CONTACT_URL,
        "services": SERVICES, "real_projects": REAL_PROJECTS,
        "concepts": CONCEPTS, "steps": STEPS, "faqs": FAQS,
        "categories": ["Todos", "Negócios", "Profissionais"],
    })