(() => {
  'use strict';

  const HERO_INTERVAL = 3000;

  const norm = (value = '') =>
    value.toString().trim().toLowerCase().replace(/\s+/g, ' ');

  /* -----------------------------------------------------------------------
     1. DELETE THE ENTIRE STANDALONE MAGNETIC HYBRID EDITORIAL SECTION
     -----------------------------------------------------------------------
     V2 is intentionally aggressive here.
     It looks for the unique editorial marker shown on the page:
       "04 / MAGNETIC RITUALS"
     and removes the whole top-level section containing it.

     It also removes any second standalone "Magnetic Hybrid Bracelets"
     catalogue subsection that sits directly beneath that editorial header.
     Magnetic Hybrid PRODUCT CARDS are NOT removed; they remain in the main
     catalogue and are accessible via the category selector.
  ----------------------------------------------------------------------- */
  function removeStandaloneMagneticEditorial() {
    const all = [...document.querySelectorAll('body *')];

    const marker = all.find(el => {
      const text = norm(el.textContent);
      return text === '04 / magnetic rituals';
    });

    const isTopLevelSection = el => {
      if (!el || el === document.body || el === document.documentElement) return false;
      const tag = el.tagName?.toLowerCase();
      if (tag === 'section') return true;
      if (el.hasAttribute?.('data-section')) return true;
      if (el.classList?.contains('section')) return true;
      if (el.className && /section|editorial|magnetic/i.test(String(el.className))) return true;
      return false;
    };

    const containsEditorialSignature = el => {
      const t = norm(el?.textContent || '');
      return (
        t.includes('04 / magnetic rituals') &&
        t.includes('integrated magnetic construction') &&
        t.includes('hybrid material combinations') &&
        t.includes('all hybrid models are magnetic')
      );
    };

    let target = null;

    if (marker) {
      let node = marker;
      for (let i = 0; node && i < 8; i++, node = node.parentElement) {
        if (isTopLevelSection(node) && containsEditorialSignature(node)) {
          target = node;
          break;
        }
      }

      /* Fallback: nearest ancestor that contains the full editorial signature. */
      if (!target) {
        let node = marker;
        for (let i = 0; node && i < 10; i++, node = node.parentElement) {
          if (containsEditorialSignature(node)) target = node;
        }
      }
    }

    /* If the unique marker wasn't found, find by the complete signature. */
    if (!target) {
      target = [...document.querySelectorAll('section, main > div, main > section, .section')]
        .find(containsEditorialSignature);
    }

    if (target) {
      target.classList.add('ritual-delete-magnetic-editorial');
      target.remove();
    }

    /* Remove any leftover standalone Magnetic Hybrid subsection/header/grid
       that is outside the primary catalogue.
       We never remove product cards themselves or the category selector. */
    const headings = [...document.querySelectorAll('h1, h2, h3, h4')].filter(h => {
      return norm(h.textContent) === 'magnetic hybrid bracelets';
    });

    headings.forEach(h => {
      if (h.closest('[data-product-card], .product-card, .catalogue-card, .collection-card')) return;
      if (h.closest('[data-category-selector], .category-selector, .catalogue-filter, .catalog-filter')) return;

      const section =
        h.closest('section, .section, [data-section], .editorial-section, .magnetic-section') ||
        h.parentElement;

      if (!section) return;

      const text = norm(section.textContent);

      /* Only remove a standalone magnetic editorial/listing region,
         never the site's master catalogue if it happens to contain a card
         with the same phrase. */
      const looksStandalone =
        text.includes('magnetic hybrid') &&
        (
          text.includes('every bracelet in the hybrid category') ||
          text.includes('magnetic construction / all hybrid models') ||
          text.includes('integrated magnetic construction') ||
          text.includes('04 / magnetic rituals')
        );

      if (looksStandalone) {
        section.classList.add('ritual-delete-magnetic-editorial');
        section.remove();
      }
    });
  }

  /* -----------------------------------------------------------------------
     2. CATEGORY FILTER
  ----------------------------------------------------------------------- */
  const categoryMap = new Map([
    ['all', 'all'],
    ['stainless steel', 'stainless-steel'],
    ['magnetic hybrid', 'magnetic-hybrid'],
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

  function getButtons() {
    const roots = [
      ...document.querySelectorAll(
        '[data-category-selector], .category-selector, .catalogue-filter, .catalog-filter, .ritual-category-selector'
      )
    ];
    const searchRoots = roots.length ? roots : [document];

    return [...new Set(
      searchRoots.flatMap(root =>
        [...root.querySelectorAll('button, [role="button"], a')]
          .filter(el => categoryMap.has(norm(el.textContent)))
      )
    )];
  }

  function getCards() {
    let cards = [
      ...document.querySelectorAll(
        '[data-product-card], .product-card, .catalogue-card, .collection-card, .catalog-card'
      )
    ];
    if (cards.length >= 3) return cards;

    const productLinks = [...document.querySelectorAll('a')]
      .filter(a => /view product/i.test(a.textContent || ''));

    cards = productLinks
      .map(a => a.closest('article, li, [data-category], .card, .product, .catalogue-item, .collection-item'))
      .filter(Boolean);

    return [...new Set(cards)];
  }

  function cardCategory(card) {
    const explicit =
      card.dataset.category ||
      card.dataset.collection ||
      card.dataset.type ||
      card.getAttribute('data-filter') ||
      '';

    const clean = norm(explicit).replace(/\s+/g, '-');
    if (['stainless-steel', 'magnetic-hybrid', 'woven', 'silicon'].includes(clean)) return clean;

    return inferCategory(card.textContent);
  }

  function wireCatalogueFilter() {
    const buttons = getButtons();
    const cards = getCards();
    if (!buttons.length || !cards.length) return;

    cards.forEach(card => {
      card.setAttribute('data-product-card', '');
      const cat = cardCategory(card);
      if (cat) card.dataset.ritualCategory = cat;
    });

    function apply(category) {
      cards.forEach(card => {
        const cat = card.dataset.ritualCategory || cardCategory(card);
        const show = category === 'all' || cat === category;
        card.classList.toggle('ritual-filter-hidden', !show);
        card.setAttribute('aria-hidden', String(!show));
      });

      buttons.forEach(btn => {
        const cat = categoryMap.get(norm(btn.textContent));
        const active = cat === category;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    }

    buttons.forEach(btn => {
      const category = categoryMap.get(norm(btn.textContent));
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        apply(category);
      });
    });

    apply('all');
  }

  /* -----------------------------------------------------------------------
     3. NORMALIZE TITLES
  ----------------------------------------------------------------------- */
  function normalizeTitles() {
    document
      .querySelectorAll(
        '.ritual-title, .section-title, .catalogue-title, .editorial-title, .collection-title, .page-title'
      )
      .forEach(el => el.classList.add('ritual-display-title'));

    document
      .querySelectorAll(
        '[data-product-card] h2, [data-product-card] h3, .product-card h2, .product-card h3, .catalogue-card h2, .catalogue-card h3'
      )
      .forEach(el => {
        el.style.textTransform = 'none';
      });
  }

  /* -----------------------------------------------------------------------
     4. HERO — 3 SECOND ROTATION + VERTICALLY CENTERED ARROWS
  ----------------------------------------------------------------------- */
  function findHero() {
    return document.querySelector(
      '[data-hero-slider], .home-hero, .hero-slider, .hero-carousel, .ritual-hero'
    );
  }

  function findSlides(hero) {
    const selectors = [
      '[data-slide]',
      '.hero-slide',
      '.carousel-slide',
      '.slider-slide',
      '.swiper-slide',
      '.slide'
    ];

    for (const selector of selectors) {
      const slides = [...hero.querySelectorAll(selector)];
      if (slides.length >= 2) return [...new Set(slides)];
    }
    return [];
  }

  function arrowRole(el) {
    const t = norm([
      el.getAttribute('aria-label'),
      el.getAttribute('title'),
      el.dataset.direction,
      el.textContent
    ].filter(Boolean).join(' '));

    if (
      el.matches('[data-prev], .hero-prev, .slider-prev, .carousel-prev') ||
      /previous|prev|left|←|‹/.test(t)
    ) return 'prev';

    if (
      el.matches('[data-next], .hero-next, .slider-next, .carousel-next') ||
      /next|right|→|›/.test(t)
    ) return 'next';

    return '';
  }

  function wireHero() {
    const hero = findHero();
    if (!hero) return;

    const slides = findSlides(hero);
    if (slides.length < 2) return;

    hero.setAttribute('data-hero-slider', '');

    slides.forEach((slide, i) => {
      slide.classList.add('ritual-hero-slide');
      slide.dataset.ritualSlideIndex = String(i);
    });

    const sameParent = slides.every(s => s.parentElement === slides[0].parentElement);
    if (sameParent) slides[0].parentElement.classList.add('ritual-hero-layered');

    let index = Math.max(
      0,
      slides.findIndex(s => s.classList.contains('active') || s.classList.contains('is-active'))
    );

    let timer;

    const render = next => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-active', active);
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
      start();
    };

    [...hero.querySelectorAll(
      'button, [role="button"], a, [data-prev], [data-next], .hero-prev, .hero-next, .slider-prev, .slider-next, .carousel-prev, .carousel-next'
    )].forEach(btn => {
      const role = arrowRole(btn);
      if (!role) return;

      if (role === 'prev') btn.setAttribute('data-prev', '');
      if (role === 'next') btn.setAttribute('data-next', '');

      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        move(role === 'prev' ? -1 : 1);
      });
    });

    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', start);

    render(index);
    start();
  }

  function init() {
    removeStandaloneMagneticEditorial();
    normalizeTitles();
    wireCatalogueFilter();
    wireHero();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();