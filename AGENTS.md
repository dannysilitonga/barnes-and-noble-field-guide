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

## Product Scope

The current page ranks Barnes & Noble locations in New Jersey and the lower Hudson Valley for trips from Brooklyn. It intentionally excludes NYC, Long Island, and Connecticut entries, even when they appeared in the Barnes & Noble locator.

The report includes:

- Location name and address.
- Approximate straight-line distance from Brooklyn Borough Hall at `40.6928, -73.9903`.
- Google rating and review count when a store-specific public snippet was found.
- Open year when available from Barnes & Noble store data.
- Cafe status when available from Barnes & Noble store data.
- A score that accounts for rating quality, distance, and review volume.

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

If rebuilding data, prefer structured Barnes & Noble payload/API data over brittle HTML scraping. BeautifulSoup is acceptable when needed, but checked-in structured data would be a better next step. The report's row data currently lives **inline in `app.js`** (the `DATA` array); `data/` holds research notes — `ny_nj_keywords.json` (review keywords for the current rows) and `orlando_locations.json` (seed data for the planned Orlando guide; see Likely Next Steps). A future generator could formalize this, e.g.:

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

1. **Greater-Orlando, FL field guide — the user's next project.** Seed data is already committed at `data/orlando_locations.json` (metadata + a `locations` array, 9 records so far). Model it on this Brooklyn guide: same scoring formula, closeness from a chosen Orlando base point, unscored rows where ratings are unreliable, the `index.html`/`styles.css`/`app.js` split, and the same warm field-guide design + WCAG AA contrast. Confirm with the user whether Orlando ships in this repo (multi-metro) or as its own project before structuring.
2. In Vercel account settings, add the GitHub Login Connection if automatic git-push deploys are desired.
3. If this project grows beyond a static page, add a reproducible data generator before migrating frameworks.
4. Defer Next.js until there is a real need for routes, components, generated pages, server-side data, API routes, image optimization, or ISR.
