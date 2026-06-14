# AGENTS.md

## Current State

This repo is the deployable Barnes & Noble field guide:

- Repo root: `barnes_and_noble/`
- GitHub repo: `https://github.com/dannysilitonga/barnes-and-noble-field-guide`
- Vercel site: `https://barnes-and-noble-field-guide.vercel.app/`
- GitHub Pages site: `https://dannysilitonga.github.io/barnes-and-noble-field-guide/`
- Main page: `index.html`
- Styles: `styles.css`
- Data, scoring, rendering, filters, sorting, and row reveal behavior: `app.js`

The workspace root also has `../AGENTS.md` with longer historical notes when this repo is opened from the original `weekend_gateaways` workspace.

## ⚠️ Pending Work — Table Redesign (requested 2026-06-13, DO NEXT)

The user asked for a leaner table and started this redesign right after the "Review keywords" column shipped. **No code changes were made yet** — this is the next task. Implement these, then verify + deploy (see Verification / Vercel sections).

1. **Fix the table getting cut off.** Adding the keyword column pushed `table { min-width: 1320px }` (in `styles.css`) wider than the container on typical laptop widths, so the rightmost columns (Score, Review keywords) sit off the right edge and the horizontal scroll inside `.table-shell` isn't obvious. Removing the two columns below should let it fit; re-tighten `min-width` and re-check at ~1280px desktop and 390px mobile (no page-level horizontal overflow; the table may still scroll inside `.table-shell`).
2. **Remove the "Reviews idx" column** (the `rev` display — it is the review-volume score, log-normalized 0–5). The user wants to **keep the Rating column** (stars + review count). ⚠️ **Keep the `rev` field in `DATA` and in the score formula** — only delete its entry from `COLS` and its `<td>` in `renderLocationRow`. `score = 0.50*rating + 0.30*closeness + 0.20*review_score` still consumes it.
3. **Remove the "Closeness" column** (the `close` display) — the user questioned its value. ⚠️ Same rule: **keep the `close` field for scoring**, remove only the displayed column. (Confirm hide-vs-remove with the user; they leaned toward removing.)
4. **Change "Distance" from straight-line miles to DRIVING TIME** from Brooklyn Borough Hall (`40.6928, -73.9903`). This needs **new data** — the inline NJ `DATA` only has `dist` (straight-line miles), **no per-store coordinates**:
   - Get each store's lat/long (re-fetch from the B&N locator API — it returns coordinates, like `data/orlando_locations.json` does — or geocode the addresses already in `DATA`).
   - Compute driving duration from Brooklyn Borough Hall via a routing API (OSRM public `router.project-osrm.org` is free/keyless; Google or Mapbox Distance Matrix are alternatives). Store as a new `drive` field (e.g. minutes / "38 min").
   - Display `drive` in that column (rename header to "Drive time"). **Keep `dist` for the closeness/score calc**, OR re-base closeness on drive time — that's an open decision for the user.
   - Update the footer/notes caveat (currently "approximate straight-line miles…").

**Open decisions to confirm with the user before/while implementing:** (a) remove Closeness entirely vs just hide it; (b) driving-time source (free OSRM vs keyed Google/Mapbox) and whether the score's `closeness` should be re-based on drive time or stay straight-line under the hood; (c) whether to mirror this redesign on the Orlando page (`../orlando/`, a separate standalone clone — changes here do NOT propagate; Orlando already has coordinates so drive time is easier there).

## Product Scope

The current page ranks Barnes & Noble locations in New Jersey and the lower Hudson Valley for trips from Brooklyn. It intentionally excludes NYC, Long Island, and Connecticut entries, even when they appeared in the Barnes & Noble locator.

The report includes:

- Location name and address.
- Approximate straight-line distance from Brooklyn Borough Hall at `40.6928, -73.9903`.
- Google rating and review count when a store-specific public snippet was found.
- Open year when available from Barnes & Noble store data.
- Cafe status when available from Barnes & Noble store data.
- A score that accounts for rating quality, distance, and review volume.
- Keywords drawn from user reviews (joined from `data/ny_nj_keywords.json` via the `KW` map in `app.js`), shown as a non-sortable, searchable "Review keywords" column.

Current score formula:

```text
score = 0.50 * rating + 0.30 * closeness + 0.20 * review score
```

`closeness` is normalized to 0-5, where closer to Brooklyn is better. `review score` is log-normalized to 0-5, so review count helps without overwhelming rating quality.

## Data Caveats

Location, address, open-year, cafe, and official store links came from Barnes & Noble locator/store pages. The locator exposed structured data in the rendered page payload during the original build.

Ratings and review counts are less reproducible:

