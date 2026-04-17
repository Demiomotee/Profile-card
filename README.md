# Profile Card — Frontend Wizards Stage 1B

A semantic, accessible, and responsive Profile Card built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

## Links

- **Live Demo:** https://demiomotee.github.io/Profile-card/
- **Repo:** https://github.com/Demiomotee/Profile-card

---

## How to Run Locally

1. Clone the repo:
```bash
git clone https://github.com/Demiomotee/Profile-card.git
cd Profile-card
```

2. Open `index.html` in your browser or use VS Code Live Server.

No installs. No build step. Everything is in a single HTML file with a linked stylesheet.

---

## Features

- Semantic HTML with all required `data-testid` attributes
- Live epoch time — `Date.now()` in milliseconds, updates every 500ms, announced to screen readers via `aria-live="polite"`
- Light/dark theme toggle — preference saved to `localStorage`, respects system preference on first visit
- Bio expand/collapse — description truncated by default with a smooth animated "See more / See less" toggle
- Responsive layout — two-column grid on desktop/tablet, stacked layout on mobile with horizontal social icons and time pill
- Fully keyboard navigable with visible focus styles on all interactive elements

---

## data-testid Reference

| Element | data-testid |
|---|---|
| Card root `<article>` | `test-profile-card` |
| Name `<h1>` | `test-user-name` |
| Bio paragraph | `test-user-bio` |
| Epoch time span | `test-user-time` |
| Avatar `<img>` | `test-user-avatar` |
| Social links `<nav>` | `test-user-social-links` |
| Twitter / X link | `test-user-social-twitter` |
| GitHub link | `test-user-social-github` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies `<section>` | `test-user-hobbies` |
| Dislikes `<section>` | `test-user-dislikes` |

---

## Decisions Made

- **Vanilla JS only** — no framework needed for a single card component; all interactivity is a few lines of plain JS
- **Single file JS** — all script is inline in `index.html`; no module bundler or separate file needed for this scope
- **System font stack** — uses SF Pro on Apple devices, Segoe UI on Windows, no external font request or layout shift
- **CSS custom properties** — all colors defined once in `[data-theme]` blocks; switching theme is a single `setAttribute` call with no JS color logic
- **`max-height` transition** — used for the bio expand/collapse animation; gives a smooth slide-down effect without needing JS to measure element height
- **`aria-live="polite"` + `aria-atomic="true"`** — on the epoch time span so screen readers announce updates without interrupting the user
- **Mobile icon-only social links** — link text is hidden on small screens via CSS, icons remain visible and tappable, accessible names preserved via `aria-label` on each anchor

## Trade-offs

- **No avatar upload** — avatar is a static `src` attribute; a production version would accept a file input and convert it to a blob URL or upload to a server
- **500ms tick interval** — updates epoch time twice per second which is smooth and accurate; a 1000ms interval would also satisfy the spec
- **Hardcoded profile data** — no backend or data layer; acceptable for a static card demo
- **`-webkit-line-clamp` for truncation** — widely supported and requires no JS to measure; the CSS handles the clamp and the JS only toggles a class

---

## Accessibility

- Meaningful `alt` text on avatar image describing name and role
- `aria-live="polite"` and `aria-atomic="true"` on the live epoch time
- All social links have `aria-label` with the person's name and platform
- `target="_blank"` links include `rel="noopener noreferrer"`
- Visible focus ring on all interactive elements (links, buttons)
- Bio toggle button uses `aria-expanded` to communicate state to screen readers
- Color contrast meets WCAG AA across both light and dark themes
- Semantic landmark elements: `<article>`, `<aside>`, `<nav>`, `<figure>`, `<figcaption>`, `<header>`, `<section>`

---

## Author

**Demiomotee**
https://github.com/Demiomotee
