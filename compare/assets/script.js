/**
 * 比較ページ専用JavaScript
 */

(function() {
    'use strict';

    // 年号自動更新
    function updateCopyrightYear() {
        const yearElement = document.getElementById('copyright-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // スムーススクロール
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // 地図の遅延読み込み（パフォーマンス最適化）
    function initLazyLoadMaps() {
        const mapObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    if (iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                        iframe.removeAttribute('data-src');
                    }
                    observer.unobserve(iframe);
                }
            });
        }, {
            rootMargin: '100px'
        });

        document.querySelectorAll('iframe[data-src]').forEach(iframe => {
            mapObserver.observe(iframe);
        });
    }

    // テーブルのレスポンシブ対応チェック
    function checkTableResponsiveness() {
        const tables = document.querySelectorAll('.comparison-table');
        tables.forEach(table => {
            const wrapper = table.closest('.comparison-table-wrapper');
            if (wrapper && table.offsetWidth > wrapper.offsetWidth) {
                wrapper.style.overflowX = 'auto';
            }
        });
    }

    // 初期化
    function init() {
        updateCopyrightYear();
        initSmoothScroll();

        // IntersectionObserver対応ブラウザの場合のみ遅延読み込みを有効化
        if ('IntersectionObserver' in window) {
            initLazyLoadMaps();
        }

        checkTableResponsiveness();

        // リサイズ時の再チェック
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkTableResponsiveness, 250);
        });
    }

    // DOMContentLoaded後に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
