/* ==========================================================================
   Alraedah Invest, Cash flow table (Tool 3)
   Renders a month-by-month table for the three scenarios.
   Toggle: show reinvest portfolio column highlighted when on.
   ========================================================================== */

(function () {
  'use strict';

  let reinvestMode = false;

  function render(state) {
    const tbody = document.querySelector('#cashflow-table tbody');
    if (!tbody) return;

    const { fmtSAR } = window.AInvest.fmt;
    const series = window.AInvest.math.monthlySeries(
      state.amount, state.effectiveRate, state.bankFlatRate, state.tenorMonths
    );

    let rowsHtml = '';
    let bankCum = 0;
    let alrCum = 0;

    for (const row of series) {
      bankCum = row.bank; // only populated at last month
      alrCum += row.payout; // cumulative pocket amount
      const isLast = row.month === state.tenorMonths;
      rowsHtml += `<tr class="${reinvestMode ? 'is-highlighted-row' : ''}">
        <td class="tabular">Month ${row.month}</td>
        <td class="tabular">${row.bank > 0 ? fmtSAR(row.bank) : 'SAR 0'}</td>
        <td class="tabular">${fmtSAR(alrCum)}</td>
        <td class="tabular${reinvestMode ? ' is-highlighted' : ''}" style="${reinvestMode ? 'font-weight: 600; color: var(--gold-600);' : ''}">${fmtSAR(row.reinv)}</td>
      </tr>`;
    }

    // Totals row
    const bankTotal = series[series.length - 1].bank;
    const alrTotal = series.reduce((s, r) => s + r.payout, 0);
    const reinvTotal = series[series.length - 1].reinv;
    rowsHtml += `<tr>
      <td class="tabular">Total</td>
      <td class="tabular">${fmtSAR(bankTotal)}</td>
      <td class="tabular">${fmtSAR(alrTotal)}</td>
      <td class="tabular" style="${reinvestMode ? 'color: var(--gold-600);' : ''}">${fmtSAR(reinvTotal)}</td>
    </tr>`;

    tbody.innerHTML = rowsHtml;

    // Highlight reinvest column globally via a body class
    document.body.classList.toggle('reinvest-mode-on', reinvestMode);
  }

  function init() {
    const toggle = document.getElementById('reinvest-toggle');
    if (toggle) {
      toggle.addEventListener('change', function () {
        reinvestMode = this.checked;
        render(window.AInvest.state);
      });
    }
    window.AInvest.onStateChange(render);
    render(window.AInvest.state);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
