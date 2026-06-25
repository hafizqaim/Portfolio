# Muhammad Qaim Ali — Portfolio

A dynamic, resume-style portfolio for an AI/ML Engineer. Built with **React + Vite + Tailwind CSS v4** and **Framer Motion**.

Live sections: Hero · About · Experience · Skills · Projects · Contact — all data-driven from `src/data/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing your content

Everything lives in plain JS data files — no need to touch components:

| File | What it controls |
|------|------------------|
| `src/data/profile.js`    | Name, tagline, bio, contact links, stats, hero focus strip |
| `src/data/experience.js` | Timeline (roles, education) |
| `src/data/skills.js`     | Grouped skills/technologies |
| `src/data/projects.js`   | Curated project cards |

### Project screenshots
Cards show GitHub's auto repo previews by default. To use your own image, drop it
in `public/images/` and set `image: './images/your-file.png'` on the project.
See `public/images/README.md`.

### Resume / CV
Drop your CV as `public/resume.pdf` — the Resume buttons already point to it.

## Deploy (host-agnostic)

`vite.config.js` uses `base: './'`, so the `dist/` build runs anywhere.

- **Vercel** — import the repo; `vercel.json` is preconfigured. *(Recommended.)*
- **Netlify** — import the repo; `netlify.toml` is preconfigured.
- **GitHub Pages** — push to `main`; the workflow in `.github/workflows/deploy-pages.yml`
  builds and deploys (set Settings → Pages → Source = "GitHub Actions").

## Stack

React 18 · Vite 6 · Tailwind CSS v4 · Framer Motion · zero backend.

---

> The original single-file draft is kept as `design-reference.html` for reference.
