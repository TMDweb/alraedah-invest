/* ==========================================================================
   Alraedah Invest, B3 Opportunity Templates, data
   Seven lifecycle phases. Copy is bilingual (English + Arabic).
   Variable tokens stay visible in the rendered output (styled in gold).
   ==========================================================================
   Variable tokens used across phases:
     {{category}}, {{city}}, {{target_return}}, {{tenor}},
     {{target_raise}}, {{funded_pct}}, {{closes_in}},
     {{investor_count}}, {{funded_hours}}, {{next_open_day}},
     {{open_day}}, {{open_time}}, {{opportunity_name}}
   ========================================================================== */

window.AInvestB3 = window.AInvestB3 || {};

window.AInvestB3.channels = [
  { id: 'li-feed',    name: 'LinkedIn feed',    w: 1200, h: 628,   ratio: '1200 × 628 (1.91:1)' },
  { id: 'li-square',  name: 'LinkedIn square',  w: 1080, h: 1080,  ratio: '1080 × 1080 (1:1)' },
  { id: 'x-feed',     name: 'X (Twitter)',      w: 1600, h: 900,   ratio: '1600 × 900 (1.78:1)' },
  { id: 'ig-feed',    name: 'Instagram feed',   w: 1080, h: 1440,  ratio: '1080 × 1440 (4:5)' },
  { id: 'ig-story',   name: 'Instagram story',  w: 1080, h: 1920,  ratio: '1080 × 1920 (9:16)' }
];

