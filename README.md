# itswift

Next.js static site configured for GitHub Pages deployment.

## Requirements

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

Create a production build:

```bash
npm run build
```

Because this project uses `output: 'export'`, the static site is generated in the `out/` directory.

## Preview static build

Build the static site, then preview the exported files locally:

```bash
npm run build
npm run start
```

## Deploy to GitHub Pages

This project is configured with:

- `homepage`: `http://guruswaami.github.io/itswift`
- `basePath`: `/itswift`

Deploy with:

```bash
npm run deploy
```

The deploy script publishes the contents of `out/` using:

```bash
gh-pages -d out -t
```

## Available scripts

- `npm run dev` - start the local development server
- `npm run build` - create the production build and static export
- `npm run start` - preview the exported `out/` directory
- `npm run predeploy` - run the build before deployment
- `npm run deploy` - publish the `out/` directory to GitHub Pages
