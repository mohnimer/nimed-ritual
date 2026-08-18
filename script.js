document.body.classList.add("motion-ready");

const products = [
  {
    id: "double-halo-black",
    code: "B38B",
    name: "The Double Halo",
    category: "hybrid",
    series: "Modern Statements",
    unisex: true,
    image: "assets/catalogue-inuse-updated/double-halo-black-main.png",
    secondary: "assets/catalogue-transparent/double-halo-black.webp",
    lifestyle: "assets/catalogue-lifestyle/double-halo-black.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/double-halo-black.webp",
    description: "A silicon-and-steel hybrid defined by bold inlays and twin crystal accents, designed for confident everyday wear. Get in black or white."
  },
  {
    id: "double-halo-white",
    code: "B38W",
    name: "The Double Halo",
    category: "hybrid",
    series: "Modern Statements",
    unisex: true,
    image: "assets/catalogue-transparent/double-halo-white.webp",
    lifestyle: "assets/catalogue-lifestyle/double-halo-white.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/double-halo-white.webp",
    description: "A silicon-and-steel hybrid defined by bold inlays and twin crystal accents, designed for confident everyday wear. Get in black or white."
  },
  {
    id: "meridian-link",
    code: "S01",
    name: "The Meridian Link",
    category: "steel",
    series: "Modern Statements",
    unisex: true,
    image: "assets/catalogue-inuse-updated/meridian-link-main.png",
    secondary: "assets/catalogue-transparent/meridian-link-v2.webp",
    lifestyle: "assets/catalogue-angle-transparent/meridian-link-v2.webp",
    lifestyleFemale: "assets/catalogue-lifestyle/meridian-link.webp",
    description: "A slim articulated steel bracelet with repeating architectural links for a sharp, understated finish."
  },
  {
    id: "obsidian-link",
    code: "SC17",
    name: "The Obsidian Link",
    category: "steel",
    series: "Signature Edit",
    unisex: true,
    image: "assets/catalogue-transparent/obsidian-link.webp",
    secondary: "assets/catalogue-angle-transparent/obsidian-link.webp",
    lifestyle: "assets/catalogue-lifestyle/obsidian-link.webp",
    description: "Fluid stainless steel links with black oval inlays for a sleek, understated statement."
  },
  {
    id: "axis",
    code: "B32",
    name: "The Axis",
    category: "hybrid",
    series: "Signature Edit",
    image: "assets/catalogue-inuse-updated/axis-main.png",
    secondary: "assets/catalogue-transparent/axis.webp",
    lifestyle: "assets/catalogue-angle-transparent/axis.webp",
    description: "Minimal and architectural, balancing a clean steel plate with dual black cords."
  },
  {
    id: "bold-ss",
    code: "S07",
    name: "Bold SS",
    category: "steel",
    series: "Signature Edit",
    image: "assets/catalogue-transparent/bold-ss.webp",
    secondary: "assets/catalogue-angle-transparent/bold-ss.webp",
    lifestyle: "assets/catalogue-lifestyle/bold-ss.webp",
    description: "Polished silver links shaped into a streamlined silhouette with a sharp, contemporary finish."
  },
  {
    id: "halo-line",
    code: "B35",
    name: "The Halo Line",
    category: "hybrid",
    series: "Hybrid Series",
    image: "assets/catalogue-inuse-updated/halo-line-main.png",
    secondary: "assets/catalogue-transparent/halo-line.webp",
    lifestyle: "assets/catalogue-angle-transparent/halo-line.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/halo-line.webp",
    description: "Bright steel with dark edge inlays and a crystal-set center plaque."
  },
  {
    id: "quiet-balance",
    code: "B24",
    name: "Quiet Balance",
    category: "hybrid",
    series: "Hybrid Series",
    unisex: true,
    image: "assets/catalogue-transparent/quiet-balance.webp",
    secondary: "assets/catalogue-angle-transparent/quiet-balance.webp",
    lifestyle: "assets/catalogue-lifestyle/quiet-balance-v2.png",
    lifestyleFemale: "assets/catalogue-lifestyle-women/quiet-balance-v2.png",
    description: "A softly curved steel plate with a clean black strap."
  },
  {
    id: "noir-curve",
    code: "B31",
    name: "The Noir Curve",
    category: "hybrid",
    series: "Hybrid Series",
    unisex: true,
    image: "assets/catalogue-transparent/noir-curve.webp",
    secondary: "assets/catalogue-angle-transparent/noir-curve.webp",
    lifestyle: "assets/catalogue-lifestyle/noir-curve.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/noir-curve.webp",
    description: "A sleek black-and-steel design with a polished elongated plaque and crystal accent."
  },
  {
    id: "national",
    code: "W02",
    name: "The National",
    category: "woven",
    series: "Woven Spirit",
    unisex: true,
    image: "assets/catalogue-inuse-updated/national-main.png",
    secondary: "assets/catalogue-transparent/national.webp",
    lifestyle: "assets/catalogue-angle-transparent/national.webp",
    lifestyleFemale: "assets/catalogue-lifestyle/national.webp",
    description: "A black woven double-cord bracelet with crisp white patterning and a UAE flag centerpiece for a sharper, graphic look."
  },
  {
    id: "union-71",
    code: "W01",
    name: "Union 71",
    category: "woven",
    series: "Field Edition 01",
    unisex: true,
    image: "assets/catalogue-transparent/union-71.webp",
    secondary: "assets/catalogue-angle-transparent/union-71.webp",
    lifestyle: "assets/catalogue-lifestyle/union-71.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/union-71.webp",
    description: "Desert-toned woven cord with a UAE flag centerpiece, drawing on the colours and character of field uniform."
  },
  {
    id: "tide",
    code: "B81",
    name: "The Tide",
    category: "woven",
    series: "Woven Spirit",
    unisex: true,
    image: "assets/catalogue-inuse-updated/tide-main.png",
    secondary: "assets/catalogue-transparent/tide.webp",
    lifestyle: "assets/catalogue-angle-transparent/tide.webp",
    lifestyleFemale: "assets/catalogue-inuse-updated/tide-alt.png",
    description: "A light woven cord bracelet finished with matte black hardware and subtle typographic detailing for an easy, casual statement."
  },
  {
    id: "manchester-city",
    code: "C02",
    name: "Manchester City Edition",
    category: "silicon",
    series: "Club Passion",
    unisex: true,
    image: "assets/catalogue-transparent/manchester-city.webp",
    secondary: "assets/catalogue-angle-transparent/manchester-city.webp",
    lifestyle: "assets/catalogue-lifestyle/manchester-city.webp",
    description: "Sky-blue silicone with gold piping and club detailing for supporters who wear the game with pride."
  },
  {
    id: "barcelona",
    code: "C03",
    name: "Barcelona Edition",
    category: "silicon",
    series: "Club Passion",
    unisex: true,
    image: "assets/catalogue-transparent/barcelona.webp",
    secondary: "assets/catalogue-angle-transparent/barcelona-v2.webp",
    lifestyle: "assets/catalogue-lifestyle/barcelona.webp",
    description: "Deep blaugrana tones and crest details create a bold supporter piece with unmistakable identity."
  },
  {
    id: "real-madrid",
    code: "C04",
    name: "Real Madrid Edition",
    category: "silicon",
    series: "Club Passion",
    unisex: true,
    image: "assets/catalogue-transparent/real-madrid.webp",
    secondary: "assets/catalogue-angle-transparent/real-madrid.webp",
    lifestyle: "assets/catalogue-lifestyle/real-madrid.webp",
    description: "Clean white styling with gold accents and crest detailing for a crisp, celebratory statement."
  },
  {
    id: "red-medallion",
    code: "NEW-01",
    name: "The Red Orbit",
    category: "hybrid",
    series: "New Arrivals",
    image: "assets/catalogue-inuse-updated/red-medallion-main.png",
    secondary: "assets/catalogue-transparent/red-medallion.webp",
    lifestyle: "assets/catalogue-angle-transparent/red-medallion-v2.webp",
    description: "A bold black strap framed by polished steel and a circular red nine-point centerpiece."
  },
  {
    id: "slim-link",
    code: "NEW-02",
    name: "The Slim Link",
    category: "steel",
    series: "Flagship Stainless Steel",
    image: "assets/catalogue-transparent/slim-link-steel-v2.webp",
    secondary: "assets/catalogue-angle-transparent/slim-link-steel-v2.webp",
    lifestyle: "assets/catalogue-lifestyle/slim-link-steel-v2.webp",
    description: "A flagship all-stainless-steel construction pairing elongated polished bars with compact articulated connectors."
  },
  {
    id: "braided-id",
    code: "NEW-03",
    name: "The Braided ID",
    category: "hybrid",
    series: "New Arrivals",
    unisex: true,
    image: "assets/catalogue-transparent/braided-id.webp",
    secondary: "assets/catalogue-angle-transparent/braided-id-v2.webp",
    lifestyle: "assets/catalogue-lifestyle/braided-id.webp",
    lifestyleFemale: "assets/catalogue-lifestyle-women/braided-id.webp",
    description: "Braided black cord, a curved steel ID plate and magnetic clasp in an easy everyday construction."
  }
];



