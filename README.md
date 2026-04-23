# Alraedah Invest, Landing Page Preview

Preview build of the Alraedah Invest landing page, prepared by TMD.

## Live preview

Open [https://tmdweb.github.io/alraedah-invest/](https://tmdweb.github.io/alraedah-invest/) in any modern browser.

## Local preview

Clone and open `index.html`:

```bash
git clone https://github.com/TMDweb/alraedah-invest.git
cd alraedah-invest
open index.html
```

No build step, no server needed. Everything loads from relative paths.

## What's in the page

A complete landing page for the Alraedah Invest debt-crowdfunding platform, covering:

- Hero section with adaptive CTA (pipeline-state aware: live, empty, between-deals)
- Trust bar: SAMA, Shariah, 25% co-investment, 10+ years
- How it works in three illustrated steps
- Current opportunities (with three states previewable via the toolbar at the top)
- Understand your return: a full educational section including four interactive tools
  1. Compare your return (calculator)
  2. The growth path (12-month animated timeline)
  3. Month-by-month payouts (cash flow table with reinvest toggle)
  4. Locked vs. monthly (animated simulation)
- Why Alraedah Invest
- Risk section
- FAQ, organised into three themes
- Governance (SAMA, Shariah committee, 25% co-investment)
- For institutions
- Newsletter signup
- SAMA-compliant footer

## Design-preview toolbar

The subtle bar below the header lets you toggle the opportunities pipeline state between **Live**, **Empty**, and **Between deals** so clients and reviewers can see all three. It is a review-only control and will be removed before production ship.

## File structure

```
/
|- index.html          # The page
|- tokens.css          # Design tokens (colours, type, spacing)
|- styles.css          # Page-specific component styles
|- assets/
|  `- logos/           # Parent Alraedah logo and related assets
|- scripts/
|  |- main.js          # Shared state, navigation, state toggle
|  |- calculator.js    # Tool 1
|  |- timeline-graph.js   # Tool 2
|  |- cash-flow-table.js  # Tool 3
|  `- money-flow-simulator.js  # Tool 4
`- README.md           # This file
```

## Compliance

- Licensed and regulated by the Saudi Central Bank (SAMA).
- Shariah-compliant investment structures, reviewed by an independent committee.
- Target returns, not guaranteed. Capital is exposed to loss.
- Past performance does not predict future results.

## Contact

Questions or feedback: [invest@alraedah.sa](mailto:invest@alraedah.sa)

---

*Built by TMD for Alraedah.*

## Polish-pass-v1 preview

A parallel, lightly-revised version of this page is served at:

**https://tmdweb.github.io/alraedah-invest/v2/**

It contains a Section-4 internal reorder, tighter FAQ, SEO/social metadata,
and minor UX refinements. Discussion and diff: see PR #1.

## B3 opportunity announcement copy

The bilingual copy reference for the weekly opportunity lifecycle (seven
phases, each in three forms: standard, LinkedIn long caption, story short
form) is served alongside the landing page at:

**https://tmdweb.github.io/alraedah-invest/b3/**

Copy-only, no design. A downloadable Word version is linked from the page.
