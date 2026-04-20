/* ==========================================================================
   Alraedah Invest, Payment story
   Plain-language monthly payment explainer, synced to calculator state.
   ========================================================================== */

(function () {
  'use strict';

  let payoutChoice = 'cash';

  function render(state) {
    const { amount, tenorMonths, effectiveRate, bankFlatRate } = state;
    const { fmtSAR } = window.AInvest.fmt;
    const math = window.AInvest.math;

    const monthly = math.monthlyPayment(amount, effectiveRate, tenorMonths);
    const bank = math.bankFlatEnd(amount, bankFlatRate, tenorMonths);
    const noReinv = math.noReinvestTotal(amount, effectiveRate, tenorMonths);
    const reinv = math.reinvestFutureValue(amount, effectiveRate, tenorMonths);
    const chosenTotal = payoutChoice === 'reinvest' ? reinv : noReinv;
    const chosenProfit = chosenTotal - amount;

    setText('story-amount', fmtSAR(amount));
    setText('story-monthly', fmtSAR(monthly));
    setText('story-monthly-note', 'For ' + tenorMonths + ' months. Each payment includes capital plus target return.');
    setText('story-choice-note', payoutChoice === 'reinvest'
      ? 'Monthly payouts go back in and can earn again.'
      : 'Cash is available as it arrives each month.'
    );
    setText('story-result-eyebrow', payoutChoice === 'reinvest'
      ? 'If you reinvest payouts'
      : 'If you keep payouts as cash'
    );
    setText('story-result-total', fmtSAR(chosenTotal));
    setText('story-result-copy', payoutChoice === 'reinvest'
      ? 'Reinvesting is what makes the return compound. Each monthly payment keeps working instead of sitting idle.'
      : 'You receive monthly liquidity. Total received is lower than reinvested because the payouts stop earning once they reach you.'
    );
    setText('story-result-profit', '+ ' + fmtSAR(Math.max(0, chosenProfit)));
    setText('story-result-monthly', fmtSAR(monthly));

    renderMonthStrip('story-bank-months', tenorMonths, function (month) {
      const isFinal = month === tenorMonths;
      return {
        value: isFinal ? fmtSAR(bank) : 'SAR 0',
        active: false,
        final: isFinal
      };
    });

    renderMonthStrip('story-alr-months', tenorMonths, function () {
      return {
        value: '+ ' + fmtSAR(monthly),
        active: true,
        final: false
      };
    });
  }

  function renderMonthStrip(id, totalMonths, valueForMonth) {
    const el = document.getElementById(id);
    if (!el) return;

    const months = visibleMonths(totalMonths);
    el.innerHTML = months.map(item => {
      if (item === 'ellipsis') {
        return '<div class="month-pill month-pill-ellipsis" aria-hidden="true"><strong>...</strong><span>more</span></div>';
      }

      const info = valueForMonth(item);
      const classes = [
        'month-pill',
        info.active ? 'month-pill-active' : '',
        info.final ? 'month-pill-final' : ''
      ].filter(Boolean).join(' ');

      return '<div class="' + classes + '">' +
        '<strong>M' + item + '</strong>' +
        '<span>' + info.value + '</span>' +
      '</div>';
    }).join('');
  }

  function visibleMonths(totalMonths) {
    if (totalMonths <= 12) {
      return Array.from({ length: totalMonths }, (_, i) => i + 1);
    }

    return [1, 2, 3, 4, 'ellipsis', totalMonths];
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setChoice(nextChoice) {
    payoutChoice = nextChoice;
    document.querySelectorAll('.story-choice-btn').forEach(btn => {
      const active = btn.dataset.storyChoice === nextChoice;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    render(window.AInvest.state);
  }

  function init() {
    document.querySelectorAll('.story-choice-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');
      btn.addEventListener('click', () => setChoice(btn.dataset.storyChoice));
    });

    window.AInvest.onStateChange(render);
    render(window.AInvest.state);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
