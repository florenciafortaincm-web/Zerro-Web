document.addEventListener('DOMContentLoaded', function () {
  
  // 1. MANEJO DEL MENU FLOTANTE (STICKY NAVBAR)
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.classList.add('is-solid');
    } else {
      nav.classList.remove('is-solid');
    }
  });

  // 2. INTERRUPTOR DEL MENÚ MÓVIL (BURGER MENU)
  var burger = document.getElementById('burger');
  var navMobile = document.getElementById('navMobile');
  if (burger && navMobile) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('is-open');
    });
  }

  // 3. SCROLL SUAVE INTEGRADO
  var scrollLinks = document.querySelectorAll('[data-scroll]');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        var targetEl = document.getElementById(targetId.substring(1));
        if (targetEl) {
          window.scrollTo({
            top: targetEl.getBoundingClientRect().top + window.scrollY - 70,
            behavior: 'smooth'
          });
          // Cerrar el menú móvil si estaba abierto
          nav.classList.remove('is-open');
        }
      }
    });
  });

  // 4. CONTROL INTERACTIVO DE PESTAÑAS (TABS SYSTEM)
  var tabsBtns = document.querySelectorAll('.tabs__btn');
  var tabsContents = document.querySelectorAll('.tabs__content');

  tabsBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetTab = this.getAttribute('data-tab');

      // Apagar botones activos
      tabsBtns.forEach(function (b) { b.classList.remove('is-active'); });
      // Ocultar contenidos previos
      tabsContents.forEach(function (c) { c.classList.remove('is-active'); });

      // Encender el actual
      this.classList.add('is-active');
      var targetContent = document.getElementById('tab-' + targetTab);
      if (targetContent) {
        targetContent.classList.add('is-active');
      }
    });
  });

  // 5. CONTROL DEL DROPDOWN DE LÍNEAS EN ESCRITORIO
  var toggle = document.querySelector('.nav__toggle');
  if (toggle) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var item = toggle.closest('.nav__item');
      if (item) item.classList.toggle('is-active');
    });
  }

  // Cerrar menús interactivos si hacen clic afuera del navbar
  document.addEventListener('click', function () {
    var item = document.querySelector('.nav__item');
    if (item) item.classList.remove('is-active');
    nav.classList.remove('is-open');
  });
});