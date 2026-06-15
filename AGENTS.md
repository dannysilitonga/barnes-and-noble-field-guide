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

## ✅ Table Redesign — Shipped 2026-06-15

The leaner table redesign requested 2026-06-13 is **done**, mirrored on both this page and the Orlando sibling (`../orlando/`). What changed:

1. **Cutoff fixed.** `table { min-width }` dropped from 1320px to **1080px** (`styles.css`); the table now fits inside `.table-shell` at ~1280px with no page-level overflow, and still scrolls inside the shell on narrow widths (verified at 390px).
2. **"Reviews idx" (`rev`) and "Closeness" (`close`) columns are hidden, not removed.** Both keep their `DATA` fields (they feed the score) and their `COLS` entries, now flagged `hidden:true`. `renderHead` iterates `VISIBLE = COLS.filter(c => !c.hidden)`; the row guards those two cells with `shown("rev")`/`shown("close")`; the reveal-row colspan uses `VISIBLE.length`. **Flip `hidden:false` to surface either column again.**
3. **Distance → Drive time.** Each row has a new integer `drive` field (minutes), formatted by `driveFmt()` ("31 min" / "1 hr 32 min"). The old straight-line `dist` field stays in `DATA` as a reference but is no longer displayed or scored.
4. **Closeness re-based on drive time.** `closeness` is now the min–max normalization of **OSRM driving time** from Brooklyn Borough Hall over the scored set (shortest drive = 5). All `close`/`score`/`rank` values were recomputed and inlined; the formula is unchanged (`0.50*rating + 0.30*closeness + 0.20*review_score`). Ranks shifted where straight-line was misleading (e.g., Holmdel/Freehold slipped, Paramus/Woodland Park/Union Plaza rose).

**Data provenance:** per-store coordinates were geocoded (US Census + OSM Nominatim POI fallback), spot-verified, and routed from Brooklyn Borough Hall (`40.6928, -73.9903`) with the free/keyless OSRM public API (`router.project-osrm.org`). Coordinates + drive times are recorded in `data/ny_nj_coords.json`. Drive times are typical no-traffic estimates; real traffic runs longer.

## Product Scope

The current page ranks Barnes & Noble locations in New Jersey and the lower Hudson Valley for trips from Brooklyn. It intentionally excludes NYC, Long Island, and Connecticut entries, even when they appeared in the Barnes & Noble locator.

The report includes:

- Location name and address.
- Driving time from Brooklyn Borough Hall at `40.6928, -73.9903` (OSRM, typical no-traffic).
- Google rating and review count when a store-specific public snippet was found.
- Open year when available from Barnes & Noble store data.
- Cafe status when available from Barnes & Noble store data.
- A score that accounts for rating quality, driving proximity, and review volume.
- Keywords drawn from user reviews (joined from `data/ny_nj_keywords.json` via the `KW` map in `app.js`), shown as a non-sortable, searchable "Review keywords" column.

Current score formula:

```text
score = 0.50 * rating + 0.30 * closeness + 0.20 * review score
```

`closeness` is the min–max normalization of driving time (OSRM) to Brooklyn Borough Hall across the scored set (0-5), where a shorter drive is higher. `review score` is log-normalized to 0-5, so review count helps without overwhelming rating quality.

## Data Caveats

Location, address, open-year, cafe, and official store links came from Barnes & Noble locator/store pages. The locator exposed structured data in the rendered page payload during the original build.

Ratings and review counts are less reproducible:

- Google Places identity lookup was available, but the available tooling did not expose rating/review-count fields for these listings.
- The current report uses the most store-specific Google-indexed public snippet found for each rated row.
- Each rating source is linked row-by-row.
- Rows without reliable store-specific snippets are left unscored rather than guessed.

If rebuilding data, prefer structured Barnes & Noble payload/API data over brittle HTML scraping. BeautifulSoup is acceptable when needed, but checked-in structured data would be a better next step. The report's row data currently lives **inline in `app.js`** (the `DATA` array); `data/` holds research notes — `ny_nj_keywords.json` (review keywords for the current rows, surfaced via the `KW` map as the "Review keywords" column) and `ny_nj_coords.json` (per-store coordinates + OSRM drive times from Brooklyn Borough Hall, provenance for the Drive time column and the re-based closeness). The Orlando seed data that used to live here has moved to its own repo (see Likely Next Steps). A future generator could formalize this, e.g.:

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

**Git author email gotcha (learned 2026-06-15):** Vercel attributes each CLI deploy to the **git commit author email**. Commits must be authored by `dannysilitonga@gmail.com` (the Vercel account email). The old `dannysilitonga@yahoo.com` is **abandoned — never use it**; the standard fallback git email is `dsilitonga@gradcenter.cuny.edu`. The private Orlando sibling project BLOCKS deploys whose author isn't a verified team member (`readyState:BLOCKED`, `seatBlock TEAM_ACCESS_REQUIRED`); this public Brooklyn project currently does not enforce it, but author your commits as gmail anyway. `git config user.email` is set to gmail globally and in this repo.

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
