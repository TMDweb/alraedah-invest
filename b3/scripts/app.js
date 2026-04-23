/* ==========================================================================
   Alraedah Invest, B3 Copy Reference, app
   Tabbed UI. One phase visible at a time. Language filter. Populate toggle.
   Copy-to-clipboard per form.
   ========================================================================== */

(function () {
  'use strict';

  const { phases, sample } = window.AInvestB3Copy;

  /** Replace {{token}} markers with sample values (or keep visible if off). */
  function applyTokens(text, populated, lang) {
    if (!populated) return text;
    const suffix = lang === 'ar' ? '_ar' : '';
    return text.replace(/\{\{(\w+)\}\}/g, (_, name) => {
      const key = name + suffix;
      return sample[key] != null ? sample[key] : (sample[name] != null ? sample[name] : '{{' + name + '}}');
    });
  }

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function highlightTokens(escaped) {
    return escaped.replace(/\{\{(\w+)\}\}/g, '<span class="token">{{$1}}</span>');
  }

  function prepareText(text, populated, lang) {
    const withVars = applyTokens(text, populated, lang);
    const escaped = escapeHTML(withVars);
    return populated ? escaped : highlightTokens(escaped);
  }

  /** Plain text used for the copy-to-clipboard action. */
  function plainText(text, populated, lang) {
    return applyTokens(text, populated, lang);
  }

  function renderStandardBlock(standard, populated, lang) {
    const chipLine = standard.chips.map(c => prepareText(c, populated, lang)).join(' <span class="dot">·</span> ');
    const chipPlain = standard.chips.map(c => plainText(c, populated, lang)).join(' · ');
    const plainAll = [
      standard.kicker,
      standard.headline,
      standard.body,
      chipPlain,
      standard.cta
    ].map(t => plainText(t, populated, lang)).join('\n');
    return {
      html: `
        <p class="line line-kicker">${prepareText(standard.kicker, populated, lang)}</p>
        <p class="line line-headline">${prepareText(standard.headline, populated, lang)}</p>
        <p class="line line-body">${prepareText(standard.body, populated, lang)}</p>
        <p class="line line-chips">${chipLine}</p>
        <p class="line line-cta">${prepareText(standard.cta, populated, lang)}</p>
      `,
      plain: plainAll
    };
  }

  function renderProseBlock(text, populated, lang) {
    return {
      html: `<p class="line line-prose">${prepareText(text, populated, lang)}</p>`,
      plain: plainText(text, populated, lang)
    };
  }

  function renderLangBody(phase, form, lang, populated) {
    const copy = phase.copy[lang];
    if (form === 'standard') return renderStandardBlock(copy.standard, populated, lang);
    if (form === 'long')     return renderProseBlock(copy.long, populated, lang);
    if (form === 'short')    return renderProseBlock(copy.short, populated, lang);
  }

  const FORM_LABELS = {
    standard: { en: 'Standard form',           ar: 'الشكل القياسي' },
    long:     { en: 'LinkedIn long caption',   ar: 'نص مطوّل للّينكد إن' },
    short:    { en: 'Story short form',        ar: 'نص قصير للستوري' }
  };

  const LANG_LABELS = { en: 'English', ar: 'العربية' };

  /** Render one form card (standard/long/short) with its bilingual bodies. */
  function renderFormCard(phase, form, state) {
    const card = document.createElement('article');
    card.className = 'form-card';
    card.setAttribute('data-form', form);

    const parts = [];
    parts.push(`
      <header class="form-head">
        <h3>${FORM_LABELS[form].en}</h3>
        <button class="copy-btn" type="button" aria-label="Copy ${FORM_LABELS[form].en}">Copy</button>
      </header>
    `);

    const showEN = state.lang === 'en' || state.lang === 'both';
    const showAR = state.lang === 'ar' || state.lang === 'both';

    let plainParts = [];

    if (showEN) {
      const en = renderLangBody(phase, form, 'en', state.populated);
      parts.push(`
        <section class="lang-body lang-en">
          ${state.lang === 'both' ? '<p class="lang-head">English</p>' : ''}
          ${en.html}
        </section>
      `);
      plainParts.push(en.plain);
    }

    if (showAR) {
      const ar = renderLangBody(phase, form, 'ar', state.populated);
      parts.push(`
        <section class="lang-body lang-ar" dir="rtl" lang="ar">
          ${state.lang === 'both' ? '<p class="lang-head">العربية</p>' : ''}
          ${ar.html}
        </section>
      `);
      plainParts.push(ar.plain);
    }

    card.innerHTML = parts.join('');

    // Copy-to-clipboard hook
    const btn = card.querySelector('.copy-btn');
    btn.addEventListener('click', () => {
      const text = plainParts.join('\n\n');
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied';
        btn.classList.add('is-copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('is-copied'); }, 1600);
      }, () => {
        btn.textContent = 'Error';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
      });
    });

    return card;
  }

  /** Render the currently active phase panel. */
  function renderActivePanel(state) {
    const panel = document.getElementById('panel');
    const phase = phases[state.phaseIndex];

    const variablesHTML = phase.variables.length
      ? phase.variables.map(v => '<code>{{' + v + '}}</code>').join(' ')
      : '<span class="muted">No variable slots</span>';

    panel.innerHTML = `
      <header class="panel-head">
        <div class="panel-head-top">
          <p class="panel-kicker">Phase ${phase.number} · ${phase.timing}</p>
          <h2>${phase.name}</h2>
        </div>
        <div class="panel-meta">
          <span class="meta-label">Variables</span>
          <div class="meta-val">${variablesHTML}</div>
        </div>
      </header>
      <div class="forms-grid"></div>
    `;
    const grid = panel.querySelector('.forms-grid');
    ['standard', 'long', 'short'].forEach(form => {
      grid.appendChild(renderFormCard(phase, form, state));
    });
  }

  /** Refresh tab chips active state. */
  function refreshTabs(state) {
    document.querySelectorAll('.phase-tab').forEach((el, i) => {
      el.classList.toggle('is-active', i === state.phaseIndex);
      el.setAttribute('aria-selected', i === state.phaseIndex ? 'true' : 'false');
    });
  }

  /** Build phase tabs. */
  function buildTabs(state, onSelect) {
    const wrap = document.getElementById('phase-tabs');
    phases.forEach((phase, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'phase-tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', i === state.phaseIndex ? 'true' : 'false');
      btn.innerHTML = `
        <span class="phase-tab-num">${phase.number}</span>
        <span class="phase-tab-name">${phase.name}</span>
      `;
      btn.addEventListener('click', () => { state.phaseIndex = i; onSelect(); });
      wrap.appendChild(btn);
    });
  }

  function init() {
    const state = { phaseIndex: 0, lang: 'both', populated: true };
    const refresh = () => { refreshTabs(state); renderActivePanel(state); };

    buildTabs(state, refresh);
    refresh();

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lang = btn.dataset.langToggle;
        document.querySelectorAll('[data-lang-toggle]').forEach(b => b.classList.toggle('is-active', b === btn));
        renderActivePanel(state);
      });
    });

    document.querySelectorAll('[data-populated]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.populated = btn.dataset.populated === 'true';
        document.querySelectorAll('[data-populated]').forEach(b => b.classList.toggle('is-active', b === btn));
        renderActivePanel(state);
      });
    });

    // Keyboard navigation: left/right arrows switch phases when tabs have focus
    document.getElementById('phase-tabs').addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      state.phaseIndex = (state.phaseIndex + dir + phases.length) % phases.length;
      refresh();
      document.querySelectorAll('.phase-tab')[state.phaseIndex].focus();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
