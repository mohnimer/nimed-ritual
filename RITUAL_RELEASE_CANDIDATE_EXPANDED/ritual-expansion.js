
(() => {
  const magneticIds = [
    "polar-link",
    "cobalt-ion",
    "ion-arc",
    "manchester-city",
    "barcelona",
    "real-madrid"
  ];

  function renderMagneticBracelets() {
    const target = document.querySelector("[data-magnetic-bracelets]");
    if (!target || typeof products === "undefined") return;

    const items = magneticIds
      .map(id => products.find(product => product.id === id))
      .filter(Boolean);

    target.innerHTML = items.map(product => `
      <button class="magnetic-bracelet-card" type="button" data-magnetic-product="${product.id}" aria-label="View ${product.name}">
        <img src="${product.image}" alt="${product.name} bracelet" loading="lazy">
        <strong>${product.name}</strong>
        <span>${product.code} / magnetic edit</span>
      </button>
    `).join("");

    target.querySelectorAll("[data-magnetic-product]").forEach(button => {
      button.addEventListener("click", () => openProduct(button.dataset.magneticProduct));
    });
  }

  renderMagneticBracelets();
})();
