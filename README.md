# Barnes & Noble Near Brooklyn

A static, single-page field guide ranking Barnes & Noble locations in New Jersey and the lower Hudson Valley for trips from Brooklyn.

The page is self-contained in `index.html` and can be opened directly in a browser. It includes:

- scored shortlist cards
- sortable and searchable store table
- filters for scored stores, cafes, New Jersey, and Hudson Valley
- rating/source notes and store links

Scores use:

```text
score = 0.50 * rating + 0.30 * closeness + 0.20 * review score
```

Distances are approximate straight-line miles from Brooklyn Borough Hall.

