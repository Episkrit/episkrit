# Episkrit

A responsive single-page application for Episkrit, a language informatics company offering linguistic software and services.

## Features

- CSR SPA built with webpack
- Dark/light theme toggle
- Distinctive editorial typography
- Responsive landing-page layout
- GitHub Pages friendly base paths using relative URLs
- Node.js express preview server

## Scripts

- `npm install`
- `npm run dev` – run webpack dev server
- `npm run build` – create production bundle
- `npm start` – serve the built bundle with Node.js Express
- `npm run deploy` – publish `dist` to GitHub Pages

## GitHub Pages

Update the `homepage` field in `package.json` with your repository URL before deploying:

```json
"homepage": "https://<your-username>.github.io/Episkrit/"
```

Then run:

```bash
npm run deploy
```
