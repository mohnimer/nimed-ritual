(() => {
  const magneticIds = ["polar-link", "cobalt-ion", "ion-arc"];

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
        <span>RRP ${formatAED(pricing[product.id].retail)} · view product</span>
      </button>
    `).join("");

    target.querySelectorAll("[data-magnetic-product]").forEach(button => {
      button.addEventListener("click", () => openProduct(button.dataset.magneticProduct));
    });
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

  renderMagneticBracelets();
  bindMagneticShop();
})();
