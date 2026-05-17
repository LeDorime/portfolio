# Portfolio

Dark, minimal portfolio for a backend software developer.
Built with React + Vite. Zero UI library dependencies.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Customising your portfolio

**All personal content lives in one file:**

```
src/data/config.js
```

Edit that file to update:
- Your name, bio, and status badge
- Projects (name, description, tech tags, links)
- Tech stack
- Contact links
- Stats (years experience, projects shipped, etc.)

You never need to touch any component files just to update content.

## Project structure

```
src/
├── data/
│   └── config.js          ← YOUR CONTENT LIVES HERE
├── components/
│   ├── Nav.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Projects.jsx / .module.css
│   ├── Stack.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── styles/
│   └── global.css         ← design tokens (colors, fonts, spacing)
├── App.jsx                ← layout / section order
└── main.jsx               ← entry point
```

## Changing the design

Design tokens (accent color, fonts, spacing) are in `src/styles/global.css` under `:root { ... }`.
Change `--accent` to any color to re-theme the entire site instantly.

## Deployment

Hosted on AWS S3 + CloudFront with a custom domain via Namecheap.

```bash
npm run build
# then upload dist/ to S3 and invalidate CloudFront cache
```

## Adding a blog (optional)
If you want to add a blog later, swap to Next.js or add MDX support via `@vitejs/plugin-react` + `vite-plugin-mdx`.
