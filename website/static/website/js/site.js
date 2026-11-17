(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const navigation = document.getElementById("main-navigation");
  const menuToggle = document.getElementById("menu-toggle");
  const form = document.getElementById("brief-form");
  const status = form.querySelector(".form-status");
  const error = form.querySelector(".form-error");

  function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menuToggle.title = open ? "Fechar menu" : "Abrir menu";
  }

  function clearFeedback() {
    status.hidden = true;
    error.hidden = true;
    status.querySelector("a").removeAttribute("href");
  }

  menuToggle.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  navigation.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      menuToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  window.matchMedia("(min-width: 701px)").addEventListener("change", () => setMenu(false));

  document.querySelectorAll("[data-service]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("service").value = trigger.dataset.service;
      clearFeedback();
      document.getElementById("contacto").scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth" });
      document.getElementById("name").focus({ preventScroll: true });
    });
  });

  form.addEventListener("input", clearFeedback);
  form.addEventListener("change", clearFeedback);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const name = values.get("name").trim();
    const business = values.get("business").trim();
    const message = values.get("message").trim();
    if (!name || !message) {
      clearFeedback();
      error.textContent = "Preencha o seu nome e conte um pouco sobre o projecto.";
      error.hidden = false;
      document.getElementById(!name ? "name" : "message").focus();
      return;
    }
    const text = `Olá, Jandiro! Gostaria de falar sobre um projecto com o DesignSimples.\n\nNome: ${name}\nNegócio: ${business || "Por definir"}\nServiço: ${values.get("service")}\n\n${message}`;
    const url = `https://wa.me/${form.dataset.phone}?text=${encodeURIComponent(text)}`;
    error.hidden = true;
    status.querySelector("a").href = url;
    status.hidden = false;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  document.documentElement.classList.add("js-enabled");
  menuToggle.hidden = false;
  form.hidden = false;
  if (window.lucide) window.lucide.createIcons();

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!reducedMotion.matches) {
          entry.target.animate(
            [{ opacity: 0, transform: "translateY(16px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 520, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
  }
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) document.getAnimations().forEach((animation) => animation.cancel());
  });
})();