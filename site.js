/* ZERRO Aberturas — site interactions (vanilla JS, no dependencies) */
(function () {
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');

  /* Sticky nav: solid background after scrolling past the hero top */
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('is-solid');
    else nav.classList.remove('is-solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu toggle */
  burger.addEventListener('click', function () {
    nav.classList.toggle('is-open');
  });

  /* "Líneas" toggle button → scroll to the lines overview */
  var toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var el = document.getElementById('lineas');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
      nav.classList.remove('is-open');
    });
  }

  /* Smooth scroll + close mobile menu on nav click */
  document.querySelectorAll('[data-scroll]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id.charAt(0) !== '#') return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = id === '#top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: top, behavior: 'smooth' });
      nav.classList.remove('is-open');
    });
  });
})();
