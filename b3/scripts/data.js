/* ==========================================================================
   Alraedah Invest, B3 Copy data
   Seven phases, three forms per phase (standard / long / short), bilingual.
   Single source of truth for the copy reference app.

   Writing direction: lead with the velocity-of-money thesis and the invitation
   to invest; the specific opportunity's category and city stay off the social
   post to avoid overlap with Alraedah parent's POS business.
   ========================================================================== */

window.AInvestB3Copy = {
  sample: {
    target_return:    '7.8',              target_return_ar:    '٧٫٨',
    tenor:            '24',               tenor_ar:            '٢٤',
    funded_pct:       '62',               funded_pct_ar:       '٦٢',
    open_time:        '10:00 KSA',        open_time_ar:        '١٠:٠٠ صباحاً',
    next_open_day:    'Sunday',           next_open_day_ar:    'الأحد',
    investor_count:   '38',               investor_count_ar:   '٣٨',
    funded_hours:     '14',               funded_hours_ar:     '١٤'
  },

  phases: [
    {
      number: 1,
      name: 'Coming soon, generic',
      timing: 'T minus 5 to 3 days',
      variables: [],
      copy: {
        en: {
          standard: {
            kicker:   'Coming soon',
            headline: 'Don\'t let your money sit still.',
            body:     'A new investment opportunity opens on Alraedah Invest in the coming days.',
            chips:    ['From SAR 1,000', 'Monthly payouts'],
            cta:      'Top up your wallet'
          },
          long:  'Your money does not need a year to start working. A new Alraedah Invest opportunity opens in the coming days, underwritten in-house, with Alraedah co-investing up to 25% alongside you. Top up your wallet so you are ready when it opens. Opportunities typically fund within 24 hours.',
          short: 'Don\'t let your money sit still. A new opportunity this week.'
        },
        ar: {
          standard: {
            kicker:   'قريباً',
            headline: 'فلوسك تشتغل، لا تخلّيها ساكنة.',
            body:     'فرصة استثمارية جديدة على منصة الرائدة إنڤست خلال الأيام القادمة.',
            chips:    ['تبدأ من ١,٠٠٠ ريال', 'توزيعات شهرية'],
            cta:      'اشحن محفظتك'
          },
          long:  'فلوسك ما تحتاج سنة عشان تشتغل. فرصة استثمارية جديدة على منصة الرائدة إنڤست قريباً، بتحليل داخلي والرائدة تستثمر بنسبة تصل إلى ٢٥٪ معك. اشحن محفظتك اليوم لتكون جاهز عند الطرح. الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح.',
          short: 'فلوسك تشتغل، لا تخلّيها ساكنة. فرصة جديدة هذا الأسبوع.'
        }
      }
    },

    {
      number: 2,
      name: 'Coming soon, with details',
      timing: 'T minus 2 to 1 days',
      variables: ['target_return', 'tenor'],
      copy: {
        en: {
          standard: {
            kicker:   'Coming soon',
            headline: 'Your next opportunity is almost here.',
            body:     'Opens this week on Alraedah Invest.',
            chips:    ['{{target_return}}% target p.a.', '{{tenor}} months', 'From SAR 1,000'],
            cta:      'Get notified'
          },
          long:  'Your next Alraedah Invest opportunity is almost ready. Target {{target_return}}% p.a. over {{tenor}} months, underwritten in-house, with Alraedah co-investing 25%. Get notified the moment it opens: opportunities typically fund within 24 hours.',
          short: 'Coming this week: {{target_return}}% target · {{tenor}} months.'
        },
        ar: {
          standard: {
            kicker:   'قريباً',
            headline: 'فرصتك القادمة على بُعد أيام.',
            body:     'تُطرح هذا الأسبوع على منصة الرائدة إنڤست.',
            chips:    ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'تبدأ من ١,٠٠٠ ريال'],
            cta:      'فعّل التنبيهات'
          },
          long:  'فرصتك القادمة على منصة الرائدة إنڤست على بُعد أيام. عائد مستهدف {{target_return}}٪ سنوياً لمدة {{tenor}} شهر، بتحليل داخلي، والرائدة تستثمر بنسبة ٢٥٪ معك. فعّل التنبيهات لتعرف لحظة طرحها؛ معظم الفرص تتغطى خلال ٢٤ ساعة.',
          short: 'قريباً هذا الأسبوع: عائد {{target_return}}٪ · مدة {{tenor}} شهر.'
        }
      }
    },

    {
      number: 3,
      name: 'Launching tomorrow, generic',
      timing: 'T minus 1 day',
      variables: ['open_time'],
      copy: {
        en: {
          standard: {
            kicker:   'Tomorrow',
            headline: 'Your next opportunity opens tomorrow.',
            body:     'Opportunities typically fund within 24 hours. Top up your wallet so you are ready.',
            chips:    ['Opens {{open_time}}', 'From SAR 1,000'],
            cta:      'Top up now'
          },
          long:  'Heads up: a new Alraedah Invest opportunity opens tomorrow at {{open_time}}. Opportunities typically fund within 24 hours, so a topped-up wallet tonight is the difference between joining and missing it.',
          short: 'Tomorrow {{open_time}}. Top up now.'
        },
        ar: {
          standard: {
            kicker:   'غداً',
            headline: 'فرصتك الجديدة تُطرح غداً.',
            body:     'الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح. اشحن محفظتك اليوم لتكون جاهزاً.',
            chips:    ['الطرح الساعة {{open_time}}', 'تبدأ من ١,٠٠٠ ريال'],
            cta:      'اشحن محفظتك'
          },
          long:  'تنبيه: فرصة استثمارية جديدة تُطرح غداً على منصة الرائدة إنڤست الساعة {{open_time}}. الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح، فاشحن محفظتك الليلة لتكون ضمن أول المستثمرين.',
          short: 'غداً {{open_time}}. اشحن محفظتك.'
        }
      }
    },

    {
      number: 4,
      name: 'Launching tomorrow, with details',
      timing: 'T minus 1 day, final push',
      variables: ['open_time', 'target_return', 'tenor'],
      copy: {
        en: {
          standard: {
            kicker:   'Tomorrow at {{open_time}}',
            headline: 'Your money could start working tomorrow.',
            body:     'A new Alraedah Invest opportunity opens tomorrow. Alraedah co-invests 25% alongside you.',
            chips:    ['{{target_return}}% target p.a.', '{{tenor}} months', 'From SAR 1,000'],
            cta:      'Top up and be ready'
          },
          long:  'Tomorrow at {{open_time}}: a new Alraedah Invest opportunity opens. Target {{target_return}}% p.a. over {{tenor}} months. Underwritten in-house, with Alraedah co-investing 25%. Top up your wallet tonight to be first.',
          short: 'Tomorrow: {{target_return}}% target · {{tenor}} months.'
        },
        ar: {
          standard: {
            kicker:   'غداً الساعة {{open_time}}',
            headline: 'فلوسك ممكن تشتغل من بكرة.',
            body:     'فرصة استثمارية جديدة تُطرح غداً على منصة الرائدة إنڤست. الرائدة تستثمر بنسبة ٢٥٪ معك.',
            chips:    ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'تبدأ من ١,٠٠٠ ريال'],
            cta:      'اشحن محفظتك'
          },
          long:  'غداً الساعة {{open_time}}: فرصة استثمارية جديدة على منصة الرائدة إنڤست. عائد مستهدف {{target_return}}٪ سنوياً لمدة {{tenor}} شهر، بتحليل داخلي، والرائدة تستثمر بنسبة ٢٥٪. اشحن محفظتك الليلة لتكون ضمن الأوائل.',
          short: 'غداً: عائد {{target_return}}٪ · مدة {{tenor}} شهر.'
        }
      }
    },

    {
      number: 5,
      name: 'Launched, generic',
      timing: 'T = 0',
      variables: [],
      copy: {
        en: {
          standard: {
            kicker:   'Open now',
            headline: 'A new way to put your money to work.',
            body:     'Invest from SAR 1,000. Monthly payouts start next month.',
            chips:    ['Open now', 'Monthly payouts', 'From SAR 1,000'],
            cta:      'See the opportunity'
          },
          long:  'A new Alraedah Invest opportunity is open for investment right now. Invest from SAR 1,000 and monthly distributions begin next month. See the full opportunity page for target return, tenor, and funding progress.',
          short: 'Now open. Your money goes to work monthly.'
        },
        ar: {
          standard: {
            kicker:   'متاحة الآن',
            headline: 'فلوسك الحين تشتغل.',
            body:     'استثمر من ١,٠٠٠ ريال. التوزيعات الشهرية تبدأ الشهر القادم.',
            chips:    ['متاحة الآن', 'توزيعات شهرية', 'تبدأ من ١,٠٠٠ ريال'],
            cta:      'استعرض الفرصة'
          },
          long:  'فرصة استثمارية جديدة مفتوحة الآن على منصة الرائدة إنڤست. استثمر من ١,٠٠٠ ريال والتوزيعات الشهرية تبدأ الشهر القادم. استعرض صفحة الفرصة لمعرفة العائد المستهدف والمدة ونسبة التغطية.',
          short: 'متاحة الآن. فلوسك تشتغل شهرياً.'
        }
      }
    },

    {
      number: 6,
      name: 'Launched, with details',
      timing: 'T = 0 to T + 24h · primary conversion',
      variables: ['target_return', 'tenor', 'funded_pct'],
      copy: {
        en: {
          standard: {
            kicker:   'Open now',
            headline: 'Your next investment is live.',
            body:     'Underwritten by Alraedah. Monthly payouts for the next {{tenor}} months.',
            chips:    ['{{target_return}}% target p.a.', '{{funded_pct}}% funded', 'From SAR 1,000'],
            cta:      'Invest now'
          },
          long:  'A new Alraedah Invest opportunity is open for investment right now. Target {{target_return}}% p.a. over {{tenor}} months, underwritten in-house, with Alraedah co-investing 25%. Currently {{funded_pct}}% funded; most opportunities close within 24 hours of opening.',
          short: 'Open now: {{target_return}}% target · {{tenor}} months.'
        },
        ar: {
          standard: {
            kicker:   'متاحة الآن',
            headline: 'استثمارك القادم متاح الآن.',
            body:     'مدروسة من الرائدة. توزيعات شهرية على مدى {{tenor}} شهر القادمة.',
            chips:    ['عائد مستهدف {{target_return}}٪ سنوياً', 'تم تغطية {{funded_pct}}٪', 'تبدأ من ١,٠٠٠ ريال'],
            cta:      'استثمر الآن'
          },
          long:  'فرصة استثمارية جديدة مفتوحة الآن على منصة الرائدة إنڤست. عائد مستهدف {{target_return}}٪ سنوياً لمدة {{tenor}} شهر، بتحليل داخلي، والرائدة تستثمر بنسبة ٢٥٪. تم تغطية {{funded_pct}}٪ حالياً، وأغلب الفرص تتغطى خلال ٢٤ ساعة من الطرح.',
          short: 'متاحة الآن: عائد {{target_return}}٪ · مدة {{tenor}} شهر.'
        }
      }
    },

    {
      number: 7,
      name: 'Fully funded celebration',
      timing: 'Within 2 hours of full funding',
      variables: ['investor_count', 'funded_hours', 'target_return', 'tenor', 'next_open_day'],
      copy: {
        en: {
          standard: {
            kicker:   'Fully funded',
            headline: 'This week\'s opportunity is closed.',
            body:     '{{investor_count}} investors joined. Monthly distributions begin next month.',
            chips:    ['Funded in {{funded_hours}}h', '{{target_return}}% target', 'Next opens {{next_open_day}}'],
            cta:      'Be first on the next one'
          },
          long:  'This week\'s Alraedah Invest opportunity is fully funded. {{investor_count}} investors joined in {{funded_hours}} hours at a {{target_return}}% target over {{tenor}} months. Monthly distributions begin next month. The next opportunity opens {{next_open_day}}.',
          short: 'This week: funded in {{funded_hours}}h. Next opens {{next_open_day}}.'
        },
        ar: {
          standard: {
            kicker:   'تم التغطية',
            headline: 'فرصة هذا الأسبوع مغلقة.',
            body:     'انضم {{investor_count}} مستثمر. التوزيعات الشهرية تبدأ الشهر القادم.',
            chips:    ['غُطّيت خلال {{funded_hours}} ساعة', 'العائد المستهدف {{target_return}}٪', 'القادمة {{next_open_day}}'],
            cta:      'سجّل للفرصة القادمة'
          },
          long:  'فرصة هذا الأسبوع على منصة الرائدة إنڤست مغطاة بالكامل. انضم {{investor_count}} مستثمر خلال {{funded_hours}} ساعة بعائد مستهدف {{target_return}}٪ لمدة {{tenor}} شهر. التوزيعات الشهرية تبدأ الشهر القادم. الفرصة القادمة تفتح يوم {{next_open_day}}.',
          short: 'هذا الأسبوع: مغطاة خلال {{funded_hours}} ساعة. التالية {{next_open_day}}.'
        }
      }
    }
  ]
};
