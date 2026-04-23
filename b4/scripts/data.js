/* ==========================================================================
   Alraedah Invest, B4 Explainer videos, data
   Four 30-second videos:
     A. What is debt crowdfunding (category education)
     B. Why Alraedah Invest (brand differentiation)
     C. Monthly reinvested vs. the bank (advantage, mirrors the LP calculator)
     D. How to invest in 3 steps (product walkthrough)
   ========================================================================== */

window.AInvestB4 = {
  videos: [

    {
      id: 'a',
      code: 'A',
      title: 'What is debt crowdfunding',
      synopsis: 'Redirect the "crowdfunding means donations or equity" assumption. Introduce debt crowdfunding as co-financing an SME loan that pays investors back monthly with a target return.',
      runtime: 30,
      status: 'done',
      audience: 'Saudi retail investor who has heard the word "crowdfunding" and pictures a donation or a startup equity round.',
      script: {
        vo: 'When you hear crowdfunding, you picture donations. Or startup shares.\nDebt crowdfunding is neither.\nA Saudi business needs financing. You and other investors provide it together.\nThe business repays, monthly. You receive your capital plus a target return.\nOn Alraedah Invest. From SAR 1,000. Licensed by the Saudi Central Bank.\nThis is how your money works.',
        wordCount: 66
      },
      frames: [
        {
          n: 1,
          time: '0:00 - 0:04',
          duration: 4,
          composition: 'Full-bleed blue ground. Single oversized word "Crowdfunding?" centered, ending with a gold question mark. Subtle brand-pattern texture behind.',
          onScreenText: 'Crowdfunding?',
          motion: 'Word writes on left to right over 0.8s. Gold question mark bounces in last, small overshoot and settle.',
          audio: 'Opening brand-sting chord, soft reverb tail.',
          vo: 'When you hear crowdfunding, you picture donations. Or startup shares.'
        },
        {
          n: 2,
          time: '0:04 - 0:09',
          duration: 5,
          composition: 'Two large icons side by side on a light surface: donation heart on the left, stock certificate on the right. Labels "Not donations." and "Not shares." underneath.',
          onScreenText: 'Not donations. Not shares.',
          motion: 'Icons fade in together. After 0.4s, a thin strike line draws across each from left to right. Labels underneath reveal as the strike lands.',
          audio: 'Two soft pen-strike sounds as the lines draw.',
          vo: 'Debt crowdfunding is neither.'
        },
        {
          n: 3,
          time: '0:09 - 0:15',
          duration: 6,
          composition: 'Horizontal flow: SME/shop glyph on the left, a cluster of investor figures in the center, a pool-of-capital symbol on the right. Thin blue arrows connect left to center to right.',
          onScreenText: 'Investors fund a business.',
          motion: 'Each element slides in left-to-right. Arrows draw after each element lands. Gentle pop as the capital-pool symbol arrives.',
          audio: 'Three soft pop sounds, one per element arrival.',
          vo: 'A Saudi business needs financing. You and other investors provide it together.'
        },
        {
          n: 4,
          time: '0:15 - 0:21',
          duration: 6,
          composition: 'Twelve-month strip across the top third. Three coin glyphs drop from the month markers into a wallet on the right. Subtle gold accent on the wallet rim.',
          onScreenText: 'Repaid monthly.',
          motion: 'One coin drop per second over the first three months, with the wallet gently pulsing as each coin lands. Remaining months hinted at with dimmer markers.',
          audio: 'Three soft coin-chime arrivals.',
          vo: 'The business repays, monthly. You receive your capital plus a target return.'
        },
        {
          n: 5,
          time: '0:21 - 0:27',
          duration: 6,
          composition: 'Centered Alraedah Invest lockup. Beneath the lockup, on one line: "From SAR 1,000 · Licensed by SAMA."',
          onScreenText: 'Alraedah Invest\nFrom SAR 1,000 · Licensed by SAMA',
          motion: 'Lockup fades in. Credential line reveals 0.4s later from the center outward. Small gold dot under the lockup as a brand accent.',
          audio: 'Warm brand-chord note.',
          vo: 'On Alraedah Invest. From SAR 1,000. Licensed by the Saudi Central Bank.'
        },
        {
          n: 6,
          time: '0:27 - 0:30',
          duration: 3,
          composition: 'Centered tagline in large display weight. URL in a small lighter weight below.',
          onScreenText: 'This is how your money works.\nalraedah.sa/invest',
          motion: 'Tagline writes on. URL reveals after a beat.',
          audio: 'Closing brand-sting, matching the opening octave lower.',
          vo: 'This is how your money works.'
        }
      ],
      assets: [
        { id: 'A-01', frame: '1',   type: 'Type treatment', description: 'Title card typography: "Crowdfunding?" with gold question mark.', source: 'Design system', status: 'New' },
        { id: 'A-02', frame: '2',   type: 'Icon',           description: 'Donation heart glyph, 2-pixel stroke.',                           source: 'Design system', status: 'New' },
        { id: 'A-03', frame: '2',   type: 'Icon',           description: 'Stock / shares certificate glyph.',                              source: 'Design system', status: 'New' },
        { id: 'A-04', frame: '2',   type: 'Animation',      description: 'Strike-through line draw across the two wrong-answer icons.',    source: 'New motion cue', status: 'New' },
        { id: 'A-05', frame: '3',   type: 'Icon',           description: 'SME / small-business shop glyph.',                               source: 'Design system', status: 'New' },
        { id: 'A-06', frame: '3',   type: 'Icon',           description: 'Cluster of investor figures (3 to 5 small human glyphs).',       source: 'Design system', status: 'New' },
        { id: 'A-07', frame: '3',   type: 'Icon',           description: 'Pool-of-capital symbol (stacked currency or vault).',             source: 'Design system', status: 'New' },
        { id: 'A-08', frame: '3',   type: 'Animation',      description: 'Connecting-arrow draw-on, sequenced with each element arriving.', source: 'New motion cue', status: 'New' },
        { id: 'A-09', frame: '4',   type: 'Component',      description: 'Twelve-month strip with tick markers.',                         source: 'Adapt from Video D frame 4', status: 'Adapt' },
        { id: 'A-10', frame: '4',   type: 'Icon',           description: 'Coin glyph (×3 for the drop sequence).',                         source: 'Design system', status: 'New' },
        { id: 'A-11', frame: '4',   type: 'Icon',           description: 'Wallet glyph.',                                                  source: 'Shared with Video D', status: 'Adapt' },
        { id: 'A-12', frame: '5',   type: 'Type treatment', description: 'Credential line "From SAR 1,000 · Licensed by SAMA".',            source: 'Design system', status: 'New' },
        { id: 'A-13', frame: 'all', type: 'Logo',           description: 'Alraedah Invest primary lockup.',                                source: 'assets/logos/alraedah-parent.png', status: 'Existing' },
        { id: 'A-14', frame: 'all', type: 'Audio VO',       description: 'English voiceover recording, warm-confident-direct register, approximately 30 seconds.', source: 'VO studio', status: 'Commission' },
        { id: 'A-15', frame: 'all', type: 'Audio SFX',      description: 'Sound design: opening sting, pen-strike (×2), element-pop (×3), coin-chime (×3), closing sting.', source: 'Studio', status: 'Commission' },
        { id: 'A-16', frame: 'all', type: 'Audio bed',      description: 'Music bed, warm and quiet, approximately 30 seconds with breath room for VO.', source: 'Licensed library', status: 'Commission' }
      ]
    },

    {
      id: 'b',
      code: 'B',
      title: 'Why Alraedah Invest',
      synopsis: 'Three trust signals in sequence: ten-year underwriting pedigree, 25% co-investment alignment, SAMA and Shariah governance.',
      runtime: 30,
      status: 'done',
      audience: 'Investor weighing options across platforms, wondering why this one over another.',
      script: {
        vo: 'There are many ways to invest. Most platforms are new.\nAlraedah has underwritten SME financing for over ten years.\nWhen you invest with us, we invest alongside you. Up to 25% of every opportunity.\nSAMA licensed. Shariah-committee reviewed.\nSame underwriting. Same side of the table.',
        wordCount: 58
      },
      frames: [
        {
          n: 1,
          time: '0:00 - 0:04',
          duration: 4,
          composition: 'Crowded grid of generic investment-option icons in muted greys and blues (savings account, sukuk, mutual fund, REIT, deposit, etc.). Small navy title top-left: "Many ways to invest."',
          onScreenText: 'Many ways to invest.',
          motion: 'Grid populates with soft stagger, icons arriving in a pseudo-random order.',
          audio: 'Opening brand-sting chord, soft tail.',
          vo: 'There are many ways to invest.'
        },
        {
          n: 2,
          time: '0:04 - 0:08',
          duration: 4,
          composition: 'A horizontal timeline bar runs across the middle. Most icon-dots from the previous frame collapse and reposition into a dense cluster near the right edge ("now"). Label: "Most are new."',
          onScreenText: 'Most platforms are new.',
          motion: 'Icons slide into the timeline, clustering on the right. Gold tick for "today" on the far right.',
          audio: 'Soft emphasis chord.',
          vo: 'Most platforms are new.'
        },
        {
          n: 3,
          time: '0:08 - 0:14',
          duration: 6,
          composition: 'Big gold numeral "10+" centered, filling most of the frame. Small subtitle beneath: "years · SME underwriting · Alraedah."',
          onScreenText: '10+\nyears · SME underwriting',
          motion: 'Number 1 writes on, 0 drops in, "+" appears last with a small bounce. Subtitle reveals after a beat.',
          audio: 'Warm confident chord.',
          vo: 'Alraedah has underwritten SME financing for over ten years.'
        },
        {
          n: 4,
          time: '0:14 - 0:21',
          duration: 7,
          composition: 'Two figures on a shared baseline. Left figure: an investor (person glyph). Right figure: an Alraedah corporate glyph (small lockup chip). Between them, a shared pool with "25%" label prominently rendered.',
          onScreenText: 'You invest.\nAlraedah invests 25%.',
          motion: 'Investor figure appears first. Alraedah figure appears 0.4s later. Shared pool draws between them. "25%" label slides into place with small emphasis.',
          audio: 'Two positive chord notes as each side arrives, then a soft resolve as the pool forms.',
          vo: 'When you invest with us, we invest alongside you. Up to 25% of every opportunity.'
        },
        {
          n: 5,
          time: '0:21 - 0:26',
          duration: 5,
          composition: 'Two credential marks centered side by side. Left: SAMA mark. Right: Shariah-committee icon. Labels beneath each.',
          onScreenText: 'SAMA licensed · Shariah-committee reviewed',
          motion: 'Marks fade in together. Labels reveal after 0.4s beat.',
          audio: 'Two soft confirmation notes.',
          vo: 'SAMA licensed. Shariah-committee reviewed.'
        },
        {
          n: 6,
          time: '0:26 - 0:30',
          duration: 4,
          composition: 'Centered Alraedah Invest lockup on navy ground. Tagline beneath: "Same underwriting. Same side of the table." URL small below.',
          onScreenText: 'Same underwriting. Same side of the table.\nalraedah.sa/invest',
          motion: 'Lockup fades in, tagline writes on word by word, URL reveals last.',
          audio: 'Closing brand sting.',
          vo: 'Same underwriting. Same side of the table.'
        }
      ],
      assets: [
        { id: 'B-01', frame: '1',   type: 'Icon set',       description: 'Grid of 8 to 12 generic investment-option icons (savings, sukuk, mutual fund, REIT, deposit, equity, etc.).', source: 'Design system', status: 'New' },
        { id: 'B-02', frame: '2',   type: 'Component',      description: 'Horizontal timeline component with a "today" marker on the right.', source: 'New', status: 'New' },
        { id: 'B-03', frame: '2',   type: 'Animation',      description: 'Icon-to-timeline reflow motion, converging icons cluster near today.', source: 'New motion cue', status: 'New' },
        { id: 'B-04', frame: '3',   type: 'Type treatment', description: 'Big "10+" display numeral with small subtitle "years · SME underwriting."', source: 'Design system', status: 'New' },
        { id: 'B-05', frame: '4',   type: 'Icon',           description: 'Investor person glyph.', source: 'Design system', status: 'New' },
        { id: 'B-06', frame: '4',   type: 'Icon',           description: 'Alraedah corporate glyph (logo-chip form).', source: 'Existing logo, adapted', status: 'Adapt' },
        { id: 'B-07', frame: '4',   type: 'Visualization',  description: '25% co-investment pool visualization with shared baseline and labelled capital share.', source: 'New', status: 'New' },
        { id: 'B-08', frame: '5',   type: 'Credential',     description: 'SAMA mark at approved scale and colour treatment.', source: 'SAMA brand kit (license to confirm)', status: 'License check' },
        { id: 'B-09', frame: '5',   type: 'Icon',           description: 'Shariah-committee icon.', source: 'Design system', status: 'New' },
        { id: 'B-10', frame: '6',   type: 'Type treatment', description: 'Closing tagline "Same underwriting. Same side of the table."', source: 'Design system', status: 'New' },
        { id: 'B-11', frame: 'all', type: 'Logo',           description: 'Alraedah Invest primary lockup.', source: 'assets/logos/alraedah-parent.png', status: 'Existing' },
        { id: 'B-12', frame: 'all', type: 'Audio VO',       description: 'English voiceover, same register as Video A.', source: 'VO studio', status: 'Commission' },
        { id: 'B-13', frame: 'all', type: 'Audio SFX',      description: 'Sound design: opening sting, emphasis chord, confident chord, positive double-note, soft confirmation pair, closing sting.', source: 'Studio', status: 'Commission' },
        { id: 'B-14', frame: 'all', type: 'Audio bed',      description: 'Music bed consistent with Video A.', source: 'Licensed library', status: 'Commission' }
      ]
    },

    {
      id: 'c',
      code: 'C',
      title: 'Monthly reinvested vs. the bank',
      synopsis: 'The reinvest advantage, in simple terms. Mirrors the landing-page calculator: SAR 10,000 in a bank at 4% flat ends the year at SAR 10,400; on Alraedah Invest at a 7% target kept as cash ends about the same; reinvested grows to SAR 10,723.',
      runtime: 30,
      status: 'done',
      audience: 'Investor arguing with themselves about why not just leave money in a bank. Frames the reinvest behaviour as the unlock.',
      script: {
        vo: 'A bank locks your money for a year. 4% flat.\nSAR 10,000 becomes SAR 10,400 at the end.\nAlraedah Invest pays you monthly. 7% target.\nKeep the payouts as cash: about the same at year end.\nReinvest each one: SAR 10,723.\nMore than the bank. Working every month.\nDon\'t let your money sit still.',
        wordCount: 62
      },
      frames: [
        {
          n: 1,
          time: '0:00 - 0:05',
          duration: 5,
          composition: 'A padlocked box in the centre holding "SAR 10,000." Twelve-month calendar arc curves around it. Label top-left: "Bank. Locked. 4% flat."',
          onScreenText: 'Bank. Locked.\n4% flat.',
          motion: 'Money slides into the box, padlock snaps shut, calendar arc draws around from left to right.',
          audio: 'Opening brand-sting chord, single lock-click sound.',
          vo: 'A bank locks your money for a year. 4% flat.'
        },
        {
          n: 2,
          time: '0:05 - 0:10',
          duration: 5,
          composition: 'Padlock opens. The box releases a big navy number "SAR 10,400." Calendar arc closes to full circle around it, completing the year.',
          onScreenText: 'Year-end: SAR 10,400.',
          motion: 'Padlock unlocks, box opens, number counts up from 10,000 to 10,400. Arc completes with a soft sweep.',
          audio: 'Lock-open click, single chime as the number lands.',
          vo: 'SAR 10,000 becomes SAR 10,400 at the end.'
        },
        {
          n: 3,
          time: '0:10 - 0:15',
          duration: 5,
          composition: 'Same SAR 10,000 starting amount on the left, but instead of a locked box, twelve arrows point outward to individual month markers along a horizontal strip. Each arrow labelled approximately "SAR 865."',
          onScreenText: 'Alraedah Invest. Monthly.\n7% target.',
          motion: 'Money lands, arrows sweep outward month by month in a quick staggered sequence. Small "SAR 865" labels appear on each.',
          audio: 'Twelve compressed tick sounds, softly, as each arrow extends.',
          vo: 'Alraedah Invest pays you monthly. 7% target.'
        },
        {
          n: 4,
          time: '0:15 - 0:20',
          duration: 5,
          composition: 'The twelve monthly payouts collect into a "pocket" icon on the right. Running counter shows the accumulating total. Final label: "Cash: SAR 10,383."',
          onScreenText: 'Keep as cash: SAR 10,383.',
          motion: 'Coins drop one-by-one into the pocket, counter counts up to 10,383. Subtle gentle motion, not hurried.',
          audio: 'Soft counting sound, resolving on a single chime at 10,383.',
          vo: 'Keep the payouts as cash: about the same at year end.'
        },
        {
          n: 5,
          time: '0:20 - 0:26',
          duration: 6,
          composition: 'Each monthly payout visibly loops back into the platform via curved arrows. A big gold number rises above the bank\'s result: "SAR 10,723." Thin tick marks show it sitting above the earlier bank 10,400 for visual comparison.',
          onScreenText: 'Reinvest: SAR 10,723.\nMore than the bank.',
          motion: 'Coins loop back with curved arrows. Number counts up from 10,383 to 10,723. A gold horizontal line marks "bank 10,400" underneath for comparison, then the new number visibly rises above it.',
          audio: 'Upward chord progression as the number climbs; single resolve chord as it passes 10,400.',
          vo: 'Reinvest each one: SAR 10,723. More than the bank.'
        },
        {
          n: 6,
          time: '0:26 - 0:30',
          duration: 4,
          composition: 'Centered tagline in display weight. Alraedah Invest lockup beneath. URL small at the bottom.',
          onScreenText: 'Don\'t let your money sit still.\nalraedah.sa/invest',
          motion: 'Tagline writes on. Lockup fades in. URL reveals last.',
          audio: 'Closing brand-sting.',
          vo: 'Working every month. Don\'t let your money sit still.'
        }
      ],
      assets: [
        { id: 'C-01', frame: '1',   type: 'Component',      description: 'Padlocked box holding a money/SAR amount.', source: 'New', status: 'New' },
        { id: 'C-02', frame: '1-2', type: 'Component',      description: 'Twelve-month calendar arc that sweeps around to a full year.', source: 'New', status: 'New' },
        { id: 'C-03', frame: '2',   type: 'Type treatment', description: 'Big navy number "SAR 10,400" with counter-up animation.', source: 'Design system', status: 'New' },
        { id: 'C-04', frame: '3',   type: 'Component',      description: 'Twelve-arrow monthly-payout sweep with tiny payout labels.', source: 'New', status: 'New' },
        { id: 'C-05', frame: '4',   type: 'Icon',           description: 'Pocket / wallet glyph for cash accumulation.', source: 'Shared with Video D', status: 'Adapt' },
        { id: 'C-06', frame: '4',   type: 'Animation',      description: 'Coin-drop accumulation with running counter.', source: 'Adapt from Video D frame 4', status: 'Adapt' },
        { id: 'C-07', frame: '5',   type: 'Animation',      description: 'Curved reinvest loop arrows, coins returning to the platform.', source: 'New motion cue', status: 'New' },
        { id: 'C-08', frame: '5',   type: 'Type treatment', description: 'Big gold number "SAR 10,723" rising above a reference "bank 10,400" line.', source: 'Design system', status: 'New' },
        { id: 'C-09', frame: '5',   type: 'Component',      description: 'Comparison reference line (the "bank 10,400" tick for the reinvest number to rise above).', source: 'New', status: 'New' },
        { id: 'C-10', frame: '6',   type: 'Type treatment', description: 'Closing tagline "Don\'t let your money sit still."', source: 'Design system', status: 'New' },
        { id: 'C-11', frame: 'all', type: 'Logo',           description: 'Alraedah Invest primary lockup.', source: 'assets/logos/alraedah-parent.png', status: 'Existing' },
        { id: 'C-12', frame: 'all', type: 'Audio VO',       description: 'English voiceover, same register as Videos A and B.', source: 'VO studio', status: 'Commission' },
        { id: 'C-13', frame: 'all', type: 'Audio SFX',      description: 'Sound design: lock click (×2), tiny ticks (×12), coin chime, upward chord, closing sting.', source: 'Studio', status: 'Commission' },
        { id: 'C-14', frame: 'all', type: 'Audio bed',      description: 'Music bed consistent with the other three videos.', source: 'Licensed library', status: 'Commission' }
      ]
    },

    {
      id: 'd',
      code: 'D',
      title: 'How to invest in 3 steps',
      synopsis: 'Walk through the product flow in three literal steps: register with Nafath, pick this week\'s opportunity, receive monthly payouts.',
      runtime: 30,
      status: 'done',
      audience: 'Investor at the consideration stage, close to converting, who needs to see the actual flow.',
      script: {
        vo: 'Three steps on Alraedah Invest.\nOne. Open your account. Nafath verification takes minutes.\nTwo. Pick this week\'s opportunity. Return, tenor, progress, all shown upfront.\nThree. Each month, your capital plus target return is distributed to you.\nReinvest or withdraw. From SAR 1,000. alraedah.sa/invest.',
        wordCount: 68
      },
      frames: [
        {
          n: 1,
          time: '0:00 - 0:04',
          duration: 4,
          composition: 'Full-bleed blue background. Title type centered, weight bold, navy against cyan tint. Small gold accent dot below the line.',
          onScreenText: 'Three steps on\nAlraedah Invest.',
          motion: 'Title fades in word by word over 1.2s. Accent dot draws in last.',
          audio: 'Gentle brand-sting chord, soft reverb tail.',
          vo: 'Three steps on Alraedah Invest.'
        },
        {
          n: 2,
          time: '0:04 - 0:11',
          duration: 7,
          composition: 'Split screen. Left 40%: oversized numeral "1" in gold. Right 60%: label "Open your account" + Nafath identity mark lockup + small stopwatch icon.',
          onScreenText: '1. Register.\nNafath verification',
          motion: 'Numeral 1 writes on over 0.4s. Nafath lockup fades in at +0.6s. Stopwatch ticks once. Subtle scale-in on the label type.',
          audio: 'Single soft UI click on the stopwatch tick.',
          vo: 'One. Open your account. Nafath verification takes minutes.'
        },
        {
          n: 3,
          time: '0:11 - 0:19',
          duration: 8,
          composition: 'Centered opportunity-card mockup against a light tinted surface. Card shows three KPI fields stacked: target %, tenor, funded progress bar. "2" numeral floats top-left of the card in gold.',
          onScreenText: '2. Pick.\nThis week\'s opportunity.',
          motion: 'Card slides up from below over 0.5s. A gold highlight pulse travels across the three KPI rows in sequence (target % first, then tenor, then progress).',
          audio: 'Three soft pulse-pop sounds as each KPI highlights.',
          vo: 'Two. Pick this week\'s opportunity. Return, tenor, progress, all shown upfront.'
        },
        {
          n: 4,
          time: '0:19 - 0:26',
          duration: 7,
          composition: 'Month strip across the bottom third of the frame (12 small month markers). Wallet icon on the right. A numeral "3" sits top-left in gold.',
          onScreenText: '3. Receive.\nMonthly distributions.',
          motion: 'Three coin glyphs drop from the month strip into the wallet, one per second, starting at 0:20. Wallet glyph gently pulses on each arrival.',
          audio: 'Three soft coin-arrival chimes, one per drop.',
          vo: 'Three. Each month, your capital plus target return is distributed to you.'
        },
        {
          n: 5,
          time: '0:26 - 0:30',
          duration: 4,
          composition: 'Centered Alraedah Invest lockup on a deep navy ground with subtle brand pattern. Beneath the lockup: small line "From SAR 1,000" and the URL "alraedah.sa/invest" in a lighter weight.',
          onScreenText: 'alraedah.sa/invest\nFrom SAR 1,000',
          motion: 'Lockup fades in at 0:26, URL reveals 0.3s later, the "From SAR 1,000" line last. Gentle brand-pattern parallax in the background.',
          audio: 'Brand-sting close, matching the opening chord an octave down.',
          vo: 'Reinvest or withdraw. From SAR 1,000. alraedah.sa/invest.'
        }
      ],
      assets: [
        { id: 'D-01', frame: '1',   type: 'Type treatment', description: 'Title card typography "Three steps on Alraedah Invest." in the brand display weight, with gold accent dot.', source: 'Design system', status: 'New' },
        { id: 'D-02', frame: 'all', type: 'Logo',           description: 'Alraedah Invest primary lockup, for the closing frame and for subtle use as a watermark.',                  source: 'assets/logos/alraedah-parent.png', status: 'Existing' },
        { id: 'D-03', frame: '2',   type: 'Logo (external)', description: 'Nafath identity service mark, at an approved scale.',                                                       source: 'Nafath brand kit (license to confirm)', status: 'License check' },
        { id: 'D-04', frame: '2',   type: 'Icon',           description: 'Stopwatch or timer icon, 2-pixel stroke, rounded joins, brand-friendly.',                                 source: 'Design system icon library', status: 'New' },
        { id: 'D-05', frame: '3',   type: 'Component mock', description: 'Simplified opportunity card showing three KPI rows: target %, tenor, progress bar.',                      source: 'Adapt from B1 landing-page opportunity card', status: 'Adapt' },
        { id: 'D-06', frame: '3',   type: 'Animation',      description: 'Gold highlight-pulse that travels across the three KPI rows in sequence, ~0.4s per row.',                 source: 'New motion cue', status: 'New' },
        { id: 'D-07', frame: '4',   type: 'Icon',           description: 'Wallet glyph, 2-pixel stroke.',                                                                             source: 'Design system icon library', status: 'New' },
        { id: 'D-08', frame: '4',   type: 'Animation',      description: 'Coin-drop sequence, three coins animating from the month strip into the wallet, one per second.',           source: 'New motion cue', status: 'New' },
        { id: 'D-09', frame: '4',   type: 'Component',      description: 'Twelve-month strip, simple tick marker for each month along a horizontal rule.',                          source: 'New', status: 'New' },
        { id: 'D-10', frame: '5',   type: 'Type treatment', description: 'Closing URL "alraedah.sa/invest" and minimum-amount line "From SAR 1,000" in brand display weight.',        source: 'Design system', status: 'New' },
        { id: 'D-11', frame: 'all', type: 'Audio VO',       description: 'English voiceover recording, Saudi-neutral delivery, warm and confident, 30 seconds.',                     source: 'VO studio', status: 'Commission' },
        { id: 'D-12', frame: 'all', type: 'Audio SFX',      description: 'Sound design: opening brand sting, one UI click (frame 2), three pulse-pops (frame 3), three coin chimes (frame 4), closing sting.', source: 'Studio or licensed library', status: 'Commission' },
        { id: 'D-13', frame: 'all', type: 'Audio bed',      description: 'Ambient music bed, low volume, warm, approximately 30 seconds with breath room for the VO.',                source: 'Licensed music library', status: 'Commission' }
      ]
    }

  ]
};
