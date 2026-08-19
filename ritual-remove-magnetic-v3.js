/**
 * RITUAL V3 — HARD DELETE Magnetic Hybrid editorial block.
 * This is intentionally source-agnostic and survives client-side re-renders.
 *
 * It removes the standalone editorial section beginning with:
 *   04 / MAGNETIC RITUALS
 * and the duplicate standalone "Magnetic Hybrid Bracelets" showcase beneath it.
 *
 * It DOES NOT remove Magnetic Hybrid product cards from the master catalogue.
 */
(() => {
  'use strict';

  const squash = (s = '') => s.replace(/\s+/g, ' ').trim().toLowerCase();

  const directText = el =>
    squash(
      [...el.childNodes]
        .filter(n => n.nodeType === Node.TEXT_NODE)
        .map(n => n.textContent)
        .join(' ')
    );

  const exactish = (el, phrase) => {
    const p = squash(phrase);
    const own = directText(el);
    const full = squash(el.textContent || '');
    return own === p || full === p;
  };

  const hasText = (el, phrase) =>
    squash(el?.textContent || '').includes(squash(phrase));

  function closestReasonableBlock(el) {
    if (!el) return null;

    let node = el;
    for (let i = 0; node && i < 10; i++, node = node.parentElement) {
      if (node === document.body || node === document.documentElement || node.tagName === 'MAIN') break;

      const txt = squash(node.textContent || '');
      const semantic =
        node.tagName === 'SECTION' ||
        node.tagName === 'ARTICLE' ||
        node.hasAttribute('data-section') ||
        /section|editorial|feature|magnetic|collection|category/i.test(String(node.className || ''));

      if (
        semantic &&
        txt.includes('magnetic hybrid') &&
        (
          txt.includes('04 / magnetic rituals') ||
          txt.includes('integrated magnetic construction') ||
          txt.includes('hybrid material combinations') ||
          txt.includes('every bracelet in the hybrid category')
        )
      ) {
        return node;
      }
    }
    return null;
  }

  function findByExactVisibleText(phrase) {
    const target = squash(phrase);
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode(node) {
          if (!node.textContent) return NodeFilter.FILTER_SKIP;
          const own = directText(node);
          const full = squash(node.textContent);
          return (own === target || full === target)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
        }
      }
    );

    const hits = [];
    let n;
    while ((n = walker.nextNode())) hits.push(n);
    return hits;
  }

  function deleteNode(node) {
    if (!node || !node.isConnected) return false;
    node.style.setProperty('display', 'none', 'important');
    node.setAttribute('aria-hidden', 'true');
    node.remove();
    return true;
  }

  function deletePrimaryEditorial() {
    let removed = false;

    // 1. The unique orange eyebrow visible in the screenshot.
    const markers = [
      ...findByExactVisibleText('04 / MAGNETIC RITUALS'),
      ...[...document.querySelectorAll('body *')].filter(el =>
        hasText(el, '04 / MAGNETIC RITUALS') &&
        hasText(el, 'Integrated magnetic construction') &&
        hasText(el, 'Hybrid material combinations')
      )
    ];

    for (const marker of markers) {
      let block = closestReasonableBlock(marker);

      // If class/semantic markup is poor, climb to the SMALLEST ancestor
      // containing all three unique feature labels.
      if (!block) {
        let node = marker;
        while (
          node &&
          node.parentElement &&
          node.parentElement !== document.body &&
          node.parentElement.tagName !== 'MAIN'
        ) {
          const txt = squash(node.textContent || '');
          if (
            txt.includes('04 / magnetic rituals') &&
            txt.includes('integrated magnetic construction') &&
            txt.includes('hybrid material combinations') &&
            txt.includes('all hybrid models are magnetic')
          ) {
            block = node;
            break;
          }
          node = node.parentElement;
        }
      }

      if (block) removed = deleteNode(block) || removed;
    }

    return removed;
  }

  function deleteDuplicateShowcase() {
    let removed = false;

    // 2. Delete the SECOND standalone title/showcase area from the screenshot.
    // Product card titles are ignored because they do not contain this exact heading.
    const headings = [
      ...findByExactVisibleText('Magnetic Hybrid Bracelets'),
      ...document.querySelectorAll('h1, h2, h3, h4')
    ].filter((el, i, arr) =>
      arr.indexOf(el) === i && exactish(el, 'Magnetic Hybrid Bracelets')
    );

    for (const heading of headings) {
      // Never touch normal product cards or the selector.
      if (heading.closest(
        '[data-product-card], .product-card, .catalogue-card, .collection-card, .catalog-card,' +
        '[data-category-selector], .category-selector, .catalogue-filter, .catalog-filter'
      )) continue;

      let node = heading;
      let candidate = null;

      for (let i = 0; node && i < 9; i++, node = node.parentElement) {
        if (node === document.body || node.tagName === 'MAIN') break;

        const txt = squash(node.textContent || '');

        const signature =
          txt.includes('magnetic hybrid bracelets') &&
          (
            txt.includes('every bracelet in the hybrid category') ||
            txt.includes('product, wholesale tiers and personalisation options') ||
            txt.includes('magnetic construction ·') ||
            txt.includes('magnetic construction /')
          );

        if (signature) {
          candidate = node;

          // Prefer a semantic section over a tiny title wrapper.
          if (
            node.tagName === 'SECTION' ||
            node.tagName === 'ARTICLE' ||
            node.hasAttribute('data-section') ||
            /section|showcase|collection|magnetic/i.test(String(node.className || ''))
          ) break;
        }
      }

      if (candidate) removed = deleteNode(candidate) || removed;
    }

    return removed;
  }

  function killMagneticEditorial() {
    deletePrimaryEditorial();
    deleteDuplicateShowcase();

    // Absolute final guard: if the unique eyebrow is still visible, hide the
    // nearest large visual block by geometry + ancestry.
    const leftovers = [...document.querySelectorAll('body *')]
      .filter(el => exactish(el, '04 / MAGNETIC RITUALS'));

    leftovers.forEach(marker => {
      let node = marker.parentElement;
      let chosen = null;

      while (node && node !== document.body && node.tagName !== 'MAIN') {
        const rect = node.getBoundingClientRect();
        const txt = squash(node.textContent || '');

        if (
          rect.height > 350 &&
          txt.includes('magnetic hybrid') &&
          txt.includes('04 / magnetic rituals')
        ) {
          chosen = node;
          // keep walking only while ancestor is still a plausible isolated section
          const parentText = squash(node.parentElement?.textContent || '');
          if (
            !parentText.includes('stainless steel') &&
            !parentText.includes('woven') &&
            !parentText.includes('silicon')
          ) {
            node = node.parentElement;
            continue;
          }
          break;
        }
        node = node.parentElement;
      }

      if (chosen) deleteNode(chosen);
    });
  }

  // Run immediately.
  killMagneticEditorial();

  // Run again when frameworks hydrate/re-render.
  let queued = false;
  const observer = new MutationObserver(() => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      killMagneticEditorial();
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  // Extra hydration passes; cheap and finite.
  [50, 150, 400, 900, 1800].forEach(ms =>
    setTimeout(killMagneticEditorial, ms)
  );
})();