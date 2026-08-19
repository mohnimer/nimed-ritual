# RITUAL — Magnetic Hybrid removal V3

This patch does ONE job first: remove the entire standalone Magnetic Hybrid editorial/showcase section shown in the screenshot.

It targets the unique visible content:
- `04 / MAGNETIC RITUALS`
- `Integrated magnetic construction`
- `Hybrid material combinations`
- `All Hybrid models are magnetic`
- the duplicate standalone `Magnetic Hybrid Bracelets` showcase beneath it

It does **not** remove Magnetic Hybrid product cards from the master catalogue. Those stay available through the `MAGNETIC HYBRID` category selector.

## Install

Copy `ritual-remove-magnetic-v3.js` into the public/root assets directory and add this immediately before `</body>`:

```html
<script src="/ritual-remove-magnetic-v3.js"></script>
```

The script runs immediately, repeats after hydration, and watches for client-side re-renders so the section cannot reappear.

## Important

This is a runtime hard-delete because the actual current RITUAL site source ZIP/repository is not mounted in this chat session. A true source deletion requires the current site source file containing this markup; once that source is available, the whole block should be deleted there instead of patched at runtime.