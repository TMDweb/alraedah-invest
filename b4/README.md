# Alraedah Invest, Explainer Videos

Three 30-second explainer videos. Each video ships as a script, a storyboard, and an asset list for the animation vendor. Interactive browser reference plus downloadable .md and .csv files per video.

## Live

**https://tmdweb.github.io/alraedah-invest/b4/**

## Status

- **Video D, How to invest in 3 steps** — ready for review. First pass shipped. Reviews here shape the direction for A and B.
- **Video A, What is debt crowdfunding** — coming next, after Video D is signed off.
- **Video B, Why Alraedah Invest** — coming next, after Video D is signed off.

## What each ready video contains

1. **Script.** Two-column timecoded AV table (Video column: composition, on-screen text, motion. Audio column: VO line, SFX). Copy buttons for the VO alone or the full script.
2. **Storyboard.** One wireframe frame card per beat. Composition annotations, on-screen text literal, motion note, VO line, sound cue.
3. **Assets.** Production manifest. One row per asset the animator needs to produce, source, and status.
4. **Downloads.** `.md` script (for the VO talent and producer). `.csv` asset list (for the animator).

## Files

| File | Contents |
|---|---|
| `index.html` | Tabbed app shell. |
| `styles.css` | App chrome, script table, frame cards, asset table. |
| `tokens.css` | Shared design tokens. |
| `scripts/data.js` | All three videos' content. Single source of truth. |
| `scripts/app.js` | Tab switching, copy-to-clipboard, downloads, keyboard nav. |
| `assets/logos/` | Shared favicon and Alraedah Invest lockup. |

## Runtime budget

Each video is 30 seconds. That is roughly 70 words of VO and 5 to 7 frames. The video D draft is 68 words across 5 frames; this is the target density.

## Handoff to the animation vendor

The asset list is the production manifest. Each asset row has a status:

- **New.** TMD or the vendor produces from scratch.
- **Existing.** Already in the Alraedah brand system (logo, pattern).
- **Adapt.** Pull from another Alraedah Invest deliverable (e.g. the opportunity card from the landing page) and adapt for motion.
- **Commission.** Voiceover, sound design, music.
- **License check.** External mark (Nafath) that needs permission confirmed.

The vendor's proposal should price against this list.
