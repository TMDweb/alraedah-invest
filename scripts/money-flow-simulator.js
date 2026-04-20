/* ==========================================================================
   Alraedah Invest, Money flow simulator (Tool 4)
   Animated side-by-side: Bank (locked) vs Alraedah (in pocket) vs Alraedah reinvested.
   Progresses month by month, ends with three outcome cards.
   ========================================================================== */

(function () {
  'use strict';

  let playing = false;
  let timer = null;

  function render(state, currentMonth, final) {
    const { fmtSAR } = window.AInvest.fmt;
    const series = window.AInvest.math.monthlySeries(
      state.amount, state.effectiveRate, state.bankFlatRate, state.tenorMonths
    );
    const total = state.tenorMonths;

    // Bank scene
    const bankFinalVal = series[total - 1].bank;
    const bankVal = currentMonth >= total ? bankFinalVal : 0;
    setPct('sim-bank-fill', (bankVal / bankFinalVal) * 100);
    setText('sim-bank-cap', fmtSAR(bankVal));
    setText('sim-bank-month', String(currentMonth));

    // Alraedah no-reinvest scene (pocket)
    const alrPocket = series.slice(0, currentMonth).reduce((s, r) => s + r.payout, 0);
    setText('sim-alr-pocket', fmtSAR(alrPocket));
    setText('sim-alr-month', String(currentMonth));

    // Alraedah reinvest scene
    const reinvFinal = series[total - 1].reinv;
    const reinvVal = currentMonth === 0 ? 0 : series[Math.max(0, currentMonth - 1)].reinv;
    setPct('sim-reinv-fill', (reinvVal / reinvFinal) * 100);
    setText('sim-reinv-cap', fmtSAR(reinvVal));
    setText('sim-reinv-month', String(currentMonth));

    // Outcome cards shown when final
    const outcomes = document.getElementById('sim-outcomes');
    if (outcomes) {
      if (final) {
        outcomes.hidden = false;
        const cards = outcomes.querySelectorAll('.outcome-num');
        if (cards.length === 3) {
          cards[0].textContent = fmtSAR(bankFinalVal);
          cards[1].textContent = fmtSAR(series[total - 1].noReinv);
          cards[2].textContent = fmtSAR(reinvFinal);
        }
      } else {
        outcomes.hidden = true;
      }
    }
  }

  function setPct(id, pct) {
    const el = document.getElementById(id);
    if (el) el.style.height = Math.max(0, Math.min(100, pct)).toFixed(1) + '%';
  }
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function play() {
    if (playing) return;
    const state = window.AInvest.state;
    playing = true;
    let m = 0;
    render(state, 0, false);

    const stepDelay = 650;
    timer = setInterval(() => {
      m++;
      const final = m >= state.tenorMonths;
      render(state, m, final);
      if (final) {
        clearInterval(timer);
        playing = false;
        timer = null;
      }
    }, stepDelay);
  }

  function reset() {
    if (timer) { clearInterval(timer); timer = null; playing = false; }
    render(window.AInvest.state, 0, false);
  }

  function init() {
    const playBtn = document.getElementById('sim-play');
    const resetBtn = document.getElementById('sim-reset');
    if (playBtn) playBtn.addEventListener('click', play);
    if (resetBtn) resetBtn.addEventListener('click', reset);

    // Re-reset when state changes (so moving slider resets the sim)
    window.AInvest.onStateChange((state) => {
      if (!playing) render(state, 0, false);
    });

    render(window.AInvest.state, 0, false);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
