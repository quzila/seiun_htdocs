(() => {
  'use strict';

  const HERO_IMAGES = [
    'img/Hero1.JPG',
    'img/Hero2.JPG',
    'img/Hero3.jpg'
  ];

  const init = () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const navContainer = document.querySelector('.nav-container');
    const heroLayers = [
      document.querySelector('.hero-bg-1'),
      document.querySelector('.hero-bg-2')
    ].filter(Boolean);

    if (hamburger && navMenu && overlay) {
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
      navLinks.forEach((link) => {
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

      let lastScrollTop = 0;
      window.addEventListener('scroll', () => {
        if (!navMenu.classList.contains('active')) return;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          closeMenu();
        }
        lastScrollTop = Math.max(scrollTop, 0);
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
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

    if (heroLayers.length) {
      heroLayers[0].style.backgroundImage = `linear-gradient(rgba(0,80,150,0.4),rgba(0,122,255,0.3)), url('${HERO_IMAGES[0]}')`;
      heroLayers[0].classList.add('show');
      if (heroLayers.length > 1) {
        let currentImageIndex = 0;
        let currentBgIndex = 0;
        let nextBgIndex = 1;

        const fadeToNextImage = () => {
          currentImageIndex = (currentImageIndex + 1) % HERO_IMAGES.length;
          heroLayers[nextBgIndex].style.backgroundImage = `linear-gradient(rgba(0,80,150,0.4),rgba(0,122,255,0.3)), url('${HERO_IMAGES[currentImageIndex]}')`;
          heroLayers[nextBgIndex].classList.add('show');
          heroLayers[currentBgIndex].classList.remove('show');
          const temp = currentBgIndex;
          currentBgIndex = nextBgIndex;
          nextBgIndex = temp;
        };

        setInterval(fadeToNextImage, 4000);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
