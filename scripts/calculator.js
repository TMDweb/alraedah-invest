/* ==========================================================================
   Alraedah Invest, Calculator (primary return tool)
   Consumes window.AInvest.state and math primitives from main.js.
   ========================================================================== */

(function () {
  'use strict';

  function render(state) {
    const { amount, tenorMonths, effectiveRate, bankFlatRate } = state;
    const { monthlyPayment, bankFlatEnd, noReinvestTotal, reinvestFutureValue } = window.AInvest.math;
    const { fmtSAR } = window.AInvest.fmt;

    // Compute all three scenarios
    const bank = bankFlatEnd(amount, bankFlatRate, tenorMonths);
    const noReinv = noReinvestTotal(amount, effectiveRate, tenorMonths);
    const reinv = reinvestFutureValue(amount, effectiveRate, tenorMonths);
    const monthly = monthlyPayment(amount, effectiveRate, tenorMonths);

    // Amount display
    const amtDisplay = document.getElementById('calc-amount-display');
    if (amtDisplay) amtDisplay.textContent = fmtSAR(amount);

    // Bank card
    setText('res-bank', fmtSAR(bank));
    setText('res-bank-profit', '+ ' + fmtSAR(bank - amount));

    // Alraedah no-reinvest card
    setText('res-alr', fmtSAR(noReinv));
    setText('res-alr-profit', (noReinv - amount >= 0 ? '+ ' : '− ') + fmtSAR(Math.abs(noReinv - amount)));
    setText('res-alr-mo', fmtSAR(monthly));

    // Alraedah reinvest card
    setText('res-reinv', fmtSAR(reinv));
    setText('res-reinv-profit', '+ ' + fmtSAR(reinv - amount));

    // Delta vs bank on reinvest card
    const delta = reinv - bank;
    const deltaStr = (delta >= 0 ? '+' : '−') + fmtSAR(Math.abs(delta));
    setText('res-reinv-delta', deltaStr);

    // Rate display
    setText('calc-rate', (effectiveRate * 100).toFixed(1) + '%');
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function init() {
    const state = window.AInvest.state;

    // Amount slider
    const slider = document.getElementById('calc-amount');
    if (slider) {
      slider.value = state.amount;
      slider.addEventListener('input', function () {
        state.amount = parseInt(this.value, 10);
        window.AInvest.notify();
      });
    }

    // Tenor buttons
    document.querySelectorAll('.tenor-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const t = parseInt(this.dataset.tenor, 10);
        state.tenorMonths = t;
        document.querySelectorAll('.tenor-btn').forEach(b => b.classList.toggle('is-active', b.dataset.tenor === this.dataset.tenor));
        window.AInvest.notify();
      });
    });

    // Subscribe to state changes
    window.AInvest.onStateChange(render);

    // Initial render
    render(state);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
