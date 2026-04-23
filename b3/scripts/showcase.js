/* ==========================================================================
   Alraedah Invest, B3 Opportunity Templates, showcase controller
   Grid of 35 variants, filterable by phase and channel, with a detail modal.
   ========================================================================== */

(function () {
  'use strict';

  const { channels, phases, sample } = window.AInvestB3;

  /** Fill either tokens-visible mode (show {{amount}} literally) or populated
   *  mode (replace with sample values). Used by the "Show populated" toggle. */
  function applyTokens(text, populated, lang) {
    if (!populated) {
      // Mark variable tokens in a span so CSS can colour them gold.
      return text.replace(/\{\{(\w+)\}\}/g, '<span class="tv-var">{{$1}}</span>');
    }
    const suffix = lang === 'ar' ? '_ar' : '';
    return text.replace(/\{\{(\w+)\}\}/g, (_, name) => {
      const arKey = name + suffix;
      return sample[arKey] != null ? sample[arKey] : (sample[name] != null ? sample[name] : '{{' + name + '}}');
    });
  }

  function applyChips(chips, populated, lang) {
    return chips.map(c => applyTokens(c, populated, lang));
  }

  function renderVariant(phase, channel, opts) {
    opts = opts || {};
    const lang = opts.lang || 'en';
    const populated = !!opts.populated;
    const copy = phase.copy[lang];
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    const headline = applyTokens(copy.headline.replace(/\n/g, '<br>'), populated, lang);
    const body     = applyTokens(copy.body, populated, lang);
    const kicker   = applyTokens(copy.kicker, populated, lang);
    const cta      = applyTokens(copy.cta, populated, lang);
    const chips    = applyChips(copy.chips, populated, lang);

    const tv = document.createElement('div');
    tv.className = 'tv tv-' + channel.id + ' lang-' + lang;
    tv.setAttribute('dir', dir);
    tv.style.setProperty('--tv-w', channel.w + 'px');
    tv.style.setProperty('--tv-h', channel.h + 'px');

    tv.innerHTML = `
      <div class="tv-bg-pattern" aria-hidden="true"></div>
      <header class="tv-header">
        <img class="tv-logo" src="assets/logos/alraedah-parent.png" alt="Alraedah" />
        <span class="tv-kicker">${kicker}</span>
      </header>
      <div class="tv-body">
        <h1 class="tv-headline">${headline}</h1>
        <p class="tv-lede">${body}</p>
        <ul class="tv-chips">
          ${chips.map(c => '<li>' + c + '</li>').join('')}
        </ul>
        <div class="tv-cta">${cta}</div>
      </div>
      <footer class="tv-footer">
        <span>alraedah.sa/invest</span>
        <span class="tv-sama">${lang === 'ar' ? 'خاضعة لرقابة البنك المركزي السعودي' : 'Licensed by SAMA'}</span>
      </footer>
    `;
    return tv;
  }

  /** Render the grid at current filter state. */
  function renderGrid(state) {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const visible = [];
    phases.forEach(phase => {
      if (state.phaseFilter !== 'all' && phase.id !== state.phaseFilter) return;
      channels.forEach(channel => {
        if (state.channelFilter !== 'all' && channel.id !== state.channelFilter) return;
        visible.push({ phase, channel });
      });
    });

    document.getElementById('count').textContent = visible.length + ' variant' + (visible.length === 1 ? '' : 's');

    visible.forEach(({ phase, channel }) => {
      const cell = document.createElement('article');
      cell.className = 'grid-cell';

      const meta = document.createElement('div');
      meta.className = 'grid-cell-meta';
      meta.innerHTML = `
        <span class="grid-phase">Phase ${phase.number}. ${phase.name}</span>
        <span class="grid-channel">${channel.name} · ${channel.ratio}</span>
      `;

      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'grid-thumb grid-thumb-' + channel.id;

      const tv = renderVariant(phase, channel, { lang: state.lang, populated: state.populated });
      thumbWrap.appendChild(tv);

      cell.appendChild(meta);
      cell.appendChild(thumbWrap);

      // Click thumbnail to open detail modal at full size
      cell.addEventListener('click', () => openDetail(phase, channel, state));
      grid.appendChild(cell);
    });
  }

  /** Open the detail modal showing the variant at actual pixel size. */
  function openDetail(phase, channel, state) {
    const modal = document.getElementById('modal');
    const stage = document.getElementById('modal-stage');
    const info  = document.getElementById('modal-info');

    stage.innerHTML = '';
    const tv = renderVariant(phase, channel, { lang: state.lang, populated: state.populated });
    stage.appendChild(tv);

    const copy = phase.copy[state.lang];
    const tokens = (copy.headline + ' ' + copy.body + ' ' + copy.cta + ' ' + copy.chips.join(' '))
      .match(/\{\{\w+\}\}/g) || [];
    const uniq = [...new Set(tokens)];

    info.innerHTML = `
      <h2>Phase ${phase.number}. ${phase.name}</h2>
      <p class="modal-meta"><strong>${channel.name}</strong> · ${channel.ratio} · Language: ${state.lang === 'ar' ? 'Arabic' : 'English'}</p>
      <p class="modal-meta"><strong>Timing:</strong> ${phase.timing}</p>
      <h3>Copy</h3>
      <dl>
        <dt>Kicker</dt><dd dir="${state.lang === 'ar' ? 'rtl' : 'ltr'}">${copy.kicker}</dd>
        <dt>Headline</dt><dd dir="${state.lang === 'ar' ? 'rtl' : 'ltr'}">${copy.headline.replace(/\n/g, ' / ')}</dd>
        <dt>Body</dt><dd dir="${state.lang === 'ar' ? 'rtl' : 'ltr'}">${copy.body}</dd>
        <dt>Chips</dt><dd dir="${state.lang === 'ar' ? 'rtl' : 'ltr'}">${copy.chips.join(' · ')}</dd>
        <dt>CTA</dt><dd dir="${state.lang === 'ar' ? 'rtl' : 'ltr'}">${copy.cta}</dd>
      </dl>
      ${uniq.length ? `<h3>Variable slots</h3><ul class="modal-vars">${uniq.map(t => '<li><code>' + t + '</code></li>').join('')}</ul>` : ''}
    `;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modal').classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /** Filter bar. */
  function buildFilters(state, onChange) {
    const phaseBar = document.getElementById('phase-filter');
    const channelBar = document.getElementById('channel-filter');

    function chip(label, active, onClick) {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'filter-chip' + (active ? ' is-active' : '');
      el.textContent = label;
      el.addEventListener('click', onClick);
      return el;
    }

    phaseBar.appendChild(chip('All phases', state.phaseFilter === 'all', () => { state.phaseFilter = 'all'; onChange(); }));
    phases.forEach(p => {
      phaseBar.appendChild(chip(p.number + '. ' + p.name, state.phaseFilter === p.id, () => { state.phaseFilter = p.id; onChange(); }));
    });

    channelBar.appendChild(chip('All channels', state.channelFilter === 'all', () => { state.channelFilter = 'all'; onChange(); }));
    channels.forEach(c => {
      channelBar.appendChild(chip(c.name, state.channelFilter === c.id, () => { state.channelFilter = c.id; onChange(); }));
    });
  }

  function refreshFilters(state) {
    document.querySelectorAll('#phase-filter .filter-chip').forEach((el, i) => {
      const id = i === 0 ? 'all' : phases[i - 1].id;
      el.classList.toggle('is-active', id === state.phaseFilter);
    });
    document.querySelectorAll('#channel-filter .filter-chip').forEach((el, i) => {
      const id = i === 0 ? 'all' : channels[i - 1].id;
      el.classList.toggle('is-active', id === state.channelFilter);
    });
  }

  function init() {
    const state = { phaseFilter: 'all', channelFilter: 'all', lang: 'en', populated: false };
    const onChange = () => { refreshFilters(state); renderGrid(state); };

    buildFilters(state, onChange);
    renderGrid(state);

    document.getElementById('toggle-lang').addEventListener('click', (e) => {
      state.lang = state.lang === 'en' ? 'ar' : 'en';
      e.target.textContent = state.lang === 'en' ? 'Show Arabic' : 'Show English';
      document.documentElement.setAttribute('data-lang', state.lang);
      renderGrid(state);
    });
    document.getElementById('toggle-populated').addEventListener('click', (e) => {
      state.populated = !state.populated;
      e.target.textContent = state.populated ? 'Show variable slots' : 'Show populated sample';
      renderGrid(state);
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
