/* ==========================================================================
   RITUAL — catalogue + hero hotfix
   Load this with `defer` AFTER the page markup.
   ========================================================================== */
(() => {
  'use strict';

  const HERO_INTERVAL = 3000;

  const norm = (value = '') =>
    value
      .toString()
      .trim()
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, ' ');

  const categoryMap = new Map([
    ['all', 'all'],
    ['stainless steel', 'stainless-steel'],
    ['stainless', 'stainless-steel'],
    ['magnetic hybrid', 'magnetic-hybrid'],
    ['magnetic hybrids', 'magnetic-hybrid'],
    ['woven', 'woven'],
    ['silicon', 'silicon'],
    ['silicone', 'silicon']
  ]);

  function inferCategory(text) {
    const t = norm(text);
    if (t.includes('magnetic hybrid') || t.includes('magnetic construction')) return 'magnetic-hybrid';
    if (t.includes('stainless steel')) return 'stainless-steel';
    if (t.includes('woven')) return 'woven';
    if (t.includes('silicon') || t.includes('silicone')) return 'silicon';
    return '';
  }

  function findCategoryButtons() {
    const preferredRoots = [
      ...document.querySelectorAll(
        '.ritual-category-selector, .category-selector, .catalogue-filter, .catalog-filter, [data-category-selector]'
      )
    ];

    const roots = preferredRoots.length ? preferredRoots : [document];

    let found = [];
    for (const root of roots) {
      const candidates = [
        ...root.querySelectorAll('button, [role="button"], a')
      ].filter(el => categoryMap.has(norm(el.textContent)));
      found.push(...candidates);
    }

    return [...new Set(found)];
  }

  function findProductCards() {
    const explicit = [
      ...document.querySelectorAll(
        '[data-product-card], .product-card, .catalogue-card, .collection-card, .catalog-card'
      )
    ];

    if (explicit.length >= 3) return explicit;

    /* Fallback for static catalogue markup:
       look for repeated product-like blocks containing an RRP / View Product line. */
    const anchors = [
      ...document.querySelectorAll('a')
    ].filter(a => /view product/i.test(a.textContent || ''));

    const cards = anchors
      .map(a =>
        a.closest(
          '[data-category], article, li, .card, .product, .catalogue-item, .collection-item, div'
        )
      )
      .filter(Boolean);

    return [...new Set(cards)];
  }

  function cardCategory(card) {
    const dataValue =
      card.dataset.category ||
      card.dataset.collection ||
      card.dataset.type ||
      card.getAttribute('data-filter') ||
      '';

    const normalizedData = norm(dataValue).replace(/\s+/g, '-');
    if (['stainless-steel', 'magnetic-hybrid', 'woven', 'silicon'].includes(normalizedData)) {
      return normalizedData;
    }

    return inferCategory(card.textContent);
  }

  function wireCatalogueFilter() {
    const buttons = findCategoryButtons();
    const cards = findProductCards();

    if (!buttons.length || !cards.length) return;

    /* Attach a canonical category to every card once. */
    cards.forEach(card => {
      const category = cardCategory(card);
      if (category) card.dataset.ritualCategory = category;
      card.setAttribute('data-product-card', '');
    });

    const apply = category => {
      cards.forEach(card => {
        const own = card.dataset.ritualCategory || cardCategory(card);
        const show = category === 'all' || own === category;
        card.classList.toggle('ritual-filter-hidden', !show);
        card.toggleAttribute('aria-hidden', !show);
      });

      buttons.forEach(btn => {
        const key = categoryMap.get(norm(btn.textContent));
        const active = key === category;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      /* Keep the URL useful without forcing a page reload. */
      const url = new URL(window.location.href);
      if (category === 'all') url.searchParams.delete('category');
      else url.searchParams.set('category', category);
      history.replaceState({}, '', url);
    };

    buttons.forEach(btn => {
      const category = categoryMap.get(norm(btn.textContent));
      btn.dataset.ritualCategoryFilter = category;

      /* Links must filter in-place rather than navigating. */
      btn.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        apply(category);
      });
    });

    const initial = new URLSearchParams(location.search).get('category');
    const valid = ['all', 'stainless-steel', 'magnetic-hybrid', 'woven', 'silicon'];
    apply(valid.includes(initial) ? initial : 'all');
  }

  function removeStandaloneMagneticSection() {
    const headings = [
      ...document.querySelectorAll('h1, h2, h3, .section-title, .editorial-title, .catalogue-title')
    ];

    headings.forEach(heading => {
      const t = norm(heading.textContent);
      if (t !== 'magnetic hybrid bracelets') return;

      /* Do NOT remove a product card title or a selector button. */
      if (
        heading.closest('[data-product-card], .product-card, .catalogue-card, .collection-card') ||
        heading.closest('.ritual-category-selector, .category-selector, [data-category-selector]')
      ) return;

      const section =
        heading.closest(
          '[data-magnetic-section], section, .section, .editorial-section, .magnetic-section, main > div'
        ) || heading.parentElement;

      if (section) {
        section.classList.add('ritual-remove-magnetic-section');
        section.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function normalizeCatalogueTitles() {
    /* Ensure product titles are not forced to caps by old CSS/classes. */
    document
      .querySelectorAll(
        '[data-product-card] h2, [data-product-card] h3, .product-card h2, .product-card h3, .catalogue-card h2, .catalogue-card h3'
      )
      .forEach(el => {
        el.style.textTransform = 'none';
      });

    /* Any editorial heading previously locked to nowrap can breathe again. */
    document
      .querySelectorAll(
        '.ritual-title, .section-title, .catalogue-title, .editorial-title, .collection-title, .page-title'
      )
      .forEach(el => {
        el.classList.add('ritual-display-title');
      });
  }

  function findHero() {
    const explicit = document.querySelector(
      '[data-hero-slider], .home-hero, .hero-slider, .hero-carousel, .ritual-hero'
    );
    if (explicit) return explicit;

    /* Fallback: find a page region with at least two slider-ish panels. */
    const possible = [
      ...document.querySelectorAll('section, header, main > div')
    ].find(node => {
      const slides = node.querySelectorAll(
        '[data-slide], .hero-slide, .slide, .carousel-slide, .swiper-slide'
      );
      return slides.length >= 2;
    });

    return possible || null;
  }

  function findHeroSlides(hero) {
    const selectors = [
      '[data-slide]',
      '.hero-slide',
      '.carousel-slide',
      '.slider-slide',
      '.swiper-slide',
      '.slide'
    ];

    for (const selector of selectors) {
      const slides = [...hero.querySelectorAll(`:scope > ${selector}, :scope > * > ${selector}`)];
      if (slides.length >= 2) return [...new Set(slides)];
    }

    /* Last fallback: direct children that look like full hero panels. */
    return [...hero.children].filter(child => {
      const image = child.querySelector('img, picture, video');
      const substantial = (child.textContent || '').trim().length > 25;
      return image && substantial;
    });
  }

  function arrowRole(button) {
    const text = norm(
      [
        button.getAttribute('aria-label'),
        button.getAttribute('title'),
        button.dataset.direction,
        button.textContent
      ].filter(Boolean).join(' ')
    );

    if (
      button.matches('[data-prev], .hero-prev, .slider-prev, .carousel-prev') ||
      /previous|prev|left|←|‹/.test(text)
    ) return 'prev';

    if (
      button.matches('[data-next], .hero-next, .slider-next, .carousel-next') ||
      /next|right|→|›/.test(text)
    ) return 'next';

    return '';
  }

  function wireHero() {
    const hero = findHero();
    if (!hero) return;

    const slides = findHeroSlides(hero);
    if (slides.length < 2) return;

    hero.setAttribute('data-hero-slider', '');

    slides.forEach((slide, index) => {
      slide.classList.add('ritual-hero-slide');
      slide.dataset.ritualSlideIndex = String(index);
    });

    /* If existing CSS is not already positioning slides, layer them ourselves.
       This avoids horizontal overflow and makes reveal transitions clean. */
    const firstStyle = getComputedStyle(slides[0]);
    const secondStyle = getComputedStyle(slides[1]);
    const alreadyLayered =
      ['absolute', 'fixed'].includes(firstStyle.position) ||
      ['absolute', 'fixed'].includes(secondStyle.position);

    if (!alreadyLayered) {
      const sameParent = slides.every(slide => slide.parentElement === slides[0].parentElement);
      if (sameParent) slides[0].parentElement.classList.add('ritual-hero-layered');
    }

    let index = Math.max(
      0,
      slides.findIndex(slide =>
        slide.classList.contains('active') ||
        slide.classList.contains('is-active') ||
        slide.getAttribute('aria-hidden') === 'false'
      )
    );

    let timer = null;

    const render = nextIndex => {
      index = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-active', active);
        /* Keep common legacy classes in sync. */
        slide.classList.toggle('active', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
    };

    const start = () => {
      clearInterval(timer);
      timer = setInterval(() => render(index + 1), HERO_INTERVAL);
    };

    const move = delta => {
      render(index + delta);
      start(); // manual navigation resets the 3-second clock
    };

    const buttons = [
      ...hero.querySelectorAll(
        'button, [role="button"], a, [data-prev], [data-next], .hero-prev, .hero-next, .slider-prev, .slider-next, .carousel-prev, .carousel-next'
      )
    ];

    buttons.forEach(button => {
      const role = arrowRole(button);
      if (!role) return;

      if (role === 'prev') button.setAttribute('data-prev', '');
      if (role === 'next') button.setAttribute('data-next', '');

      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        move(role === 'prev' ? -1 : 1);
      });
    });

    /* Pause only while the user is actively interacting with the banner. */
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', start);
    hero.addEventListener('focusin', () => clearInterval(timer));
    hero.addEventListener('focusout', start);

    render(index);
    start();
  }

  function init() {
    removeStandaloneMagneticSection();
    normalizeCatalogueTitles();
    wireCatalogueFilter();
    wireHero();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();