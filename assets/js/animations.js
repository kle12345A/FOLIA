// ========== SCROLL ANIMATIONS (OPTIMIZED) ==========
(function() {
  'use strict';

  // Throttle function để tối ưu performance
  function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Intersection Observer cho scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Unobserve sau khi animate để tối ưu
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Khởi tạo scroll animations
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    elements.forEach(el => {
      observer.observe(el);
    });
  }

  // Smooth scroll cho navigation links
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Hover effects cho cards
  function initHoverEffects() {
    const cards = document.querySelectorAll('.product-card, .blog-card, .blog-post-card');
    cards.forEach(card => {
      card.classList.add('hover-lift');
    });

    const images = document.querySelectorAll('.home-intro__img-wrap, .contact-form-image');
    images.forEach(img => {
      img.classList.add('hover-scale');
    });
  }

  // Parallax effect nhẹ cho hero sections
  function initParallax() {
    const heroElements = document.querySelectorAll('.hero-home__bg');
    
    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      heroElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    }, 16); // ~60fps

    window.addEventListener('scroll', handleScroll);
  }

  // Lazy loading cho images
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Khởi tạo tất cả animations khi DOM ready
  function init() {
    // Luôn chạy scroll animations để đảm bảo elements hiển thị
    initScrollAnimations();
    
    // Chỉ chạy parallax trên desktop để tránh lag mobile
    if (window.innerWidth > 768) {
      initParallax();
    }
    
    initSmoothScroll();
    initHoverEffects();
    initLazyLoading();
  }

  // Chạy khi DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-init khi resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Luôn re-init scroll animations
      initScrollAnimations();
      
      // Chỉ re-init parallax trên desktop
      if (window.innerWidth > 768) {
        initParallax();
      }
    }, 250);
  });

})();
