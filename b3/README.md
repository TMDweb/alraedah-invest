# Alraedah Invest, Opportunity Copy

Weekly opportunity copy across seven lifecycle phases, bilingual, with three length variants per phase. Produced as an interactive reference the team and reviewers can browse phase by phase.

## Live

**https://tmdweb.github.io/alraedah-invest/b3/**

## Files

| File | Contents |
|---|---|
| `index.html` | Tabbed app shell. |
| `styles.css` | Compact app-layout styles on top of the shared design tokens. |
| `scripts/data.js` | Seven phases × three forms × two languages. Single source of truth. |
| `scripts/app.js` | Tab switching, language filter, variable-slot toggle, copy-to-clipboard. |
| `tokens.css` | Shared design tokens. |
| `copy-template.docx` | Same content as a Word document for anyone who prefers Google Docs / Word. |
| `assets/logos/` | Shared favicon and logo. |

## Phases

1. Coming soon, generic
2. Coming soon, with details
3. Launching tomorrow, generic
4. Launching tomorrow, with details
5. Launched, generic
6. Launched, with details (primary conversion)
7. Fully funded celebration

## Forms per phase

- **Standard form.** Kicker, headline, body, chips, CTA. The atomic elements a designer composes into any visual layout.
- **LinkedIn long caption.** The longer text body for a LinkedIn post.
- **Story short form.** The compressed version for Instagram story or similarly tight surfaces.

## Variable slots

Twelve tokens appear across phases, visible in gold when the app is set to "Show slots". Click "Show populated" to see what a real live post reads like with sample values substituted.

`{{category}}`, `{{city}}`, `{{target_return}}`, `{{tenor}}`, `{{target_raise}}`, `{{funded_pct}}`, `{{open_time}}`, `{{open_day}}`, `{{next_open_day}}`, `{{investor_count}}`, `{{funded_hours}}`, `{{opportunity_name}}`

## How to use it

1. Pick the phase tab for today's moment in the opportunity cycle.
2. Pick the form for the channel you are publishing to (standard for composed posts, long for LinkedIn captions, short for stories).
3. Copy the text directly from the card using the **Copy** button.
4. Arabic and English sit side by side. Filter to one language from the Language toggle if you prefer.
5. Populate variables with sample values from the Variables toggle if you want to see an example of a real post.

## Editing

All copy lives in `scripts/data.js`. Update there, reload the page, the app picks up the new copy.
