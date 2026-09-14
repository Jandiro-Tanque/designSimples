/* DesignSimples — script.js */

/* ── Navbar scroll effect ─────────────────── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Smooth anchor scroll ─────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile menu
    const menu = document.querySelector('.navbar-collapse');
    if (menu.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      toggler.click();
    }
  });
});

/* ── Intersection Observer — fade in cards ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.getAttribute('data-delay') || 0;
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, +delay);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.service-card, .port-card, .av-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/* ── Radio label active state ─────────────── */
document.querySelectorAll('.cf-radio input').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.cf-radio').forEach(l => l.style.borderColor = '');
    if (radio.checked) {
      radio.closest('.cf-radio').style.borderColor = 'var(--cyan)';
      radio.closest('.cf-radio').style.background = 'rgba(0,229,210,0.06)';
    }
  });
});

/* ── Contact form toast ───────────────────── */
const submitBtn = document.getElementById('submitBtn');
const toast     = document.getElementById('toastMsg');

submitBtn?.addEventListener('click', () => {
  // Basic visual feedback — Django will handle real submission
  submitBtn.textContent = 'Enviando...';
  submitBtn.style.opacity = '0.7';
  submitBtn.style.pointerEvents = 'none';

  setTimeout(() => {
    toast.classList.add('show');
    submitBtn.textContent = 'Enviar mensagem';
    submitBtn.style.opacity = '';
    submitBtn.style.pointerEvents = '';
    setTimeout(() => toast.classList.remove('show'), 3500);
  }, 900);
});

/* ── Active nav link on scroll ───────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--cyan)';
    }
  });
});
