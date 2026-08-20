(() => {
  "use strict";

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function loadCleanStyles() {
    if (document.querySelector('link[href="homepage-clean.css"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "homepage-clean.css";
    document.head.appendChild(link);
  }

  function applyMeridianFix() {
    if (typeof products === "undefined") return;
    const meridian = products.find(product => product.id === "meridian-link");
    if (!meridian) return;

    meridian.image = "assets/meridian-link-cutout.png";
    meridian.secondary = "assets/catalogue-transparent/meridian-link-v2.webp";
    meridian.lifestyle = "assets/catalogue-angle-transparent/meridian-link-v2.webp";
    delete meridian.lifestyleFemale;

    const existingCardImage = qs('[data-product-id="meridian-link"] .product-card-visual img');
    if (existingCardImage) existingCardImage.src = meridian.image;
  }

  function simplifyHeader() {
    qs(".header-line")?.remove();

    const desktopNav = qs(".desktop-nav");
    if (desktopNav) {
      desktopNav.innerHTML = `
        <a href="#collection">Bracelets</a>
        <a href="#other-rituals">Other rituals</a>
      `;
    }

    const mobileNav = qs(".mobile-menu nav");
    if (mobileNav) {
      mobileNav.innerHTML = `
        <a href="#collection">Bracelets</a>
        <a href="#other-rituals">Other rituals</a>
        <button data-quote-open type="button">Wholesale cart <strong data-quote-count>0</strong></button>
      `;
    }

    const mobileFooter = qs(".mobile-menu > p");
    if (mobileFooter) mobileFooter.innerHTML = "Ritual by Nimed";

    // Re-bind the new mobile wholesale-cart button because the original was replaced.
    qs('[data-quote-open]', mobileNav)?.addEventListener("click", () => {
      qs("[data-quote-dialog]")?.showModal();
      document.body.classList.add("quote-open");
      if (typeof renderQuote === "function") renderQuote();
    });
  }

  function setupSmartHeader() {
    const header = qs("[data-header]");
    if (!header) return;

    let lastY = Math.max(0, window.scrollY);
    let ticking = false;

    const update = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      const locked = document.body.classList.contains("menu-open") ||
        document.body.classList.contains("dialog-open") ||
        document.body.classList.contains("quote-open");

      if (locked || y < 30) {
        header.classList.remove("is-hidden");
      } else if (delta > 9) {
        header.classList.add("is-hidden");
      } else if (delta < -6) {
        header.classList.remove("is-hidden");
      }

      lastY = y;
      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
  }

  function installEditorialHero() {
    if (qs(".editorial-hero")) return;

    const main = qs("main");
    if (!main) return;

    const slides = [
      {
        image: "assets/hero-archive/01-daily-edit.jpeg",
        pos: "54% 54%",
        label: "The daily edit",
        title: "Worn into <em>life.</em>",
        deck: "Everyday objects, worn properly."
      },
      {
        image: "assets/hero-archive/02-silver-edit.jpeg",
        pos: "51% 48%",
        label: "The silver edit",
        title: "Quiet. <em>Not invisible.</em>",
        deck: "Steel, softened by warm light."
      },
      {
        image: "assets/hero-archive/03-archive-edit.jpeg",
        pos: "56% 52%",
        label: "The archive edit",
        title: "Back in <em>circulation.</em>",
        deck: "Built to live beyond the product shot."
      },
      {
        image: "assets/hero-archive/04-club-edit.jpeg",
        pos: "58% 49%",
        label: "The club edit",
        title: "Colour with <em>history.</em>",
        deck: "Club colour, off the pitch."
      },
      {
        image: "assets/hero-archive/05-leisure-edit.jpeg",
        pos: "49% 52%",
        label: "The leisure edit",
        title: "Match day. <em>Off duty.</em>",
        deck: "Supporter culture, off duty."
      },
      {
        image: "assets/hero-archive/06-personal-edit.jpeg",
        pos: "49% 49%",
        label: "The personal edit",
        title: "Make it <em>yours.</em>",
        deck: "Engraving makes the object personal."
      },
      {
        image: "assets/hero-archive/07-road-edit.jpeg",
        pos: "51% 49%",
        label: "The road edit",
        title: "Sound. Sun. <em>Steel.</em>",
        deck: "Made for roads, records and routines."
      }
    ];

    const hero = document.createElement("section");
    hero.className = "editorial-hero is-running";
    hero.id = "top";
    hero.setAttribute("aria-label", "Ritual in-use slideshow");
    hero.innerHTML = `
      <div class="editorial-hero-masthead" aria-hidden="true">
        <strong>Ritual</strong>
        <span>In use / 71</span>
      </div>
      <div class="editorial-hero-track">
        ${slides.map((slide, index) => `
          <article class="editorial-hero-slide${index === 0 ? " is-active" : ""}" data-editorial-slide="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
            <div class="editorial-hero-media" style="--hero-pos:${slide.pos}">
              <img src="${slide.image}" alt="Ritual bracelet worn in an archival-inspired everyday setting" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
            </div>
            <div class="editorial-hero-copy">
              <p class="editorial-hero-overline">${slide.label}</p>
              <h1 class="editorial-hero-title">${slide.title}</h1>
              <p class="editorial-hero-deck">${slide.deck}</p>
              <a class="editorial-hero-action" href="#collection">Browse bracelets <span>→</span></a>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="editorial-hero-controls" aria-label="Slideshow controls">
        <button type="button" data-editorial-prev aria-label="Previous slide">←</button>
        <div class="editorial-hero-progress" aria-hidden="true"><span></span></div>
        <span class="editorial-hero-count" aria-live="polite"><b data-editorial-current>01</b> / 07</span>
        <button type="button" data-editorial-next aria-label="Next slide">→</button>
      </div>
    `;

    main.prepend(hero);

    const slideEls = qsa("[data-editorial-slide]", hero);
    const counter = qs("[data-editorial-current]", hero);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer = 0;
    let pointerStart = null;

    const restartProgress = () => {
      hero.classList.remove("is-running");
      void hero.offsetWidth;
      if (!reducedMotion) hero.classList.add("is-running");
    };

    const schedule = () => {
      window.clearInterval(timer);
      if (reducedMotion || document.hidden) return;
      timer = window.setInterval(() => show(current + 1), 6500);
    };

    const show = next => {
      current = (next + slides.length) % slides.length;
      slideEls.forEach((slide, index) => {
        const active = index === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      if (counter) counter.textContent = String(current + 1).padStart(2, "0");
      restartProgress();
    };

    qs("[data-editorial-prev]", hero)?.addEventListener("click", () => { show(current - 1); schedule(); });
    qs("[data-editorial-next]", hero)?.addEventListener("click", () => { show(current + 1); schedule(); });

    hero.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse") return;
      pointerStart = { x: event.clientX, y: event.clientY };
    }, { passive: true });

    hero.addEventListener("pointerup", event => {
      if (!pointerStart || event.pointerType === "mouse") return;
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      pointerStart = null;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        show(current + (dx < 0 ? 1 : -1));
        schedule();
      }
    }, { passive: true });

    document.addEventListener("visibilitychange", schedule);
    schedule();
  }

  function simplifyCatalogue() {
    qs(".ritual-home")?.remove();
    qs("#bracelets.hero")?.remove();

    const collection = qs("#collection");
    if (!collection) return;

    const heading = qs(".collection-heading", collection);
    if (heading) {
      heading.classList.add("collection-heading-clean");
      heading.innerHTML = `
        <div>
          <h2 id="collection-title">Bracelets</h2>
          <p class="bracelet-material-note">Stainless steel, woven, silicone and mixed-material builds. Hybrid models include magnetic construction; magnets have been studied for pain and circulation, but evidence remains mixed.</p>
        </div>
      `;
    }

    qs(".catalogue-update", collection)?.remove();

    const filterLabels = {
      all: "All",
      steel: "Stainless steel",
      hybrid: "Hybrid",
      woven: "Woven",
      silicon: "Silicone"
    };
    qsa("[data-filter]", collection).forEach(button => {
      if (filterLabels[button.dataset.filter]) button.textContent = filterLabels[button.dataset.filter];
    });
  }

  function simplifyEngraving() {
    const section = qs("#engraving");
    if (!section) return;
    qs(".section-index", section)?.remove();
    const title = qs("h2", section);
    if (title) title.textContent = "Custom engraving";
    qs(".engraving-kicker", section)?.remove();
    qs(".engraving-note", section)?.remove();
    qs(".arrow-link", section)?.remove();
    const body = qs(".engraving-body", section);
    if (body) body.textContent = "Names, dates, initials, Medical ID or a short message.";
  }

  function buildOtherRituals() {
    qs("#magnetic")?.remove();
    qs("#breathing")?.remove();

    const main = qs("main");
    const engraving = qs("#engraving");
    if (!main || qs("#other-rituals")) return;

    const section = document.createElement("section");
    section.id = "other-rituals";
    section.className = "other-rituals";
    section.innerHTML = `
      <div class="other-rituals-heading">
        <h2>Other rituals</h2>
      </div>
      <div class="other-rituals-grid">
        <article class="other-ritual-card">
          <div class="other-ritual-media"><img src="assets/ritual-expansion/magnetic-face-tool.webp" alt="Face Ritual Tool" loading="lazy"></div>
          <div class="other-ritual-copy">
            <h3>Face Ritual Tool</h3>
            <p>Stainless-steel rolling and gua-sha-style facial massage tool.</p>
            <div class="other-ritual-bottom">
              <span>AED 200</span>
              <label>Qty <input data-other-qty="face-ritual-tool" type="number" min="10" max="30" value="10" inputmode="numeric"></label>
              <button type="button" data-other-add="face-ritual-tool">Add to wholesale cart</button>
            </div>
          </div>
        </article>
        <article class="other-ritual-card">
          <div class="other-ritual-media"><img src="assets/ritual-expansion/magnetic-spheres-100.webp" alt="100 Magnetic Spheres" loading="lazy"></div>
          <div class="other-ritual-copy">
            <h3>100 Magnetic Spheres</h3>
            <p>A 100-piece magnetic construction set for adult tactile play.</p>
            <div class="other-ritual-bottom">
              <span>AED 150</span>
              <label>Qty <input data-other-qty="magnetic-spheres-100" type="number" min="10" value="10" inputmode="numeric"></label>
              <button type="button" data-other-add="magnetic-spheres-100">Add to wholesale cart</button>
            </div>
          </div>
        </article>
        <article class="other-ritual-card">
          <div class="other-ritual-media"><img src="assets/ritual-expansion/breathe-easy-packaging.png" alt="Breathe Easy reusable nasal dilators" loading="lazy"></div>
          <div class="other-ritual-copy">
            <h3>Breathe Easy</h3>
            <p>Reusable nasal dilators for a simple, drug-free breathing routine.</p>
            <div class="other-ritual-bottom single-action">
              <a href="mailto:info@pharmaservice.ae?subject=Ritual%20Breathe%20Easy%20wholesale%20enquiry">Wholesale enquiry <span>→</span></a>
            </div>
          </div>
        </article>
      </div>
    `;

    if (engraving?.nextSibling) engraving.parentNode.insertBefore(section, engraving.nextSibling);
    else main.appendChild(section);
  }

  function bindOtherRituals() {
    qsa("[data-other-add]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.otherAdd;
        const input = qs(`[data-other-qty="${id}"]`);
        if (!input || typeof addToQuote !== "function") return;

        const quantity = typeof normaliseQuantity === "function"
          ? normaliseQuantity(input.value, id)
          : Math.max(Number(input.min) || 1, Math.round(Number(input.value) || 1));

        input.value = quantity;
        addToQuote(id, quantity);
        const original = button.textContent;
        button.textContent = "Added";
        window.setTimeout(() => { button.textContent = original; }, 1100);
      });
    });
  }

  function softenRemainingText() {
    const footerBrand = qs(".footer-wordmark");
    if (footerBrand) footerBrand.textContent = "Ritual";

    qsa(".header-quote").forEach(button => {
      const count = qs("[data-quote-count]", button)?.textContent || "0";
      button.innerHTML = `Wholesale cart <span data-quote-count>${count}</span>`;
    });
  }

  loadCleanStyles();
  applyMeridianFix();
  simplifyHeader();
  installEditorialHero();
  simplifyCatalogue();
  simplifyEngraving();
  buildOtherRituals();
  bindOtherRituals();
  softenRemainingText();
  setupSmartHeader();
})();