// Magnetic Rituals products live in the same wholesale cart, but stay out of the bracelet catalogue.
products.push(
  {
    id: "face-ritual-tool",
    code: "MAG-FACE",
    name: "The Face Ritual Tool",
    category: "magnetic",
    series: "Magnetic Rituals",
    hiddenFromCatalogue: true,
    personalisation: false,
    preserveLifestyle: true,
    image: "assets/ritual-expansion/magnetic-face-tool.webp",
    secondary: "assets/ritual-expansion/magnetic-face-tool-box.webp",
    lifestyle: "assets/ritual-expansion/magnetic-face-tool-inuse-neck.webp",
    minQty: 10,
    maxQty: 30,
    description: "A stainless-steel facial and neck massage tool for rolling and gua-sha-style gliding, with magnetic inserts as part of the product construction."
  },
  {
    id: "magnetic-spheres-100",
    code: "MAG-100",
    name: "100 Magnetic Spheres",
    category: "magnetic",
    series: "Magnetic Rituals",
    hiddenFromCatalogue: true,
    personalisation: false,
    preserveLifestyle: true,
    image: "assets/ritual-expansion/magnetic-spheres-100.webp",
    lifestyle: "assets/ritual-expansion/magnetic-spheres-100.webp",
    minQty: 10,
    maxQty: 9999,
    description: "A 100-piece set of polished magnetic spheres for adult desktop construction, pattern-making and tactile play."
  }
);

