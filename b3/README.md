# B3, Alraedah Invest Opportunity Announcement Copy

Copywriting reference for the weekly opportunity lifecycle. Seven phases, bilingual. No design, no visuals: words only. Design of the finished posts is handled separately.

## Live preview

**https://tmdweb.github.io/alraedah-invest/b3/**

Locally: open `index.html` in any modern browser.

## Files

| File | Contains |
|---|---|
| `index.html` | Copywriting reference document. Seven phases, each with three copy variants (standard, LinkedIn long caption, story short form), English and Arabic side by side. |
| `tokens.css` | Design tokens copied from B1 for visual consistency with the rest of the programme. |
| `styles.css` | Typography-focused styles for readable copy presentation. |
| `copy-template.docx` | Downloadable Word version of the same content. Paste into Google Docs if that is the working medium. |
| `assets/logos/` | Favicon and shared logo. |

## What's in the doc

**Seven phases**, covering the full opportunity lifecycle:

1. Coming soon, generic (T minus 5 to 3 days)
2. Coming soon, with details (T minus 2 to 1 days)
3. Launching tomorrow, generic (T minus 1 day)
4. Launching tomorrow, with details (T minus 1, final push)
5. Launched, generic (T = 0)
6. Launched, with details (T = 0 to T + 24h, primary conversion post)
7. Fully funded celebration (within 2h of full funding)

**Three forms per phase**:

- **Standard form.** The atomic copy elements (kicker, headline, body, chips, CTA). A designer composes these into any visual layout.
- **LinkedIn long caption.** A 2 to 4 sentence expansion for the text body of a LinkedIn post.
- **Story short form.** Two to three line compressed version for Instagram story or WhatsApp status, for tight-space surfaces.

**Bilingual**: English and Arabic, side by side per phase. Arabic register follows the foundational Alraedah Invest doc (conversational Saudi Arabic).

## Variable slots

Twelve variable tokens appear across the phases: `{{category}}`, `{{city}}`, `{{target_return}}`, `{{tenor}}`, `{{target_raise}}`, `{{funded_pct}}`, `{{open_time}}`, `{{open_day}}`, `{{next_open_day}}`, `{{investor_count}}`, `{{funded_hours}}`, `{{opportunity_name}}`. Full glossary and sample values are in the Variables and Sample values sections of the HTML doc.

## What this is NOT

- **Not a design deliverable.** There are no rendered opportunity-card visuals in this folder. Design of the finished posts is a separate track (Figma / Photoshop) executed by a designer consuming this copy.
- **Not a template renderer.** The earlier version of this folder included a 35-variant HTML showcase with CSS-scaled template thumbnails. That has been removed per client direction; quality of design at that level needs proper art direction, not browser-rendered wireframes.

## Compliance notes

- No "not guaranteed" disclaimers inside any post body. If a channel requires an inline regulator reference, use the prebrand phrase: English "Licensed by SAMA" / Arabic "خاضعة لرقابة البنك المركزي السعودي."
- No hashtags by default.
- No `app.alraedah.sa` references (the legacy template URL is out of date).
- Every post containing a number needs legal review per opportunity. Track in `asset-index.csv` from B2.

## Production flow

1. Marketing picks the phase needed for the day (e.g. phase 6 for the primary conversion post).
2. Copy is read from either this HTML page or `copy-template.docx`.
3. Variable tokens are filled with the opportunity's real values.
4. A designer composes the words into the visual layout for each channel.
5. Published via the client's social-scheduling tool.

## What's next

- **Client review** of the copy across the seven phases in both languages.
- **Legal sign-off** on the standard form of each phase, especially numeric claims.
- **Arabic register lock** if the client prefers a shift from conversational Saudi toward more formal MSA.
- **Design track** for the finished visual compositions, handled separately.
