# Jongyoon Kim Portfolio

A four-language (Japanese / English / Korean / Simplified Chinese), data-driven static portfolio for a Technical Animator and Rigging Artist. The site uses plain HTML, CSS and JavaScript so it can be hosted directly on GitHub Pages without a build step.

## Preview locally

Opening `index.html` directly works for most browsing. A small local server is recommended so every relative link behaves exactly like GitHub Pages:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Content maintenance

- `data/projects.js`: published, WIP, planned and private project records.
- `data/profile.js`: skills, production responsibilities, showreel and public community experience.
- `data/timeline.js`: concise public growth timeline.
- `data/translations.js`: shared Japanese and English interface copy.
- `projects/*.html`: lightweight page shells using the shared project-detail renderer.

Projects marked `planned` or `private` do not appear on the home page. A WIP project appears only when it has both `status: "wip"` and `showWip: true`.

Pending qualifications are stored separately and must not be presented as earned certifications. When a certificate is issued, verify the exact title and issuing organization from the certificate before moving it into public credentials.

## Adding project media

Put public, NDA-safe files in `assets/thumbnails`, `assets/video` or `assets/diagrams`. Prefer short muted MP4/WebM clips and optimized WebP/AVIF thumbnails. Replace the media TODO region only after source material is ready.

## GitHub Pages

Commit the repository, push it to GitHub, then select the repository root as the GitHub Pages source. All site links are relative and no backend is required.

## Privacy checklist

Never publish private addresses, phone numbers, certificate numbers, internal tools, source code, company assets, Blueprint graphs, rig files or NDA-covered documents. Project TAL content should remain limited to public material and a description of personal responsibilities.