const pricing = {
  "face-ritual-tool": { retail: 200, minQty: 10, maxQty: 30, tiers: [{min:10, unit:150}, {min:20, unit:138}, {min:30, unit:127.50}] },
  "magnetic-spheres-100": { retail: 150, minQty: 10, maxQty: 9999, requestAt: 50, tiers: [{min:10, unit:112.50}, {min:20, unit:103.50}, {min:30, unit:95.50}] },
  "double-halo-black": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "double-halo-white": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "meridian-link": { retail: 69, p25: 25.00, p50: 23.00, p100: 21.25, p500: 18.75 },
  "obsidian-link": { retail: 75, p25: 27.00, p50: 25.00, p100: 23.00, p500: 20.25 },
  "axis": { retail: 55, p25: 19.00, p50: 17.50, p100: 16.25, p500: 14.25 },
  "bold-ss": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "halo-line": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "quiet-balance": { retail: 55, p25: 19.00, p50: 17.50, p100: 16.25, p500: 14.25 },
  "noir-curve": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "national": { retail: 45, p25: 16.50, p50: 15.25, p100: 14.00, p500: 12.50 },
  "union-71": { retail: 45, p25: 16.50, p50: 15.25, p100: 14.00, p500: 12.50 },
  "tide": { retail: 39, p25: 13.50, p50: 12.50, p100: 11.50, p500: 10.00 },
  "manchester-city": { retail: 29, p25: 11.25, p50: 10.25, p100: 9.50, p500: 8.50 },
  "barcelona": { retail: 29, p25: 11.25, p50: 10.25, p100: 9.50, p500: 8.50 },
  "real-madrid": { retail: 29, p25: 11.25, p50: 10.25, p100: 9.50, p500: 8.50 },
  "red-medallion": { retail: 59, p25: 22.00, p50: 20.25, p100: 18.75, p500: 16.50 },
  "slim-link": { retail: 85, p25: 29.25, p50: 27.00, p100: 25.00, p500: 22.00 },
  "braided-id": { retail: 55, p25: 19.00, p50: 17.50, p100: 16.25, p500: 14.25 }
};

function formatAED(value) {
  return `AED ${Number(value).toFixed(Number(value) % 1 ? 2 : 0)}`;
}

function productQuantityRules(productId) {
  const product = products.find(item => item.id === productId);
  const p = pricing[productId] || {};
  return {
    min: Number(p.minQty ?? product?.minQty ?? 25),
    max: Number(p.maxQty ?? product?.maxQty ?? 9999)
  };
}

function normaliseQuantity(value, productId) {
  const rules = productQuantityRules(productId);
  return Math.max(rules.min, Math.min(rules.max, Math.round(Number(value) || rules.min)));
}

function tierForQuantity(productId, quantity) {
  const p = pricing[productId];
  if (!p) return { unit: null, label: "Price on request", volume: true };
  const qty = normaliseQuantity(quantity, productId);

  if (Array.isArray(p.tiers)) {
    if (p.requestAt && qty >= p.requestAt) {
      return { unit: null, label: `${p.requestAt}+ / request volume pricing`, volume: true };
    }
    const available = p.tiers.filter(tier => qty >= tier.min);
    const selected = available[available.length - 1] || p.tiers[0];
    return { unit: selected.unit, label: `${selected.min}+ pcs`, volume: false };
  }

  if (qty >= 1000) return { unit: null, label: "Request volume pricing", volume: true };
  if (qty >= 500) return { unit: p.p500, label: "500+ pcs", volume: false };
  if (qty >= 100) return { unit: p.p100, label: "100+ pcs", volume: false };
  if (qty >= 50) return { unit: p.p50, label: "50+ pcs", volume: false };
  return { unit: p.p25, label: "25+ pcs", volume: false };
}

