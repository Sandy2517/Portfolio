# Sandhiya S — Cybersecurity Portfolio

Live, recruiter-ready cybersecurity portfolio built with React + Vite, Tailwind CSS, and Framer Motion.

## Design System

### Color Palette
- `#0D1F23` ink (base background)
- `#132E35` midnight (surface)
- `#2D4A53` slate (depth)
- `#69818D` steel (accent)
- `#AFB3B7` mist (primary accent)
- `#5A636A` smoke (muted text)
- `rgba(19, 46, 53, 0.65)` glass (card blur)
- `rgba(175, 179, 183, 0.18)` line (borders)

### UX Highlights
- Glassmorphism cards with soft glow effects
- Cyber grid + radial glow backdrop
- Smooth scroll and reveal animations
- Responsive, mobile-first layout

## Local Development

```bash
npm install
npm run dev
```

## Deployment Guide

### GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://<username>.github.io/<repo>"
   ```
   and update scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Build and deploy:
   ```bash
   npm run deploy
   ```

### Netlify
1. Push the repo to GitHub.
2. In Netlify, select the repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click Deploy. Netlify auto-rebuilds on every push.

## Notes
- Update the social links in `src/App.jsx` to your exact GitHub/LinkedIn URLs.