- Google Places identity lookup was available, but the available tooling did not expose rating/review-count fields for these listings.
- The current report uses the most store-specific Google-indexed public snippet found for each rated row.
- Each rating source is linked row-by-row.
- Rows without reliable store-specific snippets are left unscored rather than guessed.

If rebuilding data, prefer structured Barnes & Noble payload/API data over brittle HTML scraping. BeautifulSoup is acceptable when needed, but checked-in structured data would be a better next step. The report's row data currently lives **inline in `app.js`** (the `DATA` array); `data/` holds research notes — `ny_nj_keywords.json` (review keywords for the current rows, surfaced via the `KW` map as the "Review keywords" column). The Orlando seed data that used to live here has moved to its own repo (see Likely Next Steps). A future generator could formalize this, e.g.:

- `generate_report.py`
- `data/locations.json`
- `data/ratings.json`

## Design Direction

Keep the report quiet, clean, and table-first. It should feel like a field guide and data tool, not a marketing landing page.

Current design choices to preserve:

- Warm paper/bookstore palette.
- Compact top metrics.
- Three-card scored shortlist.
- Sortable, searchable, filterable table.
- Native `<details>` disclosure for sources.
- First 16 table rows shown by default, with a compact `Show N more locations` reveal button.
- Search and filters bypass the fold so all matching rows are visible.
- Wide table scrolls inside `.table-shell` on narrow screens; avoid page-level horizontal overflow.

Avoid adding ornate gradients, decorative blobs, nested cards, heavy shadows, or verbose instructional copy. Existing design references were Airtable-style data density and Starbucks-style warm retail/cafe tokens via the installed `awesome-design-md` skill.

## Verification

Run these from this repo root after HTML or JS changes:

```bash
python3 -m html.parser index.html
node --check app.js
```

For UI changes, also verify:

- Default row count is 16.
- Expand/collapse works.
- Search/filter behavior bypasses the row fold.
- Result count text is accurate.
- No page-level horizontal overflow on mobile widths.
- Focus states remain visible.
- No console errors when a browser target can be opened.

The project has no framework and no build step yet. A local static server is enough for browser QA:

```bash
python3 -m http.server 8765
```

## Vercel Deployment

Official Vercel agent skills are installed project-locally:

- `.agents/skills/vercel-cli`
- `.agents/skills/deploy-to-vercel`
- `skills-lock.json`

Before changing deploy behavior, read the relevant installed skill instructions. The deploy skill requires checking git remote, local Vercel link, auth state, and team state before choosing a deployment method.

Known Vercel state as of June 13, 2026:

- Global Vercel CLI is installed.
- CLI auth was completed as `dannysilitonga-3263`.
- Team/project scope: `danny-silitongas-projects`.
- Vercel project: `danny-silitongas-projects/barnes-and-noble-field-guide`.
- Local Vercel metadata lives in `.vercel/` and is ignored by git.
- Live alias: `https://barnes-and-noble-field-guide.vercel.app/`.
- Last inspected deployment: `dpl_ZQQoFzNZ3AJd9Twmdf4amXhzMRBB`, target `production`, status `Ready`.

Use CLI deploys until GitHub integration is fixed:

```bash
vercel deploy . --yes --no-wait --scope danny-silitongas-projects
vercel inspect barnes-and-noble-field-guide.vercel.app --scope danny-silitongas-projects
```

Important caveat: `vercel link --repo --scope danny-silitongas-projects` found no existing Vercel project connected to the GitHub repo. Standard linking created the Vercel project, but connecting the GitHub repository failed because the Vercel account needs a GitHub Login Connection. Until that is fixed in Vercel account settings, do not assume git pushes trigger Vercel deployments.

## Git State Notes

Before this handoff file was added, recent commits included:

- `ee3eb83 Add Vercel deployment skills`
- `f31a7b1 Split static site assets`
- `47d0fa4 Simplify folded table reveal`

The repo was ahead of `origin/main` locally after adding Vercel skills and deployment docs. Check `git status --short --branch` before new work. Do not overwrite unpushed commits or user changes.

## Likely Next Steps

1. **Greater-Orlando, FL field guide — shipped as its own repo (June 13, 2026).** Decision: standalone, not multi-metro in this repo. It lives at `github.com/dannysilitonga/barnes-and-noble-orlando-field-guide` (private) and deploys to Vercel only at `https://barnes-and-noble-orlando-field-guid.vercel.app`. Built as a standalone clone of this guide (same scoring formula and design; Area/city column and feature filters instead of state regions). The `data/orlando_locations.json` seed moved into that repo. In the workspace it is the sibling `../orlando/` folder.
2. In Vercel account settings, add the GitHub Login Connection if automatic git-push deploys are desired.
3. If this project grows beyond a static page, add a reproducible data generator before migrating frameworks.
4. Defer Next.js until there is a real need for routes, components, generated pages, server-side data, API routes, image optimization, or ISR.