function wholesaleLadder(productId) {
  const p = pricing[productId];
  if (Array.isArray(p?.tiers)) {
    const bits = p.tiers.map(t => `${t.min} pcs <strong>${formatAED(t.unit)}</strong>`);
    if (p.requestAt) bits.push(`${p.requestAt}+ <strong>Request volume pricing</strong>`);
    return bits.join(" · ");
  }
  return `25 pcs <strong>${formatAED(p.p25)}</strong> · 50 pcs <strong>${formatAED(p.p50)}</strong> · 100 pcs <strong>${formatAED(p.p100)}</strong> · 500 pcs <strong>${formatAED(p.p500)}</strong> · 1,000+ <strong>Request volume pricing</strong>`;
}

function wholesaleStart(productId) {
  const p = pricing[productId];
  if (Array.isArray(p?.tiers)) return { unit: p.tiers[0].unit, qty: p.tiers[0].min };
  return { unit: p.p25, qty: 25 };
}

// Archive Edition lifestyle art: consistent 1970s editorial scenes while the
// clean product and construction views remain untouched.
products.forEach(product => {
  if (product.preserveLifestyle) return;
  product.lifestyle = `assets/catalogue-lifestyle-70s/${product.id}.webp`;
  delete product.lifestyleFemale;
});

const series = {
  steel: {
    number: "01",
    label: "Collection 01 / Stainless steel",
    name: "Signature Edit",
    description: "Modern materials, refined form, and everyday wear.",
    product: "obsidian-link",
    background: "#ded0ad",
    accent: "#a74b2b"
  },
  hybrid: {
    number: "02",
    label: "Collection 02 / Hybrid series",
    name: "Hybrid Series",
    description: "Steel meets silicone, color and contrast.",
    product: "noir-curve",
    background: "#d8c79f",
    accent: "#6b7656"
  },
  woven: {
    number: "03",
    label: "Collection 03 / Woven series",
    name: "Woven Spirit",
    description: "Laid-back texture, local pride, and easy connection.",
    product: "union-71",
    background: "#e2d2ac",
    accent: "#d49b30"
  },
  silicon: {
    number: "04",
    label: "Collection 04 / Silicon series",
    name: "Club Passion",
    description: "Colour, loyalty, and match-day energy.",
    product: "manchester-city",
    background: "#c8d1c1",
    accent: "#3f7775"
  }
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $("[data-header]");
const menuToggle = $("[data-menu-toggle]");
const mobileMenu = $("[data-mobile-menu]");
const productGrid = $("[data-product-grid]");
const productCount = $("[data-product-count]");
const dialog = $("[data-dialog]");
const quoteDialog = $("[data-quote-dialog]");
const quoteRecipient = $('meta[name="quote-recipient"]')?.content.trim() || "";
const quoteStorageKey = "nimed-wholesale-quotation";
let quote = new Map();
let galleryViews = [];
let galleryIndex = 0;
let gallerySwapTimer;

try {
  const savedQuote = JSON.parse(localStorage.getItem(quoteStorageKey) || "[]");
  quote = new Map(
    savedQuote
      .map(([id, item]) => [id, normaliseQuoteItem(item, id)])
  );
} catch {
  quote = new Map();
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

function closeMenu() {
  document.body.classList.remove("menu-open");
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpening = !mobileMenu.classList.contains("is-open");
  document.body.classList.toggle("menu-open", isOpening);
  mobileMenu.classList.toggle("is-open", isOpening);
  mobileMenu.setAttribute("aria-hidden", String(!isOpening));
  menuToggle.setAttribute("aria-expanded", String(isOpening));
});

$$('a[href^="#"]', mobileMenu).forEach(link => link.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: .12, rootMargin: "0px 0px -6%" });

$$('.reveal, .image-reveal').forEach(element => revealObserver.observe(element));

const productRevealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-presented");
    productRevealObserver.unobserve(entry.target);
  });
}, { threshold: .04, rootMargin: "0px 0px -2%" });

const panelRevealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-presented");
    panelRevealObserver.unobserve(entry.target);
  });
}, { threshold: .18, rootMargin: "0px 0px -7%" });

$$('.motion-panel').forEach(panel => panelRevealObserver.observe(panel));

