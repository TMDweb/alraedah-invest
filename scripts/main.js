/* ==========================================================================
   Alraedah Invest, Landing page orchestration
   Shared state + math. Pipeline-state toggle. Adaptive CTA. Tab switching.
   ========================================================================== */

(function () {
  'use strict';

  // ------- Shared financial state (single source of truth) -----------------
  window.AInvest = window.AInvest || {};
  const state = window.AInvest.state = {
    amount: 10000,
    tenorMonths: 12,
    effectiveRate: 0.07,   // Alraedah target return, 7% p.a. effective (IRR)
    bankFlatRate: 0.04,    // illustrative bank deposit flat rate
    subscribers: []        // modules that want to react to changes
  };

  // ------- Math primitives --------------------------------------------------
  // All three scenarios are driven by the same inputs so numbers stay consistent.

  /**
   * Monthly payment for an amortising loan/annuity that achieves a given
   * annual effective (IRR) rate over N months. Matches foundational doc's
   * SAR 865.27 per month on SAR 10,000 over 12 months at 7%.
   */
  function monthlyPayment(principal, annualRate, months) {
    const r = annualRate / 12;
    if (r === 0) return principal / months;
    return principal * (r / (1 - Math.pow(1 + r, -months)));
  }

  /** Bank deposit: flat rate, lump sum at end of term. */
  function bankFlatEnd(principal, flatRate, months) {
    return principal * (1 + flatRate * months / 12);
  }

  /** Alraedah, no reinvest: total cash received across all months. */
  function noReinvestTotal(principal, annualRate, months) {
    return monthlyPayment(principal, annualRate, months) * months;
  }

  /**
   * Alraedah with reinvest: annuity future value at the effective rate.
   * Each monthly payout is reinvested and earns for the remaining months.
   * Matches foundational doc's SAR 10,722.93 on SAR 10,000 at 7% over 12 months.
   */
  function reinvestFutureValue(principal, annualRate, months) {
    const P = monthlyPayment(principal, annualRate, months);
    const r = annualRate / 12;
    if (r === 0) return P * months;
    return P * (Math.pow(1 + r, months) - 1) / r;
  }

  /** Month-by-month series for all three scenarios. */
  function monthlySeries(principal, annualRate, flatRate, months) {
    const P = monthlyPayment(principal, annualRate, months);
    const r = annualRate / 12;
    const series = [];
    let reinvPortfolio = 0;

    for (let m = 1; m <= months; m++) {
      // bank: SAR 0 until month N, then lump sum
      const bank = (m === months) ? bankFlatEnd(principal, flatRate, months) : 0;
      // no reinvest: cumulative payouts
      const noReinv = P * m;
      // reinvest: previous portfolio compounds one month, then this month's payout is added
      reinvPortfolio = reinvPortfolio * (1 + r) + P;
      series.push({ month: m, bank, noReinv, reinv: reinvPortfolio, payout: P });
    }
    return series;
  }

  // Expose math on window.AInvest so tools can call them.
  window.AInvest.math = {
    monthlyPayment,
    bankFlatEnd,
    noReinvestTotal,
    reinvestFutureValue,
    monthlySeries
  };

  // ------- Formatting helpers ---------------------------------------------
  function fmtSAR(n, withSymbol) {
    const rounded = Math.round(n);
    const str = rounded.toLocaleString('en-US');
    return withSymbol === false ? str : 'SAR ' + str;
  }
  function fmtShortSAR(n) {
    if (Math.abs(n) >= 1000000) return 'SAR ' + (n / 1000000).toFixed(2) + 'M';
    if (Math.abs(n) >= 1000) return 'SAR ' + (n / 1000).toFixed(0) + 'k';
    return 'SAR ' + Math.round(n);
  }
  window.AInvest.fmt = { fmtSAR, fmtShortSAR };

  // ------- Pub/sub for state changes --------------------------------------
  window.AInvest.onStateChange = function (fn) {
    state.subscribers.push(fn);
  };
  window.AInvest.notify = function () {
    for (const fn of state.subscribers) {
      try { fn(state); } catch (e) { console.error('subscriber error', e); }
    }
  };

  // ------- Pipeline-state toggle (design review toolbar) -------------------
  function setPipelineState(which) {
    // Hero CTAs
    document.querySelectorAll('[data-cta-live], [data-cta-empty], [data-cta-between]').forEach(el => el.classList.add('is-hidden'));
    document.querySelectorAll('[data-cta-' + which + ']').forEach(el => el.classList.remove('is-hidden'));

    // Hero card + opportunities section state blocks
    document.querySelectorAll('[data-state-live], [data-state-empty], [data-state-between]').forEach(el => el.classList.add('is-hidden'));
    document.querySelectorAll('[data-state-' + which + ']').forEach(el => el.classList.remove('is-hidden'));

    // State toolbar buttons
    document.querySelectorAll('.state-btn').forEach(b => b.classList.toggle('is-active', b.dataset.state === which));

    // Header CTA label
    const navCta = document.getElementById('nav-cta');
    if (navCta) {
      if (which === 'live') navCta.textContent = 'See open opportunities';
      else if (which === 'empty') navCta.textContent = 'Get notified';
      else if (which === 'between') navCta.textContent = 'Get notified';
    }
  }

  // ------- Tools tabs ------------------------------------------------------
  function setToolTab(which) {
    document.querySelectorAll('.tool-tab').forEach(t => {
      const on = t.dataset.tool === which;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('.tool-panel').forEach(p => {
      p.classList.toggle('is-hidden', p.dataset.tool !== which);
    });
    // Redraw canvas-based tools when becoming visible
    if (which === 'graph' && window.AInvest.redrawGraph) window.AInvest.redrawGraph();
  }

  // ------- Smooth scroll for anchor links ----------------------------------
  function smoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const headerH = document.querySelector('.site-header').offsetHeight + 8;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // ------- Init -----------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    // Pipeline state toolbar
    document.querySelectorAll('.state-btn').forEach(btn => {
      btn.addEventListener('click', () => setPipelineState(btn.dataset.state));
    });
    setPipelineState('live');

    // Tool tabs
    document.querySelectorAll('.tool-tab').forEach(tab => {
      tab.addEventListener('click', () => setToolTab(tab.dataset.tool));
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', smoothScroll));

    // First computation cycle; tools subscribe in their own init and will render.
    window.AInvest.notify();
  });
})();
