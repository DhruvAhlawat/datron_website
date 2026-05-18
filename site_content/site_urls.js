/**
 * Cross-site links from the Datron hub (https://datronapps.com) to other deployed apps.
 *
 * `pocketpadPagesSiteOrigin` — public root of the PocketPad site (no trailing slash).
 * PocketPad overview: `${pocketpadPagesSiteOrigin}/apps/pocketpad/index.html`
 * Live: https://pocketpad.datronapps.com/apps/pocketpad/index.html
 */
export const pocketpadPagesSiteOrigin = "https://pocketpad.datronapps.com";

/** Full public URL of the PocketPad marketing home (used by the hub and legacy redirects). */
export const pocketpadOverviewUrl = `${pocketpadPagesSiteOrigin.replace(/\/$/, "")}/apps/pocketpad/index.html`;
