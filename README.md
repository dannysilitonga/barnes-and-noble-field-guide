# Barnes & Noble Near Brooklyn

A static, single-page field guide ranking Barnes & Noble locations in New Jersey and the lower Hudson Valley for trips from Brooklyn.

The page can be opened directly in a browser. Phase 1 split the original single-file artifact into:

- `index.html` for semantic page markup
- `styles.css` for layout and visual design
- `app.js` for the inline data, table rendering, filters, search, sorting, and row reveal behavior

It includes:

- scored shortlist cards
- sortable and searchable store table
- filters for scored stores, cafes, New Jersey, and Hudson Valley
- rating/source notes and store links

Scores use:

```text
score = 0.50 * rating + 0.30 * closeness + 0.20 * review score
```

Distances are approximate straight-line miles from Brooklyn Borough Hall.

## Development

No framework or build step is required yet.

```bash
python3 -m html.parser index.html
node --check app.js
python3 -m http.server 8765
```

The site is Vercel-ready as a static project. If imported into Vercel, use the `barnes_and_noble/` directory as the project root with no build command and `.` as the output directory. Keep GitHub Pages live until Vercel is verified.
