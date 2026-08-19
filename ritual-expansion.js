(() => {
  const magneticIds = ["polar-link", "cobalt-ion", "ion-arc"];
  const magneticSet = new Set(magneticIds);

  const magneticProductCopy = {
    "polar-link": "Hybrid magnet bracelet",
    "cobalt-ion": "Hybrid magnet bracelet",
    "ion-arc": "Hybrid magnet bracelet"
  };

  function injectMagnetStyles() {
    if (document.getElementById("ritual-magnet-focus-styles")) return;
    const style = document.createElement("style");
    style.id = "ritual-magnet-focus-styles";
    style.textContent = `
      /* RITUAL / HYBRID MAGNET FOCUS — light theme, mobile-first */
      .ritual-line-card.magnet-home-card {
        position: relative;
        background: #f8f1e8;
      }
      .ritual-line-card.magnet-home-card::before {
        content: "";
        position: absolute;
        left: -1px;
        right: -1px;
        top: -1px;
        height: 3px;
        background: var(--rust);
      }
      .ritual-line-card.magnet-home-card strong { color: var(--rust); }

      .magnetic-rituals.magnet-focus {
        background: #f7f3eb;
        border-top: 4px solid var(--rust);
      }
      .magnetic-rituals.magnet-focus .ritual-section-heading {
        align-items: center;
        margin-bottom: 30px;
      }
      .magnetic-rituals.magnet-focus .ritual-section-heading h2 {
        max-width: 920px;
        color: var(--ink);
      }
      .magnetic-rituals.magnet-focus .ritual-section-heading h2::after {
        content: "MAGNETIC INSERTS / SELECTED MODELS";
        display: block;
        margin-top: 18px;
        font: 600 9px/1.2 var(--body);
        letter-spacing: .16em;
        color: var(--rust);
      }

      .magnet-principles {
        max-width: 1480px;
        margin: 0 auto 38px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border: 1px solid var(--line);
        background: #fbfaf6;
      }
      .magnet-principles span {
        min-height: 82px;
        padding: 18px 20px;
        border-right: 1px solid var(--line);
        display: grid;
        align-content: center;
        gap: 7px;
      }
      .magnet-principles span:last-child { border-right: 0; }
      .magnet-principles strong {
        font: 600 8px/1 var(--body);
        letter-spacing: .15em;
        color: var(--rust);
      }
      .magnet-principles b {
        font: 400 24px/1 var(--heading);
        color: var(--ink);
      }

      .magnetic-bracelet-heading {
        max-width: 1480px;
        margin: 0 auto 20px;
        display: grid;
        grid-template-columns: minmax(0, .8fr) minmax(320px, 1fr);
        gap: 6vw;
        align-items: end;
      }
      .magnetic-bracelet-heading h3 {
        margin: 0;
        font: 400 clamp(38px, 4.2vw, 66px)/.92 var(--heading);
        letter-spacing: -.025em;
      }
      .magnetic-bracelet-heading p {
        margin: 0;
        max-width: 620px;
        color: #5d584f;
        font-size: 15px;
        line-height: 1.6;
      }

      .magnetic-bracelet-grid {
        max-width: 1480px;
        margin: 0 auto 38px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
      }
      .magnetic-bracelet-card {
        position: relative;
        min-width: 0;
        padding: 0;
        border: 1px solid var(--line);
        background: #fbfaf6;
        color: var(--ink);
        text-align: left;
        cursor: pointer;
        overflow: hidden;
      }
      .magnetic-bracelet-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 3px;
        background: var(--rust);
        z-index: 2;
      }
      .magnetic-bracelet-card img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        background: #f3efe6;
      }
      .magnetic-bracelet-card .magnet-card-copy {
        display: grid;
        gap: 8px;
        padding: 17px 18px 19px;
      }
      .magnet-card-badge,
      .catalogue-magnet-badge,
      .magnet-dialog-badge {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px 5px;
        background: var(--rust);
        color: #fff;
        font: 600 8px/1 var(--body);
        letter-spacing: .14em;
        text-transform: uppercase;
      }
      .magnetic-bracelet-card strong {
        font: 400 28px/1 var(--heading);
      }
      .magnetic-bracelet-card .magnet-card-meta {
        color: #686158;
        font-size: 11px;
        line-height: 1.45;
      }
      .magnetic-bracelet-card .magnet-card-price {
        margin-top: 4px;
        font-size: 10px;
        letter-spacing: .08em;
        text-transform: uppercase;
      }

      .magnetic-note {
        margin-top: 0;
        margin-bottom: 48px;
      }
      .magnetic-note h3 { color: var(--ink); }
      .research-areas strong { color: var(--rust); }

      .magnetic-other-heading {
        max-width: 1480px;
        margin: 14px auto 20px;
        padding-top: 34px;
        border-top: 1px solid var(--line);
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: end;
      }
      .magnetic-other-heading h3 {
        margin: 0;
        font: 400 clamp(30px, 3.2vw, 48px)/1 var(--heading);
      }
      .magnetic-other-heading span {
        font-size: 9px;
        letter-spacing: .14em;
        color: var(--rust);
        text-transform: uppercase;
      }

      .product-card.is-magnetic-product .product-card-visual { position: relative; }
      .catalogue-magnet-badge {
        position: absolute;
        left: 16px;
        bottom: 16px;
        z-index: 3;
        box-shadow: 0 3px 14px rgba(60, 35, 20, .08);
      }
      .product-card.is-magnetic-product .product-card-info {
        border-color: rgba(168, 73, 43, .48);
      }
      .product-card.is-magnetic-product .product-card-info > div > p:first-of-type {
        color: var(--rust);
      }

      .magnet-dialog-badge { margin-top: 8px; }
      .magnet-dialog-note {
        margin: 12px 0 0;
        padding: 12px 14px;
        border: 1px solid rgba(168, 73, 43, .28);
        background: #faf4ec;
        color: #5f554c;
        font-size: 11px;
        line-height: 1.55;
      }

      .magnetic-filter-button { color: var(--rust) !important; }
      .magnetic-filter-button.is-active {
        background: var(--rust) !important;
        color: #fff !important;
        border-color: var(--rust) !important;
      }
      .magnetic-catalogue-jump {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 18px 0 26px;
        padding: 15px 17px;
        border: 1px solid rgba(168, 73, 43, .4);
        background: #faf4ec;
        color: var(--ink);
        text-decoration: none;
        cursor: pointer;
      }
      .magnetic-catalogue-jump strong {
        font: 400 20px/1 var(--heading);
      }
      .magnetic-catalogue-jump span {
        font-size: 8px;
        letter-spacing: .14em;
        color: var(--rust);
        text-transform: uppercase;
      }

      @media (max-width: 760px) {
        .magnetic-rituals.magnet-focus { border-top-width: 3px; }
        .magnetic-rituals.magnet-focus .ritual-section-heading h2::after {
          margin-top: 14px;
          font-size: 8px;
        }
        .magnet-principles { grid-template-columns: 1fr; }
        .magnet-principles span {
          min-height: 0;
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }
        .magnet-principles span:last-child { border-bottom: 0; }
        .magnet-principles b { font-size: 21px; }
        .magnetic-bracelet-heading { grid-template-columns: 1fr; gap: 14px; }
        .magnetic-bracelet-grid { grid-template-columns: 1fr; gap: 12px; }
        .magnetic-bracelet-card img { aspect-ratio: 1.1 / 1; object-position: center 42%; }
        .magnetic-other-heading { align-items: start; flex-direction: column; gap: 8px; }
        .catalogue-magnet-badge { left: 12px; bottom: 12px; }
        .magnetic-catalogue-jump { align-items: flex-start; flex-direction: column; }
      }

      @media (max-width: 430px) {
        .magnetic-bracelet-card strong { font-size: 25px; }
        .magnet-card-badge, .catalogue-magnet-badge, .magnet-dialog-badge { font-size: 7px; }
      }
    `;
    document.head.appendChild(style);
  }

  function relabelMagneticExperience() {
    const homeCard = document.querySelector('.ritual-line-card[href="#magnetic"]');
    if (homeCard) {
      homeCard.classList.add("magnet-home-card");
      const label = homeCard.querySelector("span");
      const title = homeCard.querySelector("strong");
      const action = homeCard.querySelector("b");
      if (label) label.textContent = "02 / MAGNETIC RITUALS";
      if (title) title.textContent = "HYBRID MAGNET BRACELETS";
      if (action) action.textContent = "Magnets + tools →";
    }

    const desktopNav = document.querySelector('.desktop-nav a[href="#magnetic"]');
    if (desktopNav) desktopNav.textContent = "Hybrid Magnet";

    const mobileNav = document.querySelector('.mobile-menu a[href="#magnetic"]');
    if (mobileNav) mobileNav.innerHTML = '<span>03</span> Hybrid Magnet Bracelets';

    const section = document.querySelector("#magnetic");
    if (!section) return;
    section.classList.add("magnet-focus");

    const sectionIndex = section.querySelector(".ritual-section-heading .section-index");
    const title = section.querySelector("#magnetic-title");
    const intro = section.querySelector(".ritual-section-heading > p");
    if (sectionIndex) sectionIndex.textContent = "04 / Magnetic Rituals";
    if (title) title.innerHTML = "Hybrid Magnet<br>Bracelets";
    if (intro) intro.textContent = "A selected bracelet line combining steel, silicone and visible magnetic inserts — plus a small edit of magnetic tools and objects.";

    const note = section.querySelector(".magnetic-note");
    if (note) {
      const noteIndex = note.querySelector(".section-index");
      const noteTitle = note.querySelector("h3");
      const noteText = note.querySelector("p:not(.section-index)");
      if (noteIndex) noteIndex.textContent = "Magnetic construction";
      if (noteTitle) noteTitle.textContent = "Magnetism, built in.";
      if (noteText) noteText.textContent = "On these selected products, magnets are a visible part of the construction and the product story. RITUAL presents magnetism as a distinctive material feature and tactile novelty — not as medical treatment.";
      const areas = note.querySelector(".research-areas");
      if (areas) areas.innerHTML = `
        <span><strong>01 / visible</strong>Magnetic inserts</span>
        <span><strong>02 / hybrid</strong>Steel + silicone construction</span>
        <span><strong>03 / selected</strong>Verified magnetic models only</span>
      `;
    }

    let principles = section.querySelector(".magnet-principles");
    if (!principles) {
      principles = document.createElement("div");
      principles.className = "magnet-principles";
      principles.innerHTML = `
        <span><strong>01 / FEATURE</strong><b>Visible magnetic inserts</b></span>
        <span><strong>02 / BUILD</strong><b>Hybrid material construction</b></span>
        <span><strong>03 / EDIT</strong><b>Only verified magnetic models</b></span>
      `;
      const heading = section.querySelector(".ritual-section-heading");
      heading?.insertAdjacentElement("afterend", principles);
    }

    const braceletHeading = section.querySelector(".magnetic-bracelet-heading");
    const braceletGrid = section.querySelector(".magnetic-bracelet-grid");
    if (braceletHeading) {
      const h3 = braceletHeading.querySelector("h3");
      const p = braceletHeading.querySelector("p");
      if (h3) h3.textContent = "Hybrid Magnet Bracelets";
      if (p) p.textContent = "These are the bracelet models where magnetic inserts are visibly part of the construction. Open a model to view the product, wholesale tiers and personalisation options.";
    }

    // Put the magnetic bracelet edit first — before the research note and tools.
    const firstContent = note || section.querySelector(".magnetic-feature-grid");
    if (firstContent && braceletHeading && braceletGrid) {
      section.insertBefore(braceletHeading, firstContent);
      section.insertBefore(braceletGrid, firstContent);
    }

    const featureGrid = section.querySelector(".magnetic-feature-grid");
    if (featureGrid && !section.querySelector(".magnetic-other-heading")) {
      const otherHeading = document.createElement("div");
      otherHeading.className = "magnetic-other-heading";
      otherHeading.innerHTML = '<h3>Other Magnetic Rituals</h3><span>Face tool / Magnetic spheres</span>';
      featureGrid.insertAdjacentElement("beforebegin", otherHeading);
    }
  }

  function renderMagneticBracelets() {
    const target = document.querySelector("[data-magnetic-bracelets]");
    if (!target || typeof products === "undefined") return;

    const items = magneticIds
      .map(id => products.find(product => product.id === id))
      .filter(Boolean);

    target.innerHTML = items.map(product => `
      <button class="magnetic-bracelet-card" type="button" data-magnetic-product="${product.id}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name} hybrid magnet bracelet" loading="lazy">
        <span class="magnet-card-copy">
          <span class="magnet-card-badge">Hybrid Magnet</span>
          <strong>${product.name}</strong>
          <span class="magnet-card-meta">Magnetic inserts · ${product.series}</span>
          <span class="magnet-card-price">RRP ${formatAED(pricing[product.id].retail)} · View product →</span>
        </span>
      </button>
    `).join("");

    target.querySelectorAll("[data-magnetic-product]").forEach(button => {
      button.addEventListener("click", () => {
        openProduct(button.dataset.magneticProduct);
        decorateDialog(button.dataset.magneticProduct);
      });
    });
  }

  function decorateCatalogueCards() {
    document.querySelectorAll("[data-product-id]").forEach(button => {
      const id = button.dataset.productId;
      const card = button.closest(".product-card");
      if (!card) return;

      const existing = card.querySelector(".catalogue-magnet-badge");
      if (!magneticSet.has(id)) {
        card.classList.remove("is-magnetic-product");
        existing?.remove();
        return;
      }

      card.classList.add("is-magnetic-product");
      if (!existing) {
        const visual = card.querySelector(".product-card-visual");
        const badge = document.createElement("span");
        badge.className = "catalogue-magnet-badge";
        badge.textContent = "Hybrid Magnet";
        visual?.appendChild(badge);
      }

      const seriesLabel = card.querySelector(".product-card-info p");
      if (seriesLabel) seriesLabel.textContent = magneticProductCopy[id];
    });
  }

  function setupMagneticCatalogueFilter() {
    const filters = document.querySelector(".filters");
    if (!filters || filters.querySelector("[data-magnetic-filter]")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "magnetic-filter-button";
    button.dataset.magneticFilter = "";
    button.textContent = "Hybrid magnet";
    filters.appendChild(button);

    const collectionGuide = document.querySelector("#collection .catalogue-update");
    if (collectionGuide && !document.querySelector(".magnetic-catalogue-jump")) {
      const jump = document.createElement("button");
      jump.type = "button";
      jump.className = "magnetic-catalogue-jump";
      jump.innerHTML = '<strong>Looking for magnets?</strong><span>Show 3 Hybrid Magnet Bracelets →</span>';
      collectionGuide.insertAdjacentElement("afterend", jump);
      jump.addEventListener("click", () => button.click());
    }

    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
      if (typeof renderProducts === "function") renderProducts("all");
      requestAnimationFrame(() => {
        document.querySelectorAll("[data-product-id]").forEach(productButton => {
          const card = productButton.closest(".product-card");
          if (card) card.hidden = !magneticSet.has(productButton.dataset.productId);
        });
        const count = document.querySelector("[data-product-count]");
        if (count) count.textContent = String(magneticIds.length);
        decorateCatalogueCards();
      });
    });

    document.querySelectorAll("[data-filter]").forEach(normalFilter => {
      normalFilter.addEventListener("click", () => button.classList.remove("is-active"));
    });
  }

  function decorateDialog(productId = document.querySelector("[data-dialog]")?.dataset.productId) {
    const meta = document.querySelector(".dialog-product-meta");
    if (!meta) return;
    meta.querySelector(".magnet-dialog-badge")?.remove();
    document.querySelector(".magnet-dialog-note")?.remove();

    if (!magneticSet.has(productId)) return;

    const badge = document.createElement("span");
    badge.className = "magnet-dialog-badge";
    badge.textContent = "Hybrid Magnet Bracelet";
    meta.appendChild(badge);

    const description = document.querySelector("[data-dialog-description]");
    if (description) {
      const note = document.createElement("p");
      note.className = "magnet-dialog-note";
      note.innerHTML = "<strong>Magnetic construction:</strong> this model includes visible magnetic inserts as part of its hybrid bracelet construction.";
      description.insertAdjacentElement("afterend", note);
    }

    const seriesLabel = document.querySelector("[data-dialog-series]");
    if (seriesLabel) seriesLabel.textContent = "Hybrid Magnet Bracelet / Ion Balance";
  }

  function bindMagneticShop() {
    document.querySelectorAll("[data-magnetic-add]").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.magneticAdd;
        const input = document.querySelector(`[data-magnetic-qty="${id}"]`);
        const quantity = normaliseQuantity(input?.value, id);
        if (input) input.value = quantity;
        addToQuote(id, quantity);

        const original = button.textContent;
        button.textContent = "Added to wholesale cart";
        window.setTimeout(() => { button.textContent = original; }, 1400);
      });
    });

    document.querySelectorAll("[data-magnetic-qty]").forEach(input => {
      input.addEventListener("change", () => {
        input.value = normaliseQuantity(input.value, input.dataset.magneticQty);
      });
    });
  }



  /* ----------------------------------------------------------
     RITUAL / IN USE — 70s magazine-inspired hero slideshow
     Photography is supplied by RITUAL; no generated imagery.
     ---------------------------------------------------------- */
  function installEditorialHero() {
    if (document.querySelector(".editorial-hero")) return;

    if (!document.querySelector('link[href="hero-editorial.css"]')) {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "hero-editorial.css";
      document.head.appendChild(css);
    }

    const chooser = document.getElementById("top");
    if (!chooser) return;
    chooser.id = "ritual-chooser";

    const slides = [
      {
        image: "assets/hero-archive/01-daily-edit.jpeg",
        pos: "54% 54%",
        overline: "RITUAL / THE DAILY EDIT",
        title: "Worn into <em>life.</em>",
        deck: "Bracelets made to leave the product shot and enter the everyday — hands, records, cameras, roads and routines.",
        caption: "IN USE / ISSUE 01 / DAILY OBJECTS"
      },
      {
        image: "assets/hero-archive/02-silver-edit.jpeg",
        pos: "51% 48%",
        overline: "RITUAL / THE SILVER EDIT",
        title: "Quiet. <em>Not invisible.</em>",
        deck: "Clean stainless steel, soft light and the kind of styling that feels found rather than staged.",
        caption: "IN USE / ISSUE 02 / SILVER"
      },
      {
        image: "assets/hero-archive/03-archive-edit.jpeg",
        pos: "56% 52%",
        overline: "RITUAL / THE ARCHIVE EDIT",
        title: "Back in <em>circulation.</em>",
        deck: "A bracelet beside old sleeves, paper, timber and warm afternoon light — more archive than advertisement.",
        caption: "IN USE / ISSUE 03 / ARCHIVE"
      },
      {
        image: "assets/hero-archive/04-club-edit.jpeg",
        pos: "58% 49%",
        overline: "RITUAL / THE CLUB EDIT",
        title: "Colour with <em>history.</em>",
        deck: "Club identity treated like vintage leisurewear: easy, nostalgic and built to live beyond match day.",
        caption: "IN USE / ISSUE 04 / CLUB COLOUR"
      },
      {
        image: "assets/hero-archive/05-leisure-edit.jpeg",
        pos: "49% 52%",
        overline: "RITUAL / THE LEISURE EDIT",
        title: "Match day. <em>Off duty.</em>",
        deck: "A softer side of supporter culture — sun-faded colour, paperback pages and an everyday wrist.",
        caption: "IN USE / ISSUE 05 / LEISURE"
      },
      {
        image: "assets/hero-archive/06-personal-edit.jpeg",
        pos: "49% 49%",
        overline: "RITUAL / THE PERSONAL EDIT",
        title: "Make it <em>yours.</em>",
        deck: "Personalisation belongs in the object, not on top of it. Engraving, Medical ID and QR options are built into the catalogue flow.",
        caption: "IN USE / ISSUE 06 / PERSONAL"
      },
      {
        image: "assets/hero-archive/07-road-edit.jpeg",
        pos: "51% 49%",
        overline: "RITUAL / THE ROAD EDIT",
        title: "Sound. Sun. <em>Steel.</em>",
        deck: "The collection photographed the way it should feel: tactile, warm, slightly imperfect and already part of a story.",
        caption: "IN USE / ISSUE 07 / ROAD"
      }
    ];

    const hero = document.createElement("section");
    hero.className = "editorial-hero is-running";
    hero.id = "top";
    hero.setAttribute("aria-label", "RITUAL in-use editorial slideshow");

    hero.innerHTML = `
      <div class="editorial-hero-masthead" aria-hidden="true">
        <strong>RITUAL</strong>
        <span>In use / archive 71</span>
      </div>
      <div class="editorial-hero-track">
        ${slides.map((slide, index) => `
          <article class="editorial-hero-slide${index === 0 ? " is-active" : ""}" data-editorial-slide="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
            <div class="editorial-hero-media" style="--hero-pos:${slide.pos}">
              <img src="${slide.image}" alt="RITUAL bracelet photographed in a warm archival-inspired everyday setting" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
            </div>
            <div class="editorial-hero-copy">
              <div class="editorial-hero-kicker"><span>NIMED / RITUAL / DUBAI</span><span>VOL. 71</span></div>
              <div class="editorial-hero-title-wrap">
                <p class="editorial-hero-overline">${slide.overline}</p>
                <h1 class="editorial-hero-title">${slide.title}</h1>
                <p class="editorial-hero-deck">${slide.deck}</p>
                <div class="editorial-hero-actions">
                  <a href="#collection">Browse bracelets →</a>
                  <a href="#magnetic">Hybrid magnet edit →</a>
                </div>
              </div>
              <div class="editorial-hero-footer">
                <span class="editorial-hero-caption">${slide.caption}<br>WHOLESALE CATALOGUE / 2026</span>
                <span class="editorial-hero-issue">New</span>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="editorial-hero-controls" aria-label="Slideshow controls">
        <div class="editorial-hero-arrows">
          <button type="button" data-editorial-prev aria-label="Previous slide">←</button>
          <button type="button" data-editorial-next aria-label="Next slide">→</button>
        </div>
        <div class="editorial-hero-progress" aria-hidden="true"><span></span></div>
        <div class="editorial-hero-count" aria-live="polite"><span data-editorial-current>01</span> / 07</div>
      </div>
      <div class="editorial-hero-dots" aria-label="Choose slideshow image">
        ${slides.map((_, index) => `<button type="button" data-editorial-dot="${index}" aria-label="Go to slide ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}
      </div>
    `;

    chooser.parentNode.insertBefore(hero, chooser);

    const slideEls = [...hero.querySelectorAll("[data-editorial-slide]")];
    const dots = [...hero.querySelectorAll("[data-editorial-dot]")];
    const counter = hero.querySelector("[data-editorial-current]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer = null;
    let pointerStart = null;

    const restartProgress = () => {
      hero.classList.remove("is-running");
      void hero.offsetWidth;
      if (!reducedMotion) hero.classList.add("is-running");
    };

    const show = (next, userInitiated = false) => {
      current = (next + slides.length) % slides.length;
      slideEls.forEach((slide, index) => {
        const active = index === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, index) => dot.setAttribute("aria-current", String(index === current)));
      if (counter) counter.textContent = String(current + 1).padStart(2, "0");
      restartProgress();
      if (userInitiated) schedule();
    };

    const schedule = () => {
      window.clearInterval(timer);
      if (reducedMotion || document.hidden) return;
      timer = window.setInterval(() => show(current + 1, false), 6500);
    };

    hero.querySelector("[data-editorial-prev]")?.addEventListener("click", () => show(current - 1, true));
    hero.querySelector("[data-editorial-next]")?.addEventListener("click", () => show(current + 1, true));
    dots.forEach(dot => dot.addEventListener("click", () => show(Number(dot.dataset.editorialDot), true)));

    hero.addEventListener("mouseenter", () => window.clearInterval(timer));
    hero.addEventListener("mouseleave", schedule);
    hero.addEventListener("focusin", () => window.clearInterval(timer));
    hero.addEventListener("focusout", event => {
      if (!hero.contains(event.relatedTarget)) schedule();
    });

    hero.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") show(current - 1, true);
      if (event.key === "ArrowRight") show(current + 1, true);
    });

    hero.addEventListener("pointerdown", event => {
      if (event.pointerType === "mouse") return;
      pointerStart = { x: event.clientX, y: event.clientY };
    }, { passive: true });
    hero.addEventListener("pointerup", event => {
      if (!pointerStart || event.pointerType === "mouse") return;
      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;
      pointerStart = null;
      if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.25) show(current + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    document.addEventListener("visibilitychange", schedule);
    schedule();
  }

  installEditorialHero();
  injectMagnetStyles();
  relabelMagneticExperience();
  renderMagneticBracelets();
  bindMagneticShop();
  decorateCatalogueCards();
  setupMagneticCatalogueFilter();

  const productGrid = document.querySelector("[data-product-grid]");
  if (productGrid) {
    new MutationObserver(() => decorateCatalogueCards()).observe(productGrid, { childList: true, subtree: true });
  }

  const dialog = document.querySelector("[data-dialog]");
  if (dialog) {
    new MutationObserver(() => decorateDialog(dialog.dataset.productId)).observe(dialog, {
      attributes: true,
      attributeFilter: ["data-product-id"]
    });
  }
})();
