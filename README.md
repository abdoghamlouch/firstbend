# FirstBend website

Static site for FirstBend — the conduit-bending calculator for electricians.

- `index.html` — home page (what the app does, screenshots, free vs Pro)
- `privacy.html` — privacy policy (linked as the privacy-policy URL in the Play listing)
- `contact.html` — contact form (builds a `mailto:` — no backend, no data stored)
- `assets/style.css` — the whole design system (tokens mirror the app's `lib/theme.dart`)
- `assets/app.js` — the only script: the contact form's mailto builder

No build step, no frameworks, no external requests. To edit, change the HTML/CSS
and refresh. To publish, push to the repo and GitHub Pages serves the root.

**Before publishing the Play listing**, confirm the contact address in
`index.html`, `privacy.html`, `contact.html` (3 places + `data-mailto`).
