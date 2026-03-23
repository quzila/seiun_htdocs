// --- JavaScriptは省略せず元のまま貼ってOK ---
(() => {
// ハンバーガーメニューの制御
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    // aria属性を更新
    const isExpanded = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    hamburger.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // aria属性を更新
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
}

if (hamburger && navMenu && overlay) {
    // 初期aria設定
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'nav-menu');
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
}

if (hamburger && navMenu && overlay) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
}

window.addEventListener('resize', () => {
    if (!hamburger || !navMenu || !overlay) return;
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 160;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// スクロールダウンでメニューを閉じる
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    if (!hamburger || !navMenu || !overlay) return;
    if (navMenu.classList.contains('active')) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            closeMenu();
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}, false);

// コピーライトの年を自動更新
const copyrightYearEl = document.getElementById('copyright-year');
if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
}

// ナビゲーションバーの位置を動的に調整
const header = document.querySelector('.header');
const navContainer = document.querySelector('.nav-container');

function setNavTopPosition() {
    if (!header || !navContainer) return;
    if (window.innerWidth > 768) {
        const headerHeight = header.offsetHeight;
        navContainer.style.top = `${headerHeight}px`;
    } else {
        navContainer.style.top = '';
    }
}
window.addEventListener('load', setNavTopPosition);
window.addEventListener('resize', setNavTopPosition);

const images = [
    "img/Hero1.jpeg",
    "img/Hero2.jpeg",
    "img/Hero3.jpeg"
    // 画像のパスを追加
];
let current = 0;
let next = 1;
const bgEls = [
    document.querySelector('.hero-bg-1'),
    document.querySelector('.hero-bg-2')
];

if (bgEls[0] && bgEls[1] && images.length) {
if (bgEls[0] && bgEls[1] && images.length) {
    // 初期設定
    bgEls[0].style.backgroundImage = `url('${images[0]}')`;
    bgEls[0].classList.add('show');

    // prefers-reduced-motion対応
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function fadeToNextImage() {
        // 切り替え先画像セット
        bgEls[next].style.backgroundImage = `url('${images[(current+1)%images.length]}')`;
        bgEls[next].classList.add('show');
        // 下の画像をフェードアウト
        bgEls[current].classList.remove('show');
        // current/nextを入れ替え
        let old = current;
        current = next;
        next = old;
    }

    // モーション軽減設定が無効の場合のみ自動切り替え
    if (!prefersReducedMotion) {
        setInterval(() => {
            fadeToNextImage();
        }, 4000);
    }
}
}

// ページロード時のアニメーション（ギャラリーアイテム）
window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeIn 0.6s ease forwards';
        }, index * 100);
    });
});

// バックナンバーサイドバーの動的生成
(function() {
    const backnumberContainer = document.getElementById('backnumber-list');
    if (!backnumberContainer) return;

    // 現在のページのパスを取得（複数のパス形式に対応）
    const currentPath = window.location.pathname;
    const currentFilename = currentPath.split('/').pop();

    // JSONデータのベースパスを計算
    // ページの深さに応じてパスを調整
    let jsonBasePath = '';
    let linkBasePath = '';

    // パスの深さを判定（news/からの相対位置）
    if (currentPath.includes('/news/2')) {
        // 記事ページ（例: /news/2021-2025/2025/2025_12_01.html）
        const depth = currentPath.split('/news/')[1].split('/').length - 1;
        jsonBasePath = '../'.repeat(depth) + 'data/backnumber.json';
        linkBasePath = '../'.repeat(depth);
    } else if (currentPath.includes('/news/')) {
        // news直下のページ（例: /news/index.html, /news/backnumber.html）
        jsonBasePath = 'data/backnumber.json';
        linkBasePath = '';
    } else {
        // フォールバック
        jsonBasePath = 'data/backnumber.json';
        linkBasePath = '';
    }

    const REFRESH_INTERVAL_MS = 60 * 60 * 1000;

    function getOpenYears() {
        const yearGroups = backnumberContainer.querySelectorAll('.year-group');
        if (!yearGroups.length) return null;
        const openSummaries = backnumberContainer.querySelectorAll('.year-group[open] summary');
        const years = new Set();
        openSummaries.forEach(summary => {
            const yearText = summary.textContent.replace('年', '').trim();
            if (yearText) years.add(yearText);
        });
        return years;
    }

    function loadBacknumberSidebar() {
        const openYears = getOpenYears();

        // JSONデータを取得してサイドバーを生成（常に最新を取得）
        fetch(`${jsonBasePath}?v=${Date.now()}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load backnumber data');
                return response.json();
            })
            .then(data => {
                renderBacknumberSidebar(data, backnumberContainer, linkBasePath, currentPath, openYears);
            })
            .catch(error => {
                console.error('Error loading backnumber sidebar:', error);
                if (!backnumberContainer.innerHTML.trim()) {
                    backnumberContainer.innerHTML = '<p style="color: var(--text-light); font-size: 0.85rem;">バックナンバーを読み込めませんでした</p>';
                }
            });
    }

    loadBacknumberSidebar();
    setInterval(loadBacknumberSidebar, REFRESH_INTERVAL_MS);

    function renderBacknumberSidebar(data, container, basePath, currentPath, openYears) {
        // 現在のページがどの記事かを特定
        let currentArticleUrl = '';
        data.years.forEach(yearData => {
            yearData.articles.forEach(article => {
                if (currentPath.includes(article.url) || currentPath.endsWith(article.url.split('/').pop())) {
                    currentArticleUrl = article.url;
                }
            });
        });

        // 現在の記事が属する年を特定
        let currentYear = null;
        data.years.forEach(yearData => {
            yearData.articles.forEach(article => {
                if (article.url === currentArticleUrl) {
                    currentYear = yearData.year;
                }
            });
        });

        // HTMLを生成
        let html = '';
        const useOpenYears = openYears !== null;

        data.years.forEach((yearData, index) => {
            // 最新年と現在の記事が属する年は開いた状態にする（初回のみ）
            let isOpen = index === 0 || yearData.year === currentYear;
            if (useOpenYears) {
                isOpen = openYears.has(String(yearData.year));
            }

            html += `<details class="year-group"${isOpen ? ' open' : ''}>`;
            html += `<summary>${yearData.year}年</summary>`;
            html += '<ul class="article-links">';

            yearData.articles.forEach(article => {
                const isActive = article.url === currentArticleUrl;
                const href = basePath + article.url;
                html += `<li><a href="${href}" class="article-link${isActive ? ' active' : ''}">${article.month} ${article.title}</a></li>`;
            });

            html += '</ul></details>';
        });

        container.innerHTML = html;

        // PC版のみ: アクティブな記事が表示されるようにサイドバー内でスクロール
        // モバイル版では一番上から見たいのでスクロールしない
        if (window.innerWidth > 768) {
            setTimeout(() => {
                const activeLink = container.querySelector('.article-link.active');
                const sidebar = document.querySelector('.backnumber-sidebar');
                if (activeLink && sidebar) {
                    // サイドバー内でのみスクロール（ページ全体はスクロールしない）
                    const sidebarRect = sidebar.getBoundingClientRect();
                    const linkRect = activeLink.getBoundingClientRect();
                    const scrollTop = sidebar.scrollTop;
                    const relativeLinkTop = linkRect.top - sidebarRect.top + scrollTop;
                    const targetScrollTop = relativeLinkTop - (sidebar.clientHeight / 2);
                    sidebar.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
                }
            }, 100);
        }
    }
})();
})();
