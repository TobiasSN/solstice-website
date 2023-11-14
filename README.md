# Solstice website

This repo contains the website for Solstice, a fictional country on the bnbmc Minecraft server.

It uses [PNPM](https://pnpm.io/), so make sure to install that if you haven't already.

To install dependencies:
```
pnpm i
```

To preview the site:
```
pnpm dev
```

This will update automatically as you make changes.

To build the site:
```
pnpm generate
```

This will generate static files in `.output/public` that can then be served from GitHub Pages, Vercel, or similar.
