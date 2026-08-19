# RITUAL HOTFIX V2

Replace the previous hotfix files with these two:

```html
<link rel="stylesheet" href="/ritual-hotfix-v2.css">
<script src="/ritual-hotfix-v2.js" defer></script>
```

## Critical correction in V2

The entire standalone Magnetic Hybrid editorial/listing section is now hard-removed.

The script specifically targets the unique block containing:

- `04 / MAGNETIC RITUALS`
- `Integrated magnetic construction`
- `Hybrid material combinations`
- `All Hybrid models are magnetic`

It removes that whole section from the DOM.

It also removes any leftover standalone `Magnetic Hybrid Bracelets` subsection underneath it.

**Magnetic Hybrid product cards in the main catalogue are NOT deleted.**
They remain available only through the normal catalogue grid and the
`MAGNETIC HYBRID` category selector.

Everything else from V1 remains:
- category selector works
- product titles are not forced ALL CAPS
- standard catalogue image treatment
- hero arrows vertically centered
- hero rotates every 3 seconds
- subtle reveal transition