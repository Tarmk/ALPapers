// Question images can be served from a separate host (object storage behind a
// CDN) instead of this site. Set VITE_ASSET_BASE, e.g. "https://media.example.com",
// at build time; left unset, images load from this site's own /topical/ path.
const BASE = (import.meta.env.VITE_ASSET_BASE ?? "").replace(/\/$/, "");

export const assetBase = BASE;

export function asset(path: string): string {
  return BASE && path.startsWith("/") ? BASE + path : path;
}
