Cuberto-inspired Creative Studio Site
====================================

Modern, production-ready website inspired by the look-and-feel, interactions, and motion design of Cuberto (no proprietary content/assets).

Features
--------
- GSAP intro, reveal-on-scroll, hover micro-interactions
- Lenis smooth scrolling with optional section snapping
- Custom magnetic cursor with contextual labels
- Multi-page: Home, Projects, Case Studies (3), About, Contact
- Reduced-motion feature flag and low-power device guard
- Accessible focus states, semantic structure, lazy media

Tech Stack
----------
- HTML5, CSS, and vanilla JS modules
- GSAP and Lenis via CDN (instant run)
- Optional Vite for dev/build/preview

Project Structure
-----------------
- `src/`
  - `index.html`, `projects.html`, `about.html`, `contact.html`
  - `project/` — `project-alpha.html`, `project-beta.html`, `project-gamma.html`
  - `styles/main.css` — design system and components
  - `scripts/` — `config.js`, `cursor.js`, `smooth-scroll.js`, `animations.js`, `app.js`
- `assets/` — logo and placeholders (served as public)

Getting Started (Instant)
-------------------------
Option A: Open `src/index.html` directly in your browser. GSAP and Lenis are loaded via CDN, so everything works without install.

Option B: Serve locally (recommended for routing and performance testing):

```bash
python3 -m http.server 8080
# then visit http://localhost:8080/src/
```

Vite Dev/Build/Preview
----------------------
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist
npm run preview  # preview dist on http://localhost:5174
```

Configuration
-------------
- Reduced motion: auto-respects system preferences; override via `?reducedMotion=true|false`
- Heavy effects: auto-disables on low-power devices; override via `?heavyEffects=true|false`
- Theme: `?theme=light|dark`

Deploy
------
- Netlify or Vercel: Deploy the `dist` folder after `npm run build`
- Static hosting: Upload `dist` contents or serve `src` directly (CDN scripts remove bundler dependency)

Notes
-----
- Ensure images are optimized; swap `/assets/placeholder-wide.svg` with actual media.
- Use `<picture>` sources and `loading="lazy"` for heavy assets on case studies.

License
-------
MIT for this template. External libraries under their respective licenses. This is a tribute-style implementation with placeholder content. 