function initialiseProductMotion() {
  $$('.product-card', productGrid).forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 65}ms`);
    productRevealObserver.observe(card);

    const image = $('img', card);
    const markLoaded = () => image.classList.add("is-loaded");
    if (image.complete) markLoaded();
    else image.addEventListener("load", markLoaded, { once: true });

    const button = $('.product-card-button', card);
    button.addEventListener("pointermove", event => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const bounds = button.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--spot-x", `${x * 100}%`);
      card.style.setProperty("--spot-y", `${y * 100}%`);
      card.style.setProperty("--motion-x", `${(x - .5) * 10}px`);
      card.style.setProperty("--motion-y", `${(y - .5) * 8}px`);
    });
    button.addEventListener("pointerleave", () => {
      card.style.setProperty("--motion-x", "0px");
      card.style.setProperty("--motion-y", "0px");
    });
  });
}

function animateQuoteConfirmation(source) {
  const card = source?.closest?.('.product-card');
  if (card) {
    card.classList.remove("quote-confirmed");
    void card.offsetWidth;
    card.classList.add("quote-confirmed");
    window.setTimeout(() => card.classList.remove("quote-confirmed"), 850);
  }
  $$('[data-quote-count]').forEach(badge => {
    badge.classList.remove("is-pulsing");
    void badge.offsetWidth;
    badge.classList.add("is-pulsing");
    window.setTimeout(() => badge.classList.remove("is-pulsing"), 650);
  });
}

function renderProducts(filter = "all") {
  const catalogueProducts = products.filter(product => !product.hiddenFromCatalogue);
  const visible = filter === "all" ? catalogueProducts : catalogueProducts.filter(product => product.category === filter);
  productCount.textContent = visible.length;
  productGrid.innerHTML = visible.map((product, index) => `
    <article class="product-card">
      <button class="product-card-button" type="button" data-product-id="${product.id}" aria-label="View ${product.name}">
        <div class="product-card-visual">
          <span class="product-card-number">${String(index + 1).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}</span>
          <img src="${product.image}" alt="${product.name} bracelet" loading="lazy">
        </div>
        <div class="product-card-info">
          <div>
            <h3>${product.name}</h3>
            <p>${product.series}</p>
            ${product.unisex ? '<span class="product-unisex-label">UNISEX</span>' : ''}
            <div class="product-price-block">
              <strong>RRP ${formatAED(pricing[product.id].retail)}</strong>
              <span>Wholesale from ${formatAED(wholesaleStart(product.id).unit)} / pc · MOQ ${wholesaleStart(product.id).qty}</span>
            </div>
            <p class="product-personalisation">Engraving / Medical ID / QR*</p>
          </div>
          <span>${product.code}</span>
        </div>
      </button>
      <div class="product-card-actions">
        <label class="quantity-field">Qty
          <input type="number" min="${productQuantityRules(product.id).min}" max="${productQuantityRules(product.id).max}" step="1" value="${quote.get(product.id)?.quantity || productQuantityRules(product.id).min}" inputmode="numeric" data-card-quantity="${product.id}" aria-label="Quantity for ${product.name}">
        </label>
        <button class="add-quote-button" type="button" data-add-product="${product.id}">Add to wholesale cart</button>
      </div>
    </article>
  `).join("");

  $$('[data-product-id]', productGrid).forEach(button => {
    button.addEventListener("click", () => openProduct(button.dataset.productId));
  });

  $$('[data-add-product]', productGrid).forEach(button => {
    button.addEventListener("click", () => {
      const quantityInput = $(`[data-card-quantity="${button.dataset.addProduct}"]`, productGrid);
      addToQuote(button.dataset.addProduct, quantityInput.value);
      animateQuoteConfirmation(button);
      const originalLabel = button.textContent;
      button.textContent = "Added to wholesale cart";
      window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
    });
  });

  initialiseProductMotion();
}

renderProducts();

$$('[data-filter]').forEach(button => {
  button.addEventListener("click", () => {
    $$('[data-filter]').forEach(item => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProducts(button.dataset.filter);
  });
});

function openProduct(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;
  const quoteItem = quote.get(product.id) || normaliseQuoteItem(productQuantityRules(product.id).min, product.id);
  $("[data-dialog-code]").textContent = `${product.code} / ${product.category === "silicon" ? "Silicon series" : product.category}`;
  $("[data-dialog-name]").textContent = product.name;
  $("[data-dialog-description]").textContent = product.description;
  $("[data-dialog-series]").textContent = product.series;
  $("[data-dialog-retail]").textContent = formatAED(pricing[product.id].retail);
  $("[data-dialog-wholesale]").innerHTML = wholesaleLadder(product.id);
  const personalisationPanel = $(".personalisation-panel");
  if (personalisationPanel) personalisationPanel.hidden = product.personalisation === false;
  const unisexLabel = $("[data-dialog-unisex]");
  unisexLabel.hidden = !product.unisex;
  $("[data-dialog-quantity]").min = productQuantityRules(product.id).min;
  $("[data-dialog-quantity]").max = productQuantityRules(product.id).max;
  $("[data-dialog-quantity]").value = quoteItem.quantity;
  $("[data-dialog-engraving]").checked = quoteItem.engraving;
  $("[data-dialog-engraving-text]").value = quoteItem.engravingText;
  $("[data-dialog-engraving-text]").disabled = !quoteItem.engraving;
  $("[data-dialog-medical-id]").checked = quoteItem.medicalId;
  $("[data-dialog-medical-qr]").checked = quoteItem.medicalQr;
  $("[data-dialog-add-status]").textContent = "";
  dialog.dataset.productId = product.id;
  galleryViews = [
    { key: "primary", source: product.image, alt: `${product.name}, product view 1` },
    product.secondary ? { key: "secondary", source: product.secondary, alt: `${product.name}, product view 2` } : null,
    { key: "lifestyle", source: product.lifestyle, alt: `${product.name}, in use` },
    product.lifestyleFemale ? { key: "lifestyle-female", source: product.lifestyleFemale, alt: `${product.name}, in use` } : null
  ].filter(Boolean);
  galleryIndex = 0;
  renderGalleryView();
  document.body.classList.add("dialog-open");
  dialog.showModal();
  dialog.classList.remove("is-presented");
  window.requestAnimationFrame(() => dialog.classList.add("is-presented"));
}

function renderGalleryView() {
  const view = galleryViews[galleryIndex];
  if (!view) return;
  const image = $("[data-dialog-image]");
  dialog.dataset.activeView = view.key;
  $("[data-gallery-position]").textContent = `${galleryIndex + 1} / ${galleryViews.length}`;
  image.classList.add("is-changing");
  window.clearTimeout(gallerySwapTimer);
  gallerySwapTimer = window.setTimeout(() => {
    image.src = view.source;
    image.alt = view.alt;
    if (image.complete) image.classList.remove("is-changing");
  }, 90);
}

$("[data-dialog-image]").addEventListener("load", event => {
  const image = event.currentTarget;
  image.classList.remove("is-changing");
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const from = dialog.dataset.galleryDirection === "previous" ? -22 : 22;
  image.animate([
    { opacity: .15, transform: `translateX(${from}px) scale(.992)` },
    { opacity: 1, transform: "translateX(0) scale(1)" }
  ], { duration: 520, easing: "cubic-bezier(.22,.72,.2,1)" });
});

function moveGallery(direction) {
  if (galleryViews.length < 2) return;
  dialog.dataset.galleryDirection = direction > 0 ? "next" : "previous";
  galleryIndex = (galleryIndex + direction + galleryViews.length) % galleryViews.length;
  renderGalleryView();
}

$("[data-gallery-prev]").addEventListener("click", () => moveGallery(-1));
$("[data-gallery-next]").addEventListener("click", () => moveGallery(1));

$("[data-dialog-engraving]").addEventListener("change", event => {
  const input = $("[data-dialog-engraving-text]");
  input.disabled = !event.currentTarget.checked;
  if (event.currentTarget.checked) input.focus();
});

function closeDialog() {
  if (dialog.open) dialog.close();
  dialog.classList.remove("is-presented");
  document.body.classList.remove("dialog-open");
}

$("[data-dialog-close]").addEventListener("click", closeDialog);
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  const isOutside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (isOutside) closeDialog();
});

$("[data-dialog-add]").addEventListener("click", () => {
  addToQuote(dialog.dataset.productId, $("[data-dialog-quantity]").value, {
    engraving: $("[data-dialog-engraving]").checked,
    engravingText: $("[data-dialog-engraving]").checked ? $("[data-dialog-engraving-text]").value.trim() : "",
    medicalId: $("[data-dialog-medical-id]").checked,
    medicalQr: $("[data-dialog-medical-qr]").checked
  });
  animateQuoteConfirmation($("[data-dialog-add]"));
  $("[data-dialog-add-status]").textContent = "Added to your wholesale cart.";
});

function updateSeries(seriesId) {
  const mode = series[seriesId];
  const product = products.find(item => item.id === mode.product);
  const shell = $("[data-series-shell]");
  const image = $("[data-series-image]");

  $$('[data-series]').forEach(button => button.setAttribute("aria-selected", String(button.dataset.series === seriesId)));
  shell.style.setProperty("--series-accent", mode.accent);
  shell.style.setProperty("--series-bg", mode.background);
  shell.classList.add("is-switching");
  image.classList.add("is-changing");

  window.setTimeout(() => {
    $("[data-series-number]").textContent = mode.number;
    $("[data-series-label]").textContent = mode.label;
    $("[data-series-name]").textContent = mode.name;
    $("[data-series-description]").textContent = mode.description;
    $("[data-series-product]").innerHTML = `View ${product.name} <span>&rarr;</span>`;
    $("[data-series-product]").dataset.productId = product.id;
    image.src = product.image;
    image.alt = `${product.name} bracelet`;
    image.classList.remove("is-changing");
    window.requestAnimationFrame(() => shell.classList.remove("is-switching"));
  }, 220);
}

$$('[data-series]').forEach(button => button.addEventListener("click", () => updateSeries(button.dataset.series)));
$("[data-series-product]").dataset.productId = "obsidian-link";
$("[data-series-product]").addEventListener("click", event => openProduct(event.currentTarget.dataset.productId));

function normaliseQuoteItem(value, productId) {
  if (typeof value === "number" || typeof value === "string") {
    return { quantity: normaliseQuantity(value, productId), engraving: false, engravingText: "", medicalId: false, medicalQr: false };
  }
  return {
    quantity: normaliseQuantity(value?.quantity, productId),
    engraving: Boolean(value?.engraving),
    engravingText: String(value?.engravingText || "").trim().slice(0, 80),
    medicalId: Boolean(value?.medicalId),
    medicalQr: Boolean(value?.medicalQr)
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function saveQuote() {
  localStorage.setItem(quoteStorageKey, JSON.stringify([...quote.entries()]));
}

function quoteTotals() {
  return {
    models: quote.size,
    units: [...quote.values()].reduce((total, item) => total + item.quantity, 0)
  };
}

function updateQuoteSummary() {
  const totals = quoteTotals();
  $$('[data-quote-count]').forEach(element => { element.textContent = totals.units; });
  $("[data-quote-models]").textContent = totals.models;
  $("[data-quote-units]").textContent = totals.units;
}

function addToQuote(productId, value, personalisation) {
  if (!products.some(product => product.id === productId)) return;
  const current = quote.get(productId) || normaliseQuoteItem(productQuantityRules(productId).min, productId);
  quote.set(productId, normaliseQuoteItem({
    ...current,
    ...(personalisation || {}),
    quantity: value
  }, productId));
  saveQuote();
  renderQuote();
}

function renderQuote() {
  const empty = $("[data-quote-empty]");
  const content = $("[data-quote-content]");
  const items = $("[data-quote-items]");
  const hasItems = quote.size > 0;

  empty.hidden = hasItems;
  content.hidden = !hasItems;
  items.innerHTML = [...quote.entries()].filter(([productId]) => products.some(product => product.id === productId)).map(([productId, item]) => {
    const product = products.find(item => item.id === productId);
    const options = [
      item.engraving ? `Text engraving${item.engravingText ? `: &ldquo;${escapeHtml(item.engravingText)}&rdquo;` : ": copy to confirm"}` : "",
      item.medicalId ? "Direct Medical ID engraving requested" : "",
      item.medicalQr ? "Medical QR* requested" : ""
    ].filter(Boolean);
    return `
      <article class="quote-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="quote-item-copy">
          <h3>${product.name}</h3>
          <p>${product.code} / ${product.series}</p>
          ${(() => { const tier = tierForQuantity(product.id, item.quantity); const total = tier.unit ? tier.unit * item.quantity : null; return `<div class="quote-item-price"><span>RRP ${formatAED(pricing[product.id].retail)}</span><strong>${tier.volume ? "Request volume pricing" : `${formatAED(tier.unit)} / pc`}</strong><span>${total ? `Line total ${formatAED(total)}` : tier.label}</span></div>`; })()}
          ${options.length ? `<p class="quote-item-options">${options.join("<br>")}</p>` : ""}
        </div>
        <input type="number" min="${productQuantityRules(product.id).min}" max="${productQuantityRules(product.id).max}" step="1" value="${item.quantity}" inputmode="numeric" data-quote-quantity="${product.id}" aria-label="Quantity for ${product.name}">
        <div class="quote-item-actions">
          ${product.personalisation === false ? "" : `<button type="button" data-quote-edit="${product.id}">Edit options</button>`}
          <button type="button" data-quote-remove="${product.id}">Remove</button>
        </div>
      </article>
    `;
  }).join("");

  $$('[data-quote-quantity]', items).forEach(input => {
    input.addEventListener("change", () => {
      const quantity = normaliseQuantity(input.value, input.dataset.quoteQuantity);
      input.value = quantity;
      const item = quote.get(input.dataset.quoteQuantity);
      quote.set(input.dataset.quoteQuantity, { ...item, quantity });
      saveQuote();
      renderQuote();
    });
  });

  $$('[data-quote-edit]', items).forEach(button => {
    button.addEventListener("click", () => {
      closeQuote();
      openProduct(button.dataset.quoteEdit);
    });
  });

  $$('[data-quote-remove]', items).forEach(button => {
    button.addEventListener("click", () => {
      quote.delete(button.dataset.quoteRemove);
      saveQuote();
      renderQuote();
      renderProducts($("[data-filter].is-active")?.dataset.filter || "all");
    });
  });

  updateQuoteSummary();
}

function openQuote() {
  closeMenu();
  renderQuote();
  document.body.classList.add("quote-open");
  quoteDialog.showModal();
}

function closeQuote() {
  if (quoteDialog.open) quoteDialog.close();
  document.body.classList.remove("quote-open");
}

$$('[data-quote-open]').forEach(button => button.addEventListener("click", openQuote));
$("[data-quote-close]").addEventListener("click", closeQuote);
quoteDialog.addEventListener("close", () => document.body.classList.remove("quote-open"));
quoteDialog.addEventListener("click", event => {
  const bounds = quoteDialog.getBoundingClientRect();
  const isOutside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (isOutside) closeQuote();
});

$("[data-quote-browse]").addEventListener("click", () => {
  closeQuote();
  $("#collection").scrollIntoView({ behavior: "smooth" });
});

function getBuyerDetails() {
  return Object.fromEntries(new FormData($("[data-quote-form]")).entries());
}

function buildQuoteRequest() {
  const buyer = getBuyerDetails();
  const totals = quoteTotals();
  const lines = [...quote.entries()].map(([productId, item]) => {
    const product = products.find(item => item.id === productId);
    const options = [
      item.engraving ? `Text engraving${item.engravingText ? `: "${item.engravingText}"` : ": copy to confirm"}` : "",
      item.medicalId ? "Direct Medical ID engraving: requested" : "",
      item.medicalQr ? "Medical QR*: requested" : ""
    ].filter(Boolean);
    const tier = tierForQuantity(product.id, item.quantity);
    const priceText = tier.volume ? "Volume price requested" : `${formatAED(tier.unit)} / pc | Line ${formatAED(tier.unit * item.quantity)}`;
    return `${product.code} | ${product.name} | Qty ${item.quantity} | RRP ${formatAED(pricing[product.id].retail)} | ${priceText}${options.length ? ` | ${options.join(" | ")}` : ""}`;
  });
  const includesMedicalQr = [...quote.values()].some(item => item.medicalQr);
  const includesPersonalisation = [...quote.values()].some(item => item.engraving || item.medicalId || item.medicalQr);

  return [
    "NIMED WHOLESALE QUOTATION REQUEST",
    "For: Pharma Service Co. LLC",
    `Send to: ${quoteRecipient}`,
    "Telephone: +971 55 351 1335",
    "Address: Warehouse 3, Industrial Area 1, Dubai, UAE",
    `Prepared: ${new Date().toLocaleString()}`,
    "",
    `Company: ${buyer.company || "-"}`,
    `Contact: ${buyer.contact || "-"}`,
    `Email: ${buyer.email || "-"}`,
    `Phone: ${buyer.phone || "-"}`,
    "",
    "REQUESTED PRODUCTS",
    ...lines,
    "",
    `Products: ${totals.models}`,
    `Total units: ${totals.units}`,
    `Notes: ${buyer.notes || "-"}`,
    ...(includesPersonalisation ? ["", "Personalisation artwork and placement require buyer approval before production."] : []),
    ...(includesMedicalQr ? ["*Medical QR includes a medical asterisk marker and scannable code. The customer-managed profile URL and scan proof are confirmed separately; no medical data is collected in this catalogue."] : []),
    "",
    "Please confirm availability, final wholesale pricing, lead time, delivery terms and any applicable personalisation charges."
  ].join("\n");
}

$("[data-quote-print]").addEventListener("click", () => window.print());

$("[data-quote-send]").addEventListener("click", async () => {
  const form = $("[data-quote-form]");
  const status = $("[data-quote-status]");
  if (!form.reportValidity()) {
    status.textContent = "Please complete the required buyer details.";
    return;
  }

  const request = buildQuoteRequest();
  if (!quoteRecipient) {
    try { await navigator.clipboard.writeText(request); } catch { /* Clipboard access can be restricted on local files. */ }
    status.textContent = "The request is ready, but the receiving email still needs to be connected by Nimed.";
    return;
  }

  const buyer = getBuyerDetails();
  const subject = `Nimed wholesale cart - request final quote - ${buyer.company}`;
  window.location.href = `mailto:${quoteRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(request)}`;
  status.textContent = `Opening your email app with the request addressed to Pharma Service at ${quoteRecipient}.`;
});

renderQuote();

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
    closeQuote();
  }
  if (dialog.open && event.key === "ArrowLeft") moveGallery(-1);
  if (dialog.open && event.key === "ArrowRight") moveGallery(1);
});
