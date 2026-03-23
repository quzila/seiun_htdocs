(() => {
  'use strict';

  const heroImages = [
    'img/Hero1.jpg',
    'img/Hero2.jpg',
    'img/Hero3.jpg'
  ];

  const initialize = () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const navContainer = document.querySelector('.nav-container');
    const heroBackgrounds = [
      document.querySelector('.hero-bg-1'),
      document.querySelector('.hero-bg-2')
    ].filter(Boolean);

    if (!hamburger || !navMenu || !overlay) {
      return;
    }

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    const closeMenu = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        const headerOffset = 160;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      if (!navMenu.classList.contains('active')) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        closeMenu();
      }
      lastScrollTop = Math.max(scrollTop, 0);
    });

    const copyrightYearEl = document.getElementById('copyright-year');
    if (copyrightYearEl) {
      copyrightYearEl.textContent = String(new Date().getFullYear());
    }

    const setNavTopPosition = () => {
      if (!header || !navContainer) return;
      if (window.innerWidth > 768) {
        navContainer.style.top = `${header.offsetHeight}px`;
      } else {
        navContainer.style.top = '';
      }
    };
    window.addEventListener('load', setNavTopPosition);
    window.addEventListener('resize', setNavTopPosition);
    setNavTopPosition();

    if (heroBackgrounds.length < 2) {
      if (heroBackgrounds.length === 1) {
        heroBackgrounds[0].style.backgroundImage = `url('${heroImages[0]}')`;
        heroBackgrounds[0].classList.add('show');
      }
      return;
    }

    let currentImageIndex = 0;
    let currentBgIndex = 0;
    let nextBgIndex = 1;

    heroBackgrounds[currentBgIndex].style.backgroundImage = `url('${heroImages[0]}')`;
    heroBackgrounds[currentBgIndex].classList.add('show');

    const fadeToNextImage = () => {
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroBackgrounds[nextBgIndex].style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
      heroBackgrounds[nextBgIndex].classList.add('show');
      heroBackgrounds[currentBgIndex].classList.remove('show');
      const temp = currentBgIndex;
      currentBgIndex = nextBgIndex;
      nextBgIndex = temp;
    };

    setInterval(fadeToNextImage, 4000);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
