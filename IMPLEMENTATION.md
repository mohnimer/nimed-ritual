# RITUAL hotfix — implementation

This bundle implements the requested changes without rebuilding the current site.

## Files

- `ritual-hotfix.css`
- `ritual-hotfix.js`

## Add these two lines to the current site's `<head>`

```html
<link rel="stylesheet" href="/ritual-hotfix.css">
<script src="/ritual-hotfix.js" defer></script>
```

Load the CSS after the site's normal stylesheet so these overrides win.

## What it changes

1. Editorial headings are no longer locked to one line. They may wrap naturally into tight, balanced display lines.
2. The existing catalogue category selector is made functional:
   - All
   - Stainless Steel
   - Magnetic Hybrid
   - Woven
   - Silicon
3. The standalone **Magnetic Hybrid Bracelets** section is removed completely.
4. Magnetic Hybrid products remain in the normal catalogue and appear when the user selects **Magnetic Hybrid**.
5. Magnetic Hybrid product cards inherit the same card/image treatment as the rest of the catalogue:
   - no special coloured image background
   - no all-caps product titles
   - same grid/card treatment as the other categories
6. Homepage hero arrows are placed at the left/right sides and vertically centered.
7. Homepage hero rotates every **3 seconds**.
8. Hero transition is a restrained reveal/fade rather than a hard cut.
9. Clicking an arrow immediately changes slide and resets the 3-second timer.

## Important

The JavaScript deliberately uses several selector fallbacks because the live repository was not accessible from the connected GitHub/Vercel account in this session. It will work automatically with the common class names already visible in the current site structure, and it also supports `data-*` hooks if the site's markup already uses them.

For the most deterministic implementation, the existing markup can use these optional hooks:

```html
<nav data-category-selector>...</nav>

<div data-product-grid>
  <article data-product-card data-category="magnetic-hybrid">...</article>
</div>

<section data-hero-slider>
  <div data-slide>...</div>
  <div data-slide>...</div>
  <button data-prev>←</button>
  <button data-next>→</button>
</section>
```

The script does not require these hooks when it can identify the existing elements automatically.