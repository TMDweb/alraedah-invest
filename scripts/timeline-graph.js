/* ==========================================================================
   Alraedah Invest, Timeline graph (Tool 2)
   Canvas-rendered comparison of the three paths over N months.
   Marks the "crossover point" where Alraedah-reinvested overtakes bank-flat.
   ========================================================================== */

(function () {
  'use strict';

  const COLORS = {
    bank: 'rgba(11, 26, 51, 0.55)',    // ink-55
    alr:  '#07439B',                    // blue-primary
    reinv:'#F1C31B',                    // gold
    cross:'#A5830B',                    // gold-600
    grid: 'rgba(11, 26, 51, 0.08)',
    axis: 'rgba(11, 26, 51, 0.4)',
    text: 'rgba(11, 26, 51, 0.6)'
  };

  let canvas, ctx, dpr = 1;

  function resize() {
    if (!canvas) return;
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(state) {
    if (!canvas || !ctx) return;
    resize();

    const rect = canvas.getBoundingClientRect();
    const W = rect.width, H = rect.height;
    const padL = 56, padR = 28, padT = 24, padB = 44;
    const plotW = W - padL - padR, plotH = H - padT - padB;

    ctx.clearRect(0, 0, W, H);

    const series = window.AInvest.math.monthlySeries(
      state.amount, state.effectiveRate, state.bankFlatRate, state.tenorMonths
    );

    // Find y-axis range, pad from the max of any scenario
    const maxY = Math.max(
      state.amount * (1 + state.bankFlatRate * state.tenorMonths / 12),
      series[series.length - 1].reinv,
      series[series.length - 1].noReinv
    );
    const minY = 0;

    // Grid lines (horizontal)
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = COLORS.text;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    const steps = 5;
    for (let i = 0; i <= steps; i++) {
      const v = minY + (maxY - minY) * (i / steps);
      const y = padT + plotH - (plotH * (i / steps));
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
      const label = v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v.toFixed(0);
      ctx.fillText('SAR ' + label, padL - 8, y);
    }

    // X-axis labels (month numbers at intervals)
    const months = state.tenorMonths;
    const xFor = (m) => padL + (m / months) * plotW;
    const yFor = (v) => padT + plotH - ((v - minY) / (maxY - minY)) * plotH;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const labelStep = months <= 12 ? 1 : months <= 24 ? 2 : 3;
    for (let m = 0; m <= months; m += labelStep) {
      const x = xFor(m);
      ctx.fillText('M' + m, x, padT + plotH + 8);
      // tick
      ctx.strokeStyle = COLORS.axis;
      ctx.beginPath();
      ctx.moveTo(x, padT + plotH);
      ctx.lineTo(x, padT + plotH + 4);
      ctx.stroke();
    }

    // Draw bank flat path: flat at 0 then jump at month N
    ctx.strokeStyle = COLORS.bank;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(xFor(0), yFor(0));
    ctx.lineTo(xFor(months), yFor(0));
    ctx.lineTo(xFor(months), yFor(series[months - 1].bank));
    ctx.stroke();
    ctx.setLineDash([]);
    // Bank end dot
    ctx.fillStyle = COLORS.bank;
    ctx.beginPath();
    ctx.arc(xFor(months), yFor(series[months - 1].bank), 5, 0, Math.PI * 2);
    ctx.fill();

    // No reinvest path: cumulative linear
    ctx.strokeStyle = COLORS.alr;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(xFor(0), yFor(0));
    series.forEach((p, i) => {
      ctx.lineTo(xFor(p.month), yFor(p.noReinv));
    });
    ctx.stroke();

    // Reinvest path: compounding curve
    ctx.strokeStyle = COLORS.reinv;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(xFor(0), yFor(0));
    series.forEach((p, i) => {
      ctx.lineTo(xFor(p.month), yFor(p.reinv));
    });
    ctx.stroke();

    // Crossover: first month where reinv >= bank (and bank > 0, so end of term)
    // Visually mark the month where reinv first exceeds the bank's final value.
    const bankFinal = series[months - 1].bank;
    let crossMonth = -1;
    for (let i = 0; i < series.length; i++) {
      if (series[i].reinv >= bankFinal) { crossMonth = series[i].month; break; }
    }
    if (crossMonth > 0 && crossMonth <= months) {
      const cx = xFor(crossMonth);
      const cy = yFor(series[crossMonth - 1].reinv);

      // Dashed vertical
      ctx.strokeStyle = COLORS.cross;
      ctx.setLineDash([3, 3]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, padT);
      ctx.lineTo(cx, padT + plotH);
      ctx.stroke();
      ctx.setLineDash([]);

      // Dot
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = COLORS.cross;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Label
      ctx.fillStyle = COLORS.cross;
      ctx.font = '600 11px Inter, sans-serif';
      ctx.textAlign = cx > W - 140 ? 'right' : 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillText(
        'Crossover: month ' + crossMonth,
        cx > W - 140 ? cx - 10 : cx + 10,
        cy - 10
      );
    }
  }

  function init() {
    canvas = document.getElementById('timeline-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    window.AInvest.onStateChange(draw);
    window.AInvest.redrawGraph = () => draw(window.AInvest.state);
    window.addEventListener('resize', () => draw(window.AInvest.state));

    draw(window.AInvest.state);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
