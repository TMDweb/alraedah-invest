/* ==========================================================================
   Alraedah Invest, B4 Explainer videos, data
   Three 30-second videos: A (what is debt crowdfunding), B (why Alraedah
   Invest), D (how to invest in 3 steps). Video C deferred.
   ========================================================================== */

window.AInvestB4 = {
  videos: [
    {
      id: 'a',
      code: 'A',
      title: 'What is debt crowdfunding',
      synopsis: 'Redirect the assumption that crowdfunding means donations or equity. Introduce debt crowdfunding as co-financing an SME loan that pays investors back monthly with a target return.',
      runtime: 30,
      status: 'coming-next',
      audience: 'Saudi retail investor who has heard the word "crowdfunding" and pictures a donation or a startup equity round.',
      script: null,
      frames: [],
      assets: []
    },

    {
      id: 'b',
      code: 'B',
      title: 'Why Alraedah Invest',
      synopsis: 'Three trust signals in sequence: ten-year underwriting pedigree, 25% co-investment alignment, SAMA and Shariah governance.',
      runtime: 30,
      status: 'coming-next',
      audience: 'Investor considering their options, wondering why this platform over another.',
      script: null,
      frames: [],
      assets: []
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
