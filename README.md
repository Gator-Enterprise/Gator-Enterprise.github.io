# Gator Enterprise — gatorenterprise.com

Source for the Gator Enterprise website. Edit the site in `app/`, push to
`master`, and GitHub Actions builds it and deploys to GitHub Pages at the custom
domain (gatorenterprise.com). There is no manual copy step and no second repo —
`dist/` is gitignored build output, produced by CI and published as the Pages
artifact.

## Develop

Requires Node 20 (pinned in `.nvmrc`).

```sh
nvm use            # Node 20
npm ci             # install toolchain
npm run serve      # dev server + live reload at http://localhost:4000
npm run serve:dist # production build, then serve dist/ at http://localhost:3001
npm run build      # production build into dist/
```

## Deploy

Push to `master`. `.github/workflows/deploy.yml` builds `app/` → `dist/` and
publishes `dist/` to GitHub Pages.

Pages **Source** must be set to **GitHub Actions** (repo Settings → Pages). The
custom domain ships in the build via `app/CNAME`.

## Layout

| Path | What it is |
|------|------------|
| `app/` | Site source: HTML pages, `styles/` (Sass), `scripts/` (ES modules), `images/`, `newsletters/` |
| `app/CNAME` | Custom domain, copied into the build output |
| `gulpfile.js` | Build: Dart Sass + PostCSS (autoprefixer/cssnano), esbuild bundles per-page scripts, sw-precache service worker |
| `.github/workflows/deploy.yml` | CI build + Pages deploy |
| `dist/` | Build output (gitignored; created by `npm run build`) |
| `gator bin/` | Original design assets (logos, art); kept as source, never published |

## Notes

- The page scripts import only local `./lib/*` modules; `jQuery`, `contentful`,
  `marked`, and `Vue` are loaded from CDNs at runtime. The golf-carts / engines /
  quote-tool pages fetch their content from Contentful client-side.
- Originally generated from Google's Web Starter Kit (Apache 2.0); the toolchain
  has since been modernized (gulp 5, Dart Sass, esbuild, Node 20).
