(function () {
  "use strict";

  const state = {
    amount: 10000,
    tenor: 12,
    effectiveRate: 0.07,
    bankFlatRate: 0.04
  };

  const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const preciseFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

  function fmtSAR(value, precise) {
    return "SAR " + (precise ? preciseFormatter : formatter).format(value);
  }

  function monthlyPayment(principal, annualRate, months) {
    const r = annualRate / 12;
    if (!r) return principal / months;
    return principal * (r / (1 - Math.pow(1 + r, -months)));
  }

  function bankFlatEnd(principal, flatRate, months) {
    return principal * (1 + flatRate * months / 12);
  }

  function noReinvestTotal(principal, annualRate, months) {
    return monthlyPayment(principal, annualRate, months) * months;
  }

  function reinvestFutureValue(principal, annualRate, months) {
    const payout = monthlyPayment(principal, annualRate, months);
    const r = annualRate / 12;
    if (!r) return payout * months;
    return payout * ((Math.pow(1 + r, months) - 1) / r);
  }

  function monthlySeries(principal, annualRate, flatRate, months) {
    const payout = monthlyPayment(principal, annualRate, months);
    const r = annualRate / 12;
    const rows = [];
    let reinvested = 0;

    for (let month = 1; month <= months; month += 1) {
      reinvested = reinvested * (1 + r) + payout;
      rows.push({
        month,
        bank: month === months ? bankFlatEnd(principal, flatRate, months) : 0,
        payout,
        paidToPocket: payout * month,
        reinvested
      });
    }

    return rows;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function updateCalculator() {
    const amount = state.amount;
    const tenor = state.tenor;
    const monthly = monthlyPayment(amount, state.effectiveRate, tenor);
    const bank = bankFlatEnd(amount, state.bankFlatRate, tenor);
    const noReinvest = noReinvestTotal(amount, state.effectiveRate, tenor);
    const reinvest = reinvestFutureValue(amount, state.effectiveRate, tenor);
    const bankProfit = bank - amount;
    const reinvestDelta = reinvest - bank;

    setText("amountOut", fmtSAR(amount));
    setText("assumptionOut", `${tenor} months · 7.0% effective target · bank 4.0% flat`);
    setText("heroPayout", fmtSAR(monthly));
    setText("bankTotalOut", fmtSAR(bank));
    setText("bankProfitOut", `+${fmtSAR(bankProfit)} · paid at the end`);
    setText("monthlyTotalOut", fmtSAR(noReinvest));
    setText("monthlyOut", fmtSAR(monthly));
    setText("reinvestTotalOut", fmtSAR(reinvest));
    setText("reinvestDeltaOut", `${reinvestDelta >= 0 ? "+" : "-"}${fmtSAR(Math.abs(reinvestDelta))} vs bank`);

    drawChart(monthlySeries(amount, state.effectiveRate, state.bankFlatRate, tenor), amount);
    renderTable(monthlySeries(amount, state.effectiveRate, state.bankFlatRate, tenor));
  }

  function drawChart(rows, principal) {
    const svg = document.getElementById("returnChart");
    if (!svg) return;

    const width = 720;
    const height = 260;
    const pad = { left: 42, right: 24, top: 24, bottom: 42 };
    const max = Math.max(...rows.flatMap((row) => [row.bank, row.paidToPocket, row.reinvested]), principal);
    const x = (index) => pad.left + (index / (rows.length - 1 || 1)) * (width - pad.left - pad.right);
    const y = (value) => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
    const pathFor = (key) => rows.map((row, index) => `${index ? "L" : "M"} ${x(index).toFixed(2)} ${y(row[key]).toFixed(2)}`).join(" ");

    const crossover = rows.find((row) => row.reinvested > row.bank && row.bank > 0);

    svg.innerHTML = `
      <rect x="0" y="0" width="${width}" height="${height}" rx="22" fill="rgba(7,67,155,.045)"></rect>
      <line x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" stroke="rgba(11,26,51,.18)"></line>
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}" stroke="rgba(11,26,51,.12)"></line>
      <path d="${pathFor("paidToPocket")}" fill="none" stroke="#01B3E3" stroke-width="4" stroke-linecap="round"></path>
      <path d="${pathFor("reinvested")}" fill="none" stroke="#F1C31B" stroke-width="4" stroke-linecap="round"></path>
      <path d="${pathFor("bank")}" fill="none" stroke="#07439B" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 9"></path>
      ${crossover ? `<circle cx="${x(rows.indexOf(crossover))}" cy="${y(crossover.reinvested)}" r="7" fill="#F1C31B"></circle>` : ""}
      <text x="${pad.left}" y="${height - 14}" fill="#0B1A33" font-size="13" font-weight="700">Month 1</text>
      <text x="${width - pad.right}" y="${height - 14}" text-anchor="end" fill="#0B1A33" font-size="13" font-weight="700">Month ${rows.length}</text>
      <text x="${pad.left}" y="18" fill="#07439B" font-size="13" font-weight="700">Bank flat</text>
      <text x="${pad.left + 96}" y="18" fill="#01B3E3" font-size="13" font-weight="700">Monthly payout</text>
      <text x="${pad.left + 232}" y="18" fill="#9A7700" font-size="13" font-weight="700">Reinvested</text>
    `;
  }

  function renderTable(rows) {
    const body = document.getElementById("cashflowRows");
    if (!body) return;

    body.innerHTML = rows.map((row) => `
      <tr>
        <td>${row.month}</td>
        <td>${row.bank ? fmtSAR(row.bank) : "SAR 0"}</td>
        <td>${fmtSAR(row.payout)}</td>
        <td>${fmtSAR(row.reinvested)}</td>
      </tr>
    `).join("");
  }

  function initCalculator() {
    const slider = document.getElementById("amountRange");
    if (slider) {
      slider.value = state.amount;
      slider.addEventListener("input", () => {
        state.amount = Number(slider.value);
        updateCalculator();
      });
    }

    document.querySelectorAll(".tenor-btn").forEach((button) => {
      button.addEventListener("click", () => {
        state.tenor = Number(button.dataset.tenor);
        document.querySelectorAll(".tenor-btn").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        updateCalculator();
      });
    });
  }

  function initComparison() {
    const detail = document.getElementById("compareDetail");
    const copy = {
      idle: "Idle cash stays available, but it does not earn. It is useful for liquidity, not for return.",
      deposit: "A flat bank example is simple: the return is calculated as if your money stays locked for the full term, then pays at maturity.",
      alraedah: "With the bank example, SAR 10,000 becomes SAR 10,400 at the end of the year. With Alraedah monthly distributions, about SAR 865 comes back each month. If those distributions are reinvested, the illustrative year-end value is about SAR 10,723."
    };

    document.querySelectorAll(".compare-item").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".compare-item").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        detail.querySelector("strong").textContent = copy[button.dataset.mode];
      });
    });
  }

  function initHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;
    const set = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    set();
    window.addEventListener("scroll", set, { passive: true });
  }

  function initMagneticButtons() {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.1;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.1;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initCalculator();
    initComparison();
    initMagneticButtons();
    updateCalculator();
  });
})();
