(function () {
  "use strict";

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  });

  function fmtSAR(value) {
    return "SAR " + formatter.format(Math.round(value));
  }

  function monthlyPayment(principal, annualRate, months) {
    const r = annualRate / 12;
    return principal * (r / (1 - Math.pow(1 + r, -months)));
  }

  function updateCalculator() {
    const slider = document.getElementById("amountRange");
    if (!slider) return;
    const amount = Number(slider.value);
    const monthly = monthlyPayment(amount, 0.07, 12);
    const total = monthly * 12;
    const profit = total - amount;

    document.getElementById("amountOut").textContent = fmtSAR(amount);
    document.getElementById("monthlyOut").textContent = fmtSAR(monthly);
    document.getElementById("totalOut").textContent = fmtSAR(total);
    document.getElementById("profitOut").textContent = fmtSAR(profit);
    document.getElementById("heroPayout").textContent = fmtSAR(monthly);

    const timeline = document.getElementById("timelineBars");
    if (timeline && !timeline.children.length) {
      for (let i = 0; i < 12; i += 1) {
        const bar = document.createElement("i");
        bar.style.setProperty("--h", 26 + (i % 4) * 11 + i * 2 + "%");
        timeline.appendChild(bar);
      }
    }
  }

  function initComparison() {
    const detail = document.getElementById("compareDetail");
    const copy = {
      idle: "Idle cash is clear and accessible, but it does not work. The page should make that opportunity cost visible without dramatizing it.",
      deposit: "A deposit is familiar and simple, but the story usually happens at the end. This comparison should show timing, not just percentage.",
      alraedah: "Alraedah Invest turns the page into a moving cash-flow story: monthly capital return, target profit, visible risk language, and clear opportunity status."
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
        const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.12;
        button.style.transform = `translate(${x}px, ${y}px)`;
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.22 });

    document.querySelectorAll(".deal-card").forEach((card) => observer.observe(card));
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateCalculator();
    initHeader();
    initComparison();
    initMagneticButtons();
    initReveal();

    const slider = document.getElementById("amountRange");
    if (slider) slider.addEventListener("input", updateCalculator);
  });
})();
