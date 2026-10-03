# Datron — developer hub (static site)

This repo hosts the **main Datron** landing page. Individual apps (e.g. PocketPad) live in their own repositories and are linked via absolute URLs.

## Configure cross-links

Edit **`site_content/site_urls.js`** — set `pocketpadPagesSiteOrigin` to the public PocketPad site root (no trailing slash), e.g. `https://pocketpad.datronapps.com`. Keep that value in sync with **`pocketpad_website/site_content/public_site_urls.js`** in the PocketPad repo.

Set `hideoutSiteOrigin` to the Hideout site root, `https://hideout.datronapps.com`, and keep it in sync with **`foldervault_website/site_content/public_site_urls.js`**. `apps/hideout/index.html` and the old `apps/foldervault/index.html` (the app was called Folder Vault until 2026-10-03) redirect to that site.

## GitHub Pages

Enable Pages from the `main` branch / root (or `/docs`). The site is plain static HTML + ES modules; no build step.

## Shared CSS

`styles.css` is copied from the PocketPad site and may diverge over time; adjust both if you want identical chrome.
