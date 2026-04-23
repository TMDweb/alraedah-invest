# B3, Alraedah Invest Opportunity Announcement Templates

Third TMD deliverable. An interactive HTML showcase of 35 rendered social-media variants (7 lifecycle phases × 5 channel surfaces), plus a bilingual copy template with variable slots.

## Live preview

Once pushed to GitHub Pages: **https://tmdweb.github.io/alraedah-invest/b3/**

Locally: open `index.html` in any modern browser.

## What's in the page

- **35 rendered variants.** Phase × channel grid, clickable for a full-size detail modal.
- **Two filter bars.** Filter by phase (coming-soon generic, coming-soon with details, launching tomorrow generic, launching tomorrow with details, launched generic, launched with details, fully funded) and by channel (LinkedIn feed, LinkedIn square, X, Instagram feed, Instagram story).
- **Two view toggles.**
  - `Show Arabic` flips all visible variants to the Arabic copy (RTL layout, Ping AR font stack).
  - `Show populated sample` replaces variable tokens like `{{target_return}}` with concrete sample values so you see what a real live post looks like.

## Files

| File | Contains |
|---|---|
| `index.html` | Showcase shell with header, filter controls, grid, and detail modal. |
| `tokens.css` | Design tokens copied from B1. |
| `styles.css` | Showcase chrome + template layouts per channel. Each channel renders at its native pixel size. |
| `scripts/data.js` | Seven phases of copy (English + Arabic) plus sample values. Single source of truth: edit here to update all 35 variants. |
| `scripts/showcase.js` | Renderer, filters, language toggle, populated toggle, detail modal. |
| `copy-template.docx` | Text-form bilingual reference of the same copy, with timing notes, variable glossary, and sample-value table. For client and legal review. |
| `assets/logos/` | Parent Alraedah lockup, shared with B1. |

## Channels

| Channel | Dimensions | Aspect |
|---|---|---|
| LinkedIn feed | 1200 × 628 | 1.91 : 1 landscape |
| LinkedIn square | 1080 × 1080 | 1 : 1 |
| X (Twitter) | 1600 × 900 | 1.78 : 1 landscape |
| Instagram feed | 1080 × 1440 | 4 : 5 portrait |
| Instagram story | 1080 × 1920 | 9 : 16 tall portrait |

Every template renders at its native pixel size in the DOM, scaled down visually via CSS `transform: scale()` for thumbnails. Screenshots taken from the detail modal (or an 100%-zoom browser) are production-ready sizes.

## Phases

| # | Name | Timing | Uses variables |
|---|---|---|---|
| 1 | Coming soon, generic | T minus 5 to 3 days | No |
| 2 | Coming soon, with details | T minus 2 to 1 days | Yes |
| 3 | Launching tomorrow, generic | T minus 1 day | `{{open_time}}` |
| 4 | Launching tomorrow, with details | T minus 1, final push | Yes |
| 5 | Launched, generic | T = 0 | No |
| 6 | Launched, with details | T = 0 to T + 24h | Yes, primary conversion post |
| 7 | Fully funded celebration | Within 2h of full funding | Yes |

## Variable slots

Twelve slots available across phases. See `copy-template.docx` for the full glossary.

`{{category}}`, `{{city}}`, `{{target_return}}`, `{{tenor}}`, `{{target_raise}}`, `{{funded_pct}}`, `{{open_time}}`, `{{open_day}}`, `{{next_open_day}}`, `{{investor_count}}`, `{{funded_hours}}`, `{{opportunity_name}}`

## How production uses this

1. Marketing picks a phase (e.g. phase 6 for the primary conversion post).
2. The CMS or social scheduler reads `data.js` (or the copy-template.docx) for the copy skeleton of that phase.
3. Variable tokens are substituted with the opportunity's real data.
4. The rendered variant at each channel's pixel size is posted with the substituted copy.

If the team runs production manually instead of via CMS: open the showcase, click the phase + channel needed, click the variant, copy the fields from the detail modal, and screenshot the stage to get the image at the right size.

## Compliance notes

- No "not guaranteed" disclaimer inside any post body. The compliance floor ("Licensed by SAMA") lives in the footer of every variant.
- Arabic footer uses the prebrand-established phrase: `خاضعة لرقابة البنك المركزي السعودي`.
- Every post that contains a number (rate, tenor, raise amount, funded percentage, investor count) needs legal review per opportunity. Flag in `asset-index.csv` before publishing.
- No hashtags by default, matching the B2 decision.
- No `app.alraedah.sa` references, replacing the out-of-date URL from the legacy template.

## What's next

- **Legal review.** Disclaimer variants from B2 apply here too. Once legal signs off on a phrasing, update the footer text in `scripts/data.js` and rebuild the showcase.
- **Arabic register lock.** The client should confirm whether the Arabic register (currently conversational Saudi, matching the foundational doc) is right or if it should shift to more formal MSA.
- **Image production.** For each opportunity, the production team populates variables and screenshots the rendered variant from the modal at 1:1 zoom. That image is the post asset.
