// ═══════════════════════════════════════════════════
// ZERRO ABERTURAS — site.js
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─── Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // ─── Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // ─── Scroll reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.linea-card, .nosotros-card, .porque-item, .info-item')
    .forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

  // ─── Formspree form handling
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        successMsg.style.display = 'block';
        form.reset();
        // GTM event
        if (window.dataLayer) {
          dataLayer.push({ event: 'form_submit_contacto' });
        }
      } else {
        btn.textContent = 'Error. Intentá de nuevo.';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Error de conexión.';
      btn.disabled = false;
    }
  });

  // ─── Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