window.AInvestB3.phases = [
  {
    id: 'coming-soon-generic',
    number: 1,
    name: 'Coming soon, generic',
    timing: 'T minus 5 to 3 days',
    copy: {
      en: {
        kicker:    'Coming soon',
        headline:  'A new opportunity\nthis week.',
        body:      'A new SME financing opportunity launches on Alraedah Invest in the coming days.',
        chips:     ['From SAR 1,000', 'Weekly cadence'],
        cta:       'Top up your wallet'
      },
      ar: {
        kicker:    'قريباً',
        headline:  'فرصة استثمارية\nجديدة هذا الأسبوع',
        body:      'نعلن قريباً عن طرح فرصة استثمارية جديدة على منصة الرائدة إنڤست.',
        chips:     ['تبدأ من ١,٠٠٠ ريال', 'فرصة كل أسبوع'],
        cta:       'اشحن محفظتك'
      }
    }
  },
  {
    id: 'coming-soon-details',
    number: 2,
    name: 'Coming soon, with details',
    timing: 'T minus 2 to 1 days',
    copy: {
      en: {
        kicker:    'Coming soon',
        headline:  '{{category}}, {{city}}.',
        body:      'Next opportunity on Alraedah Invest.',
        chips:     ['{{target_return}}% target p.a.', '{{tenor}} months', '{{target_raise}} target'],
        cta:       'Get notified'
      },
      ar: {
        kicker:    'قريباً',
        headline:  '{{category}}، {{city}}',
        body:      'الفرصة القادمة على منصة الرائدة إنڤست.',
        chips:     ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'المستهدف {{target_raise}}'],
        cta:       'فعّل التنبيهات'
      }
    }
  },
  {
    id: 'launching-tomorrow-generic',
    number: 3,
    name: 'Launching tomorrow, generic',
    timing: 'T minus 1 day',
    copy: {
      en: {
        kicker:    'Tomorrow',
        headline:  'A new opportunity\nopens tomorrow.',
        body:      'Opportunities typically fund within 24 hours. Top up your wallet so you are ready.',
        chips:     ['Opens {{open_time}}', 'From SAR 1,000'],
        cta:       'Top up now'
      },
      ar: {
        kicker:    'غداً',
        headline:  'غداً يُطرح استثمار\nجديد على المنصة.',
        body:      'الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح. اشحن محفظتك اليوم.',
        chips:     ['الطرح الساعة {{open_time}}', 'تبدأ من ١,٠٠٠ ريال'],
        cta:       'اشحن محفظتك'
      }
    }
  },
  {
    id: 'launching-tomorrow-details',
    number: 4,
    name: 'Launching tomorrow, with details',
    timing: 'T minus 1 day, last push',
    copy: {
      en: {
        kicker:    'Tomorrow at {{open_time}}',
        headline:  '{{category}}, {{city}}.',
        body:      'Opens tomorrow on Alraedah Invest. Alraedah co-invests 25% alongside you.',
        chips:     ['{{target_return}}% target p.a.', '{{tenor}} months', '{{target_raise}} target'],
        cta:       'Top up and be ready'
      },
      ar: {
        kicker:    'غداً الساعة {{open_time}}',
        headline:  '{{category}}، {{city}}',
        body:      'تُطرح غداً على منصة الرائدة إنڤست. الرائدة تستثمر بنسبة ٢٥٪ معك.',
        chips:     ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'المستهدف {{target_raise}}'],
        cta:       'اشحن محفظتك'
      }
    }
  },
  {
    id: 'launched-generic',
    number: 5,
    name: 'Launched, generic',
    timing: 'T = 0, opportunity just live',
    copy: {
      en: {
        kicker:    'Open now',
        headline:  'A new opportunity\nis live.',
        body:      'Invest from SAR 1,000. Monthly payouts start next month.',
        chips:     ['Open now', 'From SAR 1,000'],
        cta:       'See the opportunity'
      },
      ar: {
        kicker:    'متاحة الآن',
        headline:  'فرصة استثمارية\nمفتوحة للاكتتاب.',
        body:      'استثمر من ١,٠٠٠ ريال. التوزيعات الشهرية تبدأ الشهر القادم.',
        chips:     ['متاحة الآن', 'تبدأ من ١,٠٠٠ ريال'],
        cta:       'استعرض الفرصة'
      }
    }
  },
  {
    id: 'launched-details',
    number: 6,
    name: 'Launched, with details',
    timing: 'T = 0 to T + 24h, primary conversion post',
    copy: {
      en: {
        kicker:    'Open now',
        headline:  '{{category}}, {{city}}.',
        body:      'Underwritten by Alraedah. Alraedah co-invests 25% alongside you.',
        chips:     ['{{target_return}}% target p.a.', '{{tenor}} months', '{{funded_pct}}% funded'],
        cta:       'Invest now'
      },
      ar: {
        kicker:    'متاحة الآن',
        headline:  '{{category}}، {{city}}',
        body:      'مدروسة من الرائدة. الرائدة تستثمر بنسبة ٢٥٪ معك.',
        chips:     ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'تم تغطية {{funded_pct}}٪'],
        cta:       'استثمر الآن'
      }
    }
  },
  {
    id: 'fully-funded',
    number: 7,
    name: 'Fully funded celebration',
    timing: 'Post-funding, within 2h of full funding',
    copy: {
      en: {
        kicker:    'Fully funded',
        headline:  '{{opportunity_name}}\nis funded.',
        body:      '{{investor_count}} investors, {{funded_hours}} hours. Monthly distributions start next month.',
        chips:     ['{{target_return}}% target', '{{tenor}} months', 'Next opens {{next_open_day}}'],
        cta:       'Be first on the next one'
      },
      ar: {
        kicker:    'تم التغطية',
        headline:  'تم تغطية فرصة\n{{opportunity_name}}',
        body:      '{{investor_count}} مستثمر، خلال {{funded_hours}} ساعة. التوزيعات الشهرية تبدأ الشهر القادم.',
        chips:     ['العائد المستهدف {{target_return}}٪', 'مدة {{tenor}} شهر', 'الفرصة القادمة {{next_open_day}}'],
        cta:       'سجّل للفرصة القادمة'
      }
    }
  }
];

/* Sample values, used by the showcase to show what a populated variant
   looks like. The demo "fills in" these. Real production replaces at CMS. */
window.AInvestB3.sample = {
  category:        'POS financing',
  category_ar:     'تمويل نقاط البيع',
  city:            'Jeddah',
  city_ar:         'جدة',
  target_return:   '7.8',
  tenor:           '24',
  target_raise:    'SAR 1.2M',
  target_raise_ar: '١٫٢ مليون ريال',
  funded_pct:      '62',
  closes_in:       '3 days',
  closes_in_ar:    '٣ أيام',
  investor_count:  '38',
  investor_count_ar:'٣٨',
  funded_hours:    '14',
  funded_hours_ar: '١٤',
  next_open_day:   'Sunday',
  next_open_day_ar:'الأحد',
  open_day:        'Sunday',
  open_day_ar:     'الأحد',
  open_time:       '10:00 KSA',
  open_time_ar:    '١٠:٠٠ ص',
  opportunity_name:'POS Jeddah 24-mo',
  opportunity_name_ar:'نقاط بيع جدة ٢٤ شهراً'
};
