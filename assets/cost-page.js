document.addEventListener("DOMContentLoaded", () => {
    const currency = new Intl.NumberFormat("ja-JP");
    const root = document.body;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const dashboardData = {
        monthly: {
            unitLabel: "月額",
            caption:
                "月額ベース。単一値はドット、都内民間学生寮の公開例だけレンジバーで表示しています。",
            note:
                "東京との差は月46,690円、富山との差は月29,545円。固定費だけで見ても差は構造的に大きいことが分かります。",
            max: 135100,
            scenarios: {
                seiun: {
                    value: 51000,
                    display: "51,000円",
                    diff: "基準",
                },
                tokyo: {
                    value: 97690,
                    display: "97,690円",
                    diff: "+46,690円",
                },
                toyama: {
                    value: 80545,
                    display: "80,545円",
                    diff: "+29,545円",
                },
                private: {
                    type: "range",
                    min: 64060,
                    max: 135100,
                    display: "64,060円〜135,100円",
                    diff: "+13,060円〜+84,100円",
                },
            },
        },
        annual: {
            unitLabel: "年額",
            caption:
                "年額換算。単一値はドット、都内民間学生寮の公開例だけレンジバーで表示しています。",
            note:
                "東京との差は年560,280円、4年間で2,241,120円。富山との差でも4年間で1,418,160円です。",
            max: 1621200,
            scenarios: {
                seiun: {
                    value: 612000,
                    display: "612,000円",
                    diff: "基準",
                },
                tokyo: {
                    value: 1172280,
                    display: "1,172,280円",
                    diff: "+560,280円",
                },
                toyama: {
                    value: 966540,
                    display: "966,540円",
                    diff: "+354,540円",
                },
                private: {
                    type: "range",
                    min: 768720,
                    max: 1621200,
                    display: "768,720円〜1,621,200円",
                    diff: "+156,720円〜+1,009,200円",
                },
            },
        },
    };

    const breakdownData = {
        seiun: {
            label: "青雲寮",
            total: 51000,
            parts: {
                housing: 30000,
                food: 16000,
                living: 5000,
            },
            title: "固定費を先に把握しやすい",
            copy:
                "住まい30,000円、食事16,000円、生活インフラ約5,000円という形で、毎月の固定費を先に把握しやすくなります。家賃・食費・ネット代を別々に最適化する必要がなく、上京直後の家計設計がシンプルです。",
            caption:
                "青雲寮は、住まいと食事を先に組み立てたうえで、残る生活インフラ費を抑える構造です。",
        },
        tokyo: {
            label: "東京の一人暮らし",
            total: 97690,
            parts: {
                housing: 45964,
                food: 39620,
                living: 12106,
            },
            title: "住居費と食料費の二段構えで効く",
            copy:
                "東京の一人暮らしでは、住居費45,964円と食料39,620円で85,584円。ここだけで青雲寮の月額総額51,000円を大きく上回ります。固定費の中心は、家賃単体ではなく「家賃 + 食事」で見た方が実態に近いです。",
            caption:
                "東京は家賃だけでなく、食料費も高止まりしやすく、二つを合わせると固定費の主因になります。",
        },
        toyama: {
            label: "富山県の一人暮らし",
            total: 80545,
            parts: {
                housing: 21168,
                food: 42585,
                living: 16792,
            },
            title: "家賃差だけでは青雲寮に追いつかない",
            copy:
                "富山は住居費が21,168円まで下がりますが、食料42,585円と生活インフラ16,792円が残ります。結果として基礎生活費は月80,545円で、青雲寮との差は月29,545円。家賃が安くても、固定費全体では差が残ります。",
            caption:
                "富山では住居費は軽くなりますが、食料と生活インフラが一定以上かかるため、寮との差は消えません。",
        },
    };

    const periodButtons = document.querySelectorAll("[data-cost-period]");
    const chartRows = document.querySelectorAll(".cost-bar-row");
    const tableRows = document.querySelectorAll(".cost-matrix tbody tr[data-scenario]");
    const tableUnit = document.getElementById("cost-table-unit");
    const chartCaption = document.getElementById("cost-period-caption");
    const dashboardNote = document.getElementById("cost-dashboard-note");
    const dashboardSection = document.getElementById("dashboard");

    const breakdownButtons = document.querySelectorAll("[data-breakdown-scenario]");
    const breakdownCaption = document.getElementById("cost-breakdown-caption");
    const breakdownKicker = document.getElementById("cost-breakdown-kicker");
    const breakdownTitle = document.getElementById("cost-breakdown-title");
    const breakdownCopy = document.getElementById("cost-breakdown-copy");
    const breakdownTotal = document.getElementById("cost-breakdown-total");
    const breakdownSegments = {
        housing: document.querySelector('.cost-stack__segment[data-part="housing"]'),
        food: document.querySelector('.cost-stack__segment[data-part="food"]'),
        living: document.querySelector('.cost-stack__segment[data-part="living"]'),
    };
    const breakdownLegendValues = {
        housing: document.querySelector('[data-breakdown-value="housing"]'),
        food: document.querySelector('[data-breakdown-value="food"]'),
        living: document.querySelector('[data-breakdown-value="living"]'),
    };
    let currentPeriod = "monthly";
    let dashboardAnimated = false;

    function applyTheme() {
        const theme = prefersDark.matches ? "dark" : "light";

        root.dataset.costTheme = theme;
        root.style.colorScheme = theme;
        document.documentElement.style.colorScheme = theme;
    }

    function setActiveButton(buttons, activeButton) {
        buttons.forEach((button) => {
            const isActive = button === activeButton;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
    }

    function renderDashboard(period, { animateChart = true } = {}) {
        const view = dashboardData[period];
        const revealActualPosition = animateChart || prefersReducedMotion.matches;

        chartCaption.textContent = view.caption;
        dashboardNote.textContent = view.note;
        tableUnit.textContent = view.unitLabel;

        chartRows.forEach((row) => {
            const key = row.dataset.scenario;
            const data = view.scenarios[key];
            const valueEl = row.querySelector(".js-value");
            const diffEl = row.querySelector(".js-diff");
            const fillEl = row.querySelector(".cost-bar-row__fill");
            const rangeEl = row.querySelector(".cost-bar-row__range");
            const pointEl = row.querySelector(".cost-bar-row__point");

            valueEl.textContent = data.display;
            diffEl.textContent = data.diff;

            if (data.type === "range") {
                if (fillEl) {
                    fillEl.style.width = "0%";
                }
                if (rangeEl) {
                    rangeEl.style.left = revealActualPosition ? `${(data.min / view.max) * 100}%` : "0%";
                    rangeEl.style.width = revealActualPosition
                        ? `${((data.max - data.min) / view.max) * 100}%`
                        : "0%";
                }
                if (pointEl) {
                    pointEl.style.opacity = "0";
                    pointEl.style.left = "0%";
                }
            } else if (fillEl) {
                fillEl.style.width = "0%";
                if (rangeEl) {
                    rangeEl.style.left = "0%";
                    rangeEl.style.width = "0%";
                }
                if (pointEl) {
                    pointEl.style.left = revealActualPosition ? `${(data.value / view.max) * 100}%` : "0%";
                    pointEl.style.opacity = "1";
                }
            }
        });

        tableRows.forEach((row) => {
            const key = row.dataset.scenario;
            const data = view.scenarios[key];
            row.querySelector(".js-amount").textContent = data.display;
            row.querySelector(".js-diff").textContent = data.diff;
        });
    }

    function animateDashboardIntoView() {
        if (dashboardAnimated) {
            return;
        }

        dashboardAnimated = true;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                renderDashboard(currentPeriod, { animateChart: true });
            });
        });
    }

    function renderBreakdown(key) {
        const scenario = breakdownData[key];
        const total = scenario.total;

        Object.entries(scenario.parts).forEach(([part, value]) => {
            breakdownSegments[part].style.flexBasis = `${(value / total) * 100}%`;
            breakdownLegendValues[part].textContent = `${currency.format(value)}円`;
        });

        breakdownKicker.textContent = scenario.label;
        breakdownTitle.textContent = scenario.title;
        breakdownCopy.textContent = scenario.copy;
        breakdownCaption.textContent = scenario.caption;
        breakdownTotal.textContent = `${currency.format(total)}円 / 月`;
    }

    periodButtons.forEach((button) => {
        button.addEventListener("click", () => {
            currentPeriod = button.dataset.costPeriod;
            setActiveButton(periodButtons, button);
            renderDashboard(currentPeriod, { animateChart: dashboardAnimated });
        });
    });

    breakdownButtons.forEach((button) => {
        button.addEventListener("click", () => {
            setActiveButton(breakdownButtons, button);
            renderBreakdown(button.dataset.breakdownScenario);
        });
    });

    const initialPeriodButton = document.querySelector('[data-cost-period="monthly"]');
    const initialBreakdownButton = document.querySelector('[data-breakdown-scenario="seiun"]');

    if (initialPeriodButton) {
        setActiveButton(periodButtons, initialPeriodButton);
        renderDashboard(currentPeriod, { animateChart: false });
    }

    if (initialBreakdownButton) {
        setActiveButton(breakdownButtons, initialBreakdownButton);
        renderBreakdown("seiun");
    }

    applyTheme();

    if (typeof prefersDark.addEventListener === "function") {
        prefersDark.addEventListener("change", applyTheme);
    } else if (typeof prefersDark.addListener === "function") {
        prefersDark.addListener(applyTheme);
    }

    if (dashboardSection) {
        if (prefersReducedMotion.matches) {
            dashboardAnimated = true;
            renderDashboard(currentPeriod, { animateChart: true });
        } else if (typeof IntersectionObserver !== "function") {
            dashboardAnimated = true;
            renderDashboard(currentPeriod, { animateChart: true });
        } else {
            const dashboardObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateDashboardIntoView();
                            dashboardObserver.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.35,
                }
            );

            dashboardObserver.observe(dashboardSection);
        }
    }

    // Hero vertical bar chart animation
    const heroChart = document.querySelector(".cost-vbar-chart");
    if (heroChart) {
        if (prefersReducedMotion.matches || typeof IntersectionObserver !== "function") {
            heroChart.classList.add("is-ready");
        } else {
            const heroObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            heroChart.classList.add("is-ready");
                            heroObserver.disconnect();
                        }
                    });
                },
                { threshold: 0.25 }
            );
            heroObserver.observe(heroChart);
        }
    }
});
