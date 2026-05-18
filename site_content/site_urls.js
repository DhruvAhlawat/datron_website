/**
 * Cross-site links from the Datron hub (https://datronapps.com) to other deployed apps.
 *
 * `pocketpadPagesSiteOrigin` — GitHub Pages root for pocketpad_website (no trailing slash).
 * PocketPad overview is built as: `${pocketpadPagesSiteOrigin}/apps/pocketpad/index.html`
 * Live: https://dhruvahlawat.github.io/pocketpad_website/apps/pocketpad/index.html
 */
export const pocketpadPagesSiteOrigin = "https://dhruvahlawat.github.io/pocketpad_website";

/** Full public URL of the PocketPad marketing home (used by the hub and legacy redirects). */
export const pocketpadOverviewUrl = `${pocketpadPagesSiteOrigin.replace(/\/$/, "")}/apps/pocketpad/index.html`;
