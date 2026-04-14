# Profile Card — Frontend Wizards Stage 1B

A semantic, accessible, responsive Profile Card built with plain HTML, CSS, and vanilla JavaScript.

## Live Demo
> Deploy to Netlify/Vercel/GitHub Pages and paste your URL here.

## Features

- **Semantic HTML**: `<article>`, `<figure>`, `<nav>`, `<section>`, `<header>`, `<h1>`, `<h2>`
- **Accessibility**: `aria-label`, `aria-live="polite"` on epoch time, `alt` text on avatar, visible focus styles, keyboard navigation
- **Responsive layout**: Two-column grid on tablet/desktop → stacked on mobile
- **Live epoch time**: Updates every 500ms via `Date.now()`, announced to screen readers via `aria-live`
- **All `data-testid` attributes** exactly as specified

## data-testid reference

| Element | data-testid |
|---|---|
| Card root `<article>` | `test-profile-card` |
| Name `<h1>` | `test-user-name` |
| Bio `<p>` | `test-user-bio` |
| Epoch time `<p>` | `test-user-time` |
| Avatar `<img>` | `test-user-avatar` |
| Social links `<nav>` | `test-user-social-links` |
| Twitter link | `test-user-social-twitter` |
| GitHub link | `test-user-social-github` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies `<section>` | `test-user-hobbies` |
| Dislikes `<section>` | `test-user-dislikes` |

## Run locally

```bash
# Clone the repo
git clone https://github.com/<your-username>/profile-card.git
cd profile-card

# Open in browser — no build step needed
open index.html
# or: npx serve .
```

## Deploy to Netlify (quickest)

1. Drag the project folder to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Copy the generated URL

## Tech stack

- HTML5 — zero dependencies
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JS (only for `Date.now()` clock)
- Google Fonts: Playfair Display + DM Sans

## Accessibility checklist

- [x] Meaningful `alt` text on avatar
- [x] Color contrast ≥ WCAG AA (dark ink on cream, gold on dark bg)
- [x] `aria-live="polite"` + `aria-atomic="true"` on epoch time
- [x] All links keyboard-focusable with visible focus ring
- [x] `target="_blank"` links include `rel="noopener noreferrer"`
- [x] Semantic landmark elements (`<nav>`, `<header>`, `<article>`, `<section>`)
