/* ==========================================================================
   Alraedah Invest, B3 Copy data
   Seven phases, three forms per phase (standard / long / short), bilingual.
   Single source of truth for the copy reference app.
   ========================================================================== */

window.AInvestB3Copy = {
  sample: {
    category: 'POS financing',        category_ar: 'تمويل نقاط البيع',
    city: 'Jeddah',                   city_ar: 'جدة',
    target_return: '7.8',             target_return_ar: '٧٫٨',
    tenor: '24',                      tenor_ar: '٢٤',
    target_raise: 'SAR 1.2M',         target_raise_ar: '١٫٢ مليون ريال',
    funded_pct: '62',                 funded_pct_ar: '٦٢',
    open_time: '10:00 KSA',           open_time_ar: '١٠:٠٠ صباحاً',
    open_day: 'Sunday',               open_day_ar: 'الأحد',
    next_open_day: 'Sunday',          next_open_day_ar: 'الأحد',
    investor_count: '38',             investor_count_ar: '٣٨',
    funded_hours: '14',               funded_hours_ar: '١٤',
    opportunity_name: 'POS Jeddah 24-mo', opportunity_name_ar: 'نقاط بيع جدة ٢٤ شهراً'
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
            kicker: 'Coming soon',
            headline: 'A new opportunity this week.',
            body: 'A new SME financing opportunity launches on Alraedah Invest in the coming days.',
            chips: ['From SAR 1,000', 'Weekly cadence'],
            cta: 'Top up your wallet'
          },
          long: 'A new Alraedah Invest opportunity is in final prep for this week. Underwritten in-house by the same team that has been lending to Saudi SMEs for over a decade, with Alraedah co-investing up to 25%. Top up your wallet now so you are ready when it opens. Opportunities typically fund within 24 hours.',
          short: 'Coming soon. A new opportunity this week. Top up your wallet.'
        },
        ar: {
          standard: {
            kicker: 'قريباً',
            headline: 'فرصة استثمارية جديدة هذا الأسبوع',
            body: 'نعلن قريباً عن طرح فرصة استثمارية جديدة على منصة الرائدة إنڤست.',
            chips: ['تبدأ من ١,٠٠٠ ريال', 'فرصة كل أسبوع'],
            cta: 'اشحن محفظتك'
          },
          long: 'فرصة استثمارية جديدة قيد التجهيز على منصة الرائدة إنڤست هذا الأسبوع. مدروسة من نفس الفريق اللي يشتغل في تمويل المنشآت السعودية أكثر من عشر سنوات، والرائدة تستثمر بنسبة تصل إلى ٢٥٪. اشحن محفظتك اليوم لتكون جاهز عند الطرح. الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح.',
          short: 'قريباً. فرصة جديدة هذا الأسبوع. اشحن محفظتك.'
        }
      }
    },
    {
      number: 2,
      name: 'Coming soon, with details',
      timing: 'T minus 2 to 1 days',
      variables: ['category', 'city', 'target_return', 'tenor', 'target_raise'],
      copy: {
        en: {
          standard: {
            kicker: 'Coming soon',
            headline: '{{category}}, {{city}}.',
            body: 'Next opportunity on Alraedah Invest.',
            chips: ['{{target_return}}% target p.a.', '{{tenor}} months', '{{target_raise}} target'],
            cta: 'Get notified'
          },
          long: 'The next Alraedah Invest opportunity is {{category}} in {{city}}, with a {{target_return}}% target p.a. over {{tenor}} months, raising {{target_raise}}. Alraedah co-invests 25%. Get notified the moment it opens: opportunities typically fund within 24 hours.',
          short: 'Coming: {{category}}, {{city}}. {{target_return}}% target.'
        },
        ar: {
          standard: {
            kicker: 'قريباً',
            headline: '{{category}}، {{city}}',
            body: 'الفرصة القادمة على منصة الرائدة إنڤست.',
            chips: ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'المستهدف {{target_raise}}'],
            cta: 'فعّل التنبيهات'
          },
          long: 'الفرصة القادمة على منصة الرائدة إنڤست: {{category}}، {{city}}. بعائد مستهدف {{target_return}}٪ سنوياً، لمدة {{tenor}} شهر، والمستهدف {{target_raise}}. الرائدة تستثمر بنسبة ٢٥٪. فعّل التنبيهات لتعرف لحظة طرحها؛ معظم الفرص تتغطى خلال ٢٤ ساعة.',
          short: 'قريباً: {{category}}، {{city}}. عائد {{target_return}}٪.'
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
            kicker: 'Tomorrow',
            headline: 'A new opportunity opens tomorrow.',
            body: 'Opportunities typically fund within 24 hours. Top up your wallet so you are ready.',
            chips: ['Opens {{open_time}}', 'From SAR 1,000'],
            cta: 'Top up now'
          },
          long: 'Heads up: a new Alraedah Invest opportunity opens tomorrow at {{open_time}}. Opportunities typically fund within 24 hours, so a topped-up wallet tonight is the difference between joining and missing it.',
          short: 'Tomorrow {{open_time}}. Top up now.'
        },
        ar: {
          standard: {
            kicker: 'غداً',
            headline: 'غداً يُطرح استثمار جديد على المنصة',
            body: 'الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح. اشحن محفظتك اليوم لتكون جاهزاً.',
            chips: ['الطرح الساعة {{open_time}}', 'تبدأ من ١,٠٠٠ ريال'],
            cta: 'اشحن محفظتك'
          },
          long: 'تنبيه: فرصة استثمارية جديدة تُطرح غداً على منصة الرائدة إنڤست الساعة {{open_time}}. الفرص عادةً تتغطى خلال ٢٤ ساعة من الطرح، فاشحن محفظتك الليلة لتكون ضمن أول المستثمرين.',
          short: 'غداً {{open_time}}. اشحن محفظتك.'
        }
      }
    },
    {
      number: 4,
      name: 'Launching tomorrow, with details',
      timing: 'T minus 1 day, final push',
      variables: ['open_time', 'category', 'city', 'target_return', 'tenor', 'target_raise'],
      copy: {
        en: {
          standard: {
            kicker: 'Tomorrow at {{open_time}}',
            headline: '{{category}}, {{city}}.',
            body: 'Opens tomorrow on Alraedah Invest. Alraedah co-invests 25% alongside you.',
            chips: ['{{target_return}}% target p.a.', '{{tenor}} months', '{{target_raise}} target'],
            cta: 'Top up and be ready'
          },
          long: 'Tomorrow at {{open_time}}: {{category}} in {{city}} opens on Alraedah Invest. {{target_return}}% target p.a. over {{tenor}} months. Target raise {{target_raise}}. Alraedah co-invests 25%. Top up your wallet tonight to be first.',
          short: 'Tomorrow: {{category}}, {{city}}. {{target_return}}% target.'
        },
        ar: {
          standard: {
            kicker: 'غداً الساعة {{open_time}}',
            headline: '{{category}}، {{city}}',
            body: 'تُطرح غداً على منصة الرائدة إنڤست. الرائدة تستثمر بنسبة ٢٥٪ معك.',
            chips: ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'المستهدف {{target_raise}}'],
            cta: 'اشحن محفظتك'
          },
          long: 'غداً الساعة {{open_time}}: {{category}} في {{city}} تُطرح على منصة الرائدة إنڤست. عائد مستهدف {{target_return}}٪ سنوياً لمدة {{tenor}} شهر، والمستهدف {{target_raise}}. الرائدة تستثمر بنسبة ٢٥٪. اشحن محفظتك الليلة لتكون ضمن الأوائل.',
          short: 'غداً: {{category}}، {{city}}. {{target_return}}٪.'
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
            kicker: 'Open now',
            headline: 'A new opportunity is live.',
            body: 'Invest from SAR 1,000. Monthly payouts start next month.',
            chips: ['Open now', 'From SAR 1,000'],
            cta: 'See the opportunity'
          },
          long: 'A new Alraedah Invest opportunity is open for investment right now. Invest from SAR 1,000 and monthly distributions start next month. See the full opportunity page for target return, tenor, and funding progress.',
          short: 'Now open. From SAR 1,000.'
        },
        ar: {
          standard: {
            kicker: 'متاحة الآن',
            headline: 'فرصة استثمارية مفتوحة للاكتتاب',
            body: 'استثمر من ١,٠٠٠ ريال. التوزيعات الشهرية تبدأ الشهر القادم.',
            chips: ['متاحة الآن', 'تبدأ من ١,٠٠٠ ريال'],
            cta: 'استعرض الفرصة'
          },
          long: 'فرصة استثمارية جديدة مفتوحة الآن على منصة الرائدة إنڤست. استثمر من ١,٠٠٠ ريال والتوزيعات الشهرية تبدأ الشهر القادم. استعرض صفحة الفرصة لمعرفة العائد المستهدف والمدة ونسبة التغطية.',
          short: 'متاحة الآن. من ١,٠٠٠ ريال.'
        }
      }
    },
    {
      number: 6,
      name: 'Launched, with details',
      timing: 'T = 0 to T + 24h · primary conversion',
      variables: ['category', 'city', 'target_return', 'tenor', 'funded_pct'],
      copy: {
        en: {
          standard: {
            kicker: 'Open now',
            headline: '{{category}}, {{city}}.',
            body: 'Underwritten by Alraedah. Alraedah co-invests 25% alongside you.',
            chips: ['{{target_return}}% target p.a.', '{{tenor}} months', '{{funded_pct}}% funded'],
            cta: 'Invest now'
          },
          long: '{{category}} in {{city}} is now open on Alraedah Invest. {{target_return}}% target p.a. over {{tenor}} months. Underwritten in-house. Alraedah co-invests 25% in this opportunity. Currently {{funded_pct}}% funded; most opportunities close within 24 hours of opening.',
          short: 'Open: {{category}}, {{city}}. {{target_return}}% target.'
        },
        ar: {
          standard: {
            kicker: 'متاحة الآن',
            headline: '{{category}}، {{city}}',
            body: 'مدروسة من الرائدة. الرائدة تستثمر بنسبة ٢٥٪ معك.',
            chips: ['عائد مستهدف {{target_return}}٪ سنوياً', 'مدة {{tenor}} شهر', 'تم تغطية {{funded_pct}}٪'],
            cta: 'استثمر الآن'
          },
          long: '{{category}} في {{city}} متاحة الآن على منصة الرائدة إنڤست. عائد مستهدف {{target_return}}٪ سنوياً لمدة {{tenor}} شهر. مدروسة من فريقنا الداخلي، والرائدة تستثمر بنسبة ٢٥٪ في هذه الفرصة. تم تغطية {{funded_pct}}٪ حالياً، وأغلب الفرص تتغطى خلال ٢٤ ساعة من الطرح.',
          short: 'متاحة: {{category}}، {{city}}. {{target_return}}٪.'
        }
      }
    },
    {
      number: 7,
      name: 'Fully funded celebration',
      timing: 'Within 2 hours of full funding',
      variables: ['opportunity_name', 'investor_count', 'funded_hours', 'target_return', 'tenor', 'next_open_day'],
      copy: {
        en: {
          standard: {
            kicker: 'Fully funded',
            headline: '{{opportunity_name}} is funded.',
            body: '{{investor_count}} investors, {{funded_hours}} hours. Monthly distributions start next month.',
            chips: ['{{target_return}}% target', '{{tenor}} months', 'Next opens {{next_open_day}}'],
            cta: 'Be first on the next one'
          },
          long: '{{opportunity_name}} is fully funded. {{investor_count}} investors joined in {{funded_hours}} hours at a {{target_return}}% target over {{tenor}} months. Monthly distributions start next month. The next Alraedah Invest opportunity opens {{next_open_day}}.',
          short: '{{opportunity_name}}: funded. Next {{next_open_day}}.'
        },
        ar: {
          standard: {
            kicker: 'تم التغطية',
            headline: 'تم تغطية فرصة {{opportunity_name}}',
            body: '{{investor_count}} مستثمر، خلال {{funded_hours}} ساعة. التوزيعات الشهرية تبدأ الشهر القادم.',
            chips: ['العائد المستهدف {{target_return}}٪', 'مدة {{tenor}} شهر', 'الفرصة القادمة {{next_open_day}}'],
            cta: 'سجّل للفرصة القادمة'
          },
          long: 'تم تغطية فرصة {{opportunity_name}} بالكامل. {{investor_count}} مستثمر شاركوا خلال {{funded_hours}} ساعة بعائد مستهدف {{target_return}}٪ لمدة {{tenor}} شهر. التوزيعات الشهرية تبدأ الشهر القادم. الفرصة القادمة على الرائدة إنڤست تفتح يوم {{next_open_day}}.',
          short: '{{opportunity_name}}: مغطاة. التالية {{next_open_day}}.'
        }
      }
    }
  ]
};
