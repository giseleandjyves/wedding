<!-- .github/copilot-instructions.md -->
# Repo-specific instructions for AI coding agents

This document gives concise, actionable guidance to help an AI coding agent be productive in this repository (a small static wedding website).

- **Project type**: Static HTML/CSS/JS site. No package.json or build scripts detected — files are served directly from the file tree.
- **Locales / mirrors**: Content is mirrored in `en/` and `rw/` directories. When you update a page (e.g. `en/infos.html`), check for and update the matching file in `rw/` if present.
- **Primary HTML entrypoints**: `index.html` (root) and `en/index.html`. Many pages use relative links like `css/...`, `js/...`, and `../images/...`.

Key files and folders (examples):
- `en/` and `rw/`: localized site copies. Edit these for language-specific content.
- `en/sass/`, `rw/sass/`, `sass/`: contains `.scss` source files. The site references `sass/style.css` (compiled CSS inside the `sass/` folder) — note the repo stores compiled CSS alongside SCSS.
- `js/`: client JavaScript. Main files: `js/main.js`, `js/roliApp.js`, `app.js` (root), `js/google_map.js`.
- `images/` and `en/images/` etc.: media used by pages (photos, locations). Use relative paths already used in HTML.
- `favicon/` and `en/favicon/`: site icons and manifest.

Important patterns to follow
- When changing layout or styles, prefer editing the SCSS in `en/sass/*.scss` (or the appropriate locale) and regenerate the compiled CSS file placed at `sass/style.css` (the pages import `sass/style.css?v=1`).
- Pages include scripts in `js/` directly (jQuery, Bootstrap, Modernizr). Avoid adding build tooling unless requested; keep edits compatible with the existing static structure.
- Localization: filenames are mirrored between `en/` and `rw/`. Keep filenames and relative resource paths consistent so links and images continue to work.

Developer / preview workflows (discoverable)
- Quick local preview (Python 3): run from the repo root then open the locale index in a browser.
  ```powershell
  cd 'c:\Users\i_oli\SynologyDrive\DOCUMENTS PC-NAS\FAMILY\Yves\weddingYvesContribution\wedding'
  python -m http.server 8000
  # then open http://localhost:8000/en/index.html
  ```
- SASS compile (if you need to re-generate `sass/style.css`): this repo does not contain a task runner. If you have Dart Sass installed, run from repo root:
  ```powershell
  # compile a single file
  sass en/sass/style.scss:sass/style.css --style=expanded
  # or watch the folder
  sass --watch en/sass:sass
  ```
  Note: paths above reflect how pages reference `sass/style.css`. Verify which `.scss` is the authoritative source before overwriting compiled file.

Sensitive and external integrations to be aware of
- Google Tag Manager ID in pages: `GTM-NG6X2XG` (head). Do not remove unless instructed.
- Google Maps API key is embedded in `en/infos.html` (script include). Treat that key as sensitive — avoid publishing replacements into public forks without confirmation.

Editing guidance and examples
- Content edits: find the page under the `en/` directory (e.g. `en/infos.html`), update text, then mirror the change in `rw/` when appropriate.
- Add an image: put the file under `images/` (or a subfolder like `images/gijy/photos/`), reference it using the same relative path pattern used in `en/index.html` (e.g. `../images/gijy/photos/VELA94992.JPG`).
- Add a new JS feature: append a file to `js/` and include it near the bottom of the page(s) after `jquery.min.js` and `main.js` to preserve load order.

When to ask for clarification
- If you need to change the build or introduce a package manager (npm, yarn) or CI, ask the maintainer — there is no evidence of an existing build pipeline.
- If you plan to rotate the Google Maps key or remove analytics tags, request explicit approval.

Where to look for examples in the repo
- `en/index.html` — full page example showing linking, header, CSS/JS includes, and Google Tag Manager usage.
- `en/infos.html` — content page with maps and contact blocks; demonstrates Google Maps key usage and how pages link to `sass/style.css`.
- `en/sass/style.scss` — canonical SCSS sources (edit when changing styling).

If anything in this guidance is unclear or incomplete, tell me what workflow or file you'd like documented and I will update this file.
