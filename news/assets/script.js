// --- JavaScriptは省略せず元のまま貼ってOK ---
(() => {
// ハンバーガーメニューの制御
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// フォーカストラップ用のフォーカス可能要素を取得
function getFocusableElements() {
    if (!navMenu) return [];
    return Array.from(navMenu.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.disabled && el.offsetParent !== null);
}

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';

    const isExpanded = navMenu.classList.contains('active');
    // aria属性を更新
    hamburger.setAttribute('aria-expanded', isExpanded);
    hamburger.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
    // aria-hidden と inert の切り替え
    navMenu.setAttribute('aria-hidden', !isExpanded);
    navMenu.inert = !isExpanded;

    // メニューを開いた時、最初のリンクにフォーカス
    if (isExpanded) {
        const focusables = getFocusableElements();
        if (focusables.length > 0) {
            setTimeout(() => focusables[0].focus(), 100);
        }
    }
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // aria属性を更新
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
    // aria-hidden と inert の切り替え
    navMenu.setAttribute('aria-hidden', 'true');
    navMenu.inert = true;
}

if (hamburger && navMenu && overlay) {
    // 初期aria設定
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'nav-menu');
    // モバイル版でのみinertとaria-hiddenを設定（PC版では常にクリック可能に）
    if (window.innerWidth <= 768) {
        navMenu.setAttribute('aria-hidden', 'true');
        navMenu.inert = true;
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Escキーでメニューを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
            hamburger.focus();
        }
    });

    // フォーカストラップ
    navMenu.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !navMenu.classList.contains('active')) return;

        const focusables = getFocusableElements();
        if (focusables.length === 0) return;

        const firstFocusable = focusables[0];
        const lastFocusable = focusables[focusables.length - 1];

        if (e.shiftKey) {
            // Shift+Tab: 最初の要素から戻ったら最後へ
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab: 最後の要素から進んだら最初へ
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });
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
    if (window.innerWidth > 768) {
        // PC版に切り替わったらメニューを閉じて、inertを解除
        if (navMenu.classList.contains('active')) {
            closeMenu();
        }
        // PC版ではinertとaria-hiddenを解除してクリック可能に
        navMenu.removeAttribute('aria-hidden');
        navMenu.inert = false;
    } else {
        // モバイル版ではメニューが閉じている時はinertを設定
        if (!navMenu.classList.contains('active')) {
            navMenu.setAttribute('aria-hidden', 'true');
            navMenu.inert = true;
        }
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
window.addEventListener('scroll', function () {
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
    // 初期設定
    bgEls[0].style.backgroundImage = `url('${images[0]}')`;
    bgEls[0].classList.add('show');

    // prefers-reduced-motion対応
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function fadeToNextImage() {
        // 切り替え先画像セット
        bgEls[next].style.backgroundImage = `url('${images[(current + 1) % images.length]}')`;
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
(function () {
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
        // 新しいスキーマに対応：data.yearsを使用
        const yearsData = data.years || data;
        // 現在のページがどの記事かを特定
        let currentArticleUrl = '';
        yearsData.forEach(yearData => {
            yearData.articles.forEach(article => {
                if (currentPath.includes(article.url) || currentPath.endsWith(article.url.split('/').pop())) {
                    currentArticleUrl = article.url;
                }
            });
        });

        // 現在の記事が属する年を特定
        let currentYear = null;
        yearsData.forEach(yearData => {
            yearData.articles.forEach(article => {
                if (article.url === currentArticleUrl) {
                    currentYear = yearData.year;
                }
            });
        });

        // HTMLを生成
        let html = '';
        const useOpenYears = openYears !== null;

        yearsData.forEach((yearData, index) => {
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
    }
})();
})();

// ======================================
// 記事カードグリッド（index.html用）
// ======================================
(function () {
    const articleGrid = document.getElementById('article-grid');
    const tagFilter = document.getElementById('tag-filter');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const articleCountEl = document.getElementById('article-count');
    const latestListContainer = document.getElementById('latest-list');
    const topicSummaryContainer = document.getElementById('topic-summary');

    if (!articleGrid) return;

    let allArticles = [];
    let filteredArticles = [];
    let displayedCount = 0;
    const ITEMS_PER_PAGE = 6;
    let currentTag = 'all';
    let tagDefinitions = [];
    const TAG_SUMMARIES = {
        event: '入寮式、寮祭、歓迎会、祝賀会など、季節ごとの催しをまとめています。',
        daily: '寮生大会や誕生日会、日々の暮らしの風景を一覧できます。',
        ob: '卒寮生や青雲会との交流、節目の会合を記録しています。',
        region: '県人会や地域行事など、寮の外とのつながりを紹介します。',
        sports: '府中駅伝や自主練習会など、体を動かす話題を集めています。',
        study: '業界研究会や講演会など、進路と学びに関する記事です。'
    };

    loadArticleData();

    function loadArticleData() {
        fetch(`data/backnumber.json?v=${Date.now()}`)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load data');
                return response.json();
            })
            .then(data => {
                tagDefinitions = Array.isArray(data.tags) ? data.tags : [];
                allArticles = flattenAndSortArticles(data);
                filteredArticles = [...allArticles];

                renderLatestList(allArticles.slice(0, 10));
                renderTopicSummary();
                renderTagFilter();
            })
            .catch(error => {
                console.error('Error loading article data:', error);
                if (tagFilter) {
                    tagFilter.innerHTML = '';
                }
                if (loadMoreBtn) {
                    loadMoreBtn.hidden = true;
                }
            });
    }

    function flattenAndSortArticles(data) {
        const years = Array.isArray(data.years) ? data.years : [];
        return years
            .flatMap(yearData => (yearData.articles || []).map(article => ({
                ...article,
                year: yearData.year
            })))
            .sort((left, right) => {
                const rightDate = right.date || `${right.year}-00-00`;
                const leftDate = left.date || `${left.year}-00-00`;
                return rightDate.localeCompare(leftDate) || String(right.url).localeCompare(String(left.url));
            });
    }

    // タグフィルターの描画
    function renderTagFilter() {
        if (!tagFilter) return;

        let html = '<button class="tag-btn active" type="button" data-tag="all">すべて</button>';
        tagDefinitions.forEach(tag => {
            html += `<button class="tag-btn" type="button" data-tag="${tag.id}">${tag.name}</button>`;
        });
        tagFilter.innerHTML = html;

        // タグボタンのイベントリスナー
        tagFilter.querySelectorAll('.tag-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = btn.dataset.tag;
                setActiveTag(tag, true); // true = URLを更新
            });
        });

        // URLハッシュからタグを復元
        restoreTagFromHash();
    }

    // URLハッシュからタグを復元
    function restoreTagFromHash() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#tag=')) {
            const tagFromHash = hash.replace('#tag=', '');
            if (tagFromHash && (tagFromHash === 'all' || tagDefinitions.some(t => t.id === tagFromHash))) {
                setActiveTag(tagFromHash, false); // false = URLを更新しない
                return;
            }
        }
        setActiveTag('all', false);
    }

    // ブラウザの戻る/進むボタン対応
    window.addEventListener('popstate', () => {
        if (!tagFilter) return;
        restoreTagFromHash();
    });
    window.addEventListener('hashchange', restoreTagFromHash);

    // アクティブタグの設定
    function setActiveTag(tag, updateUrl = true) {
        currentTag = tag;

        // URLハッシュを更新（戻るボタン対応）
        if (updateUrl) {
            const newHash = tag === 'all' ? '' : `#tag=${tag}`;
            if (window.location.hash !== newHash) {
                history.pushState({ tag: tag }, '', window.location.pathname + newHash);
            }
        }

        // ボタンのアクティブ状態を更新
        tagFilter.querySelectorAll('.tag-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tag === tag);
        });

        // 記事をフィルタリング
        if (tag === 'all') {
            filteredArticles = [...allArticles];
        } else {
            filteredArticles = allArticles.filter(article =>
                article.tags && article.tags.includes(tag)
            );
        }

        resetArticleGrid();
        updateArticleCount();
    }

    function resetArticleGrid() {
        displayedCount = 0;
        articleGrid.innerHTML = '';
        renderArticlesBatch();
    }

    function renderArticlesBatch() {
        const articlesToShow = filteredArticles.slice(displayedCount, displayedCount + ITEMS_PER_PAGE);
        const fragment = document.createDocumentFragment();

        if (!articlesToShow.length && displayedCount === 0) {
            const emptyState = document.createElement('p');
            emptyState.className = 'content-text';
            emptyState.style.textAlign = 'center';
            emptyState.textContent = '該当する記事はありません。';
            articleGrid.appendChild(emptyState);
        }

        articlesToShow.forEach(article => {
            const card = createArticleCard(article);
            fragment.appendChild(card);
        });

        articleGrid.appendChild(fragment);

        displayedCount += articlesToShow.length;

        // もっと見るボタンの表示/非表示
        if (loadMoreBtn) {
            loadMoreBtn.hidden = displayedCount >= filteredArticles.length;
        }
    }

    // 記事カードの作成
    function createArticleCard(article) {
        const card = document.createElement('a');
        card.href = article.url;
        card.className = 'article-card';

        // 日付のフォーマット
        const dateStr = formatDate(article);

        // サムネイル
        let thumbnailHtml;
        if (article.thumbnail) {
            thumbnailHtml = `<img src="${article.thumbnail}" alt="${article.title}" class="article-card-image" loading="lazy" decoding="async">`;
        } else {
            thumbnailHtml = `<div class="article-card-image placeholder">📰</div>`;
        }

        // タグ
        let tagsHtml = '';
        if (article.tags && article.tags.length > 0) {
            const tagNames = article.tags.map(tagId => {
                const tagDef = tagDefinitions.find(t => t.id === tagId);
                return tagDef ? tagDef.name : tagId;
            });
            tagsHtml = '<div class="article-card-tags">' +
                tagNames.map(name => `<span class="article-card-tag">${name}</span>`).join('') +
                '</div>';
        }

        card.innerHTML = `
            ${thumbnailHtml}
            <div class="article-card-content">
                <span class="article-card-date">${dateStr}</span>
                <h3 class="article-card-title">${article.title}</h3>
                <p class="article-card-description">${article.description || ''}</p>
                ${tagsHtml}
            </div>
        `;

        return card;
    }

    function formatDate(article) {
        if (article.date) {
            const [year, month, day] = article.date.split('-').map(Number);
            if (year && month && day) {
                return `${year}年${month}月${day}日`;
            }
        }
        return `${article.year}年${article.month || ''}`;
    }

    function renderLatestList(articles) {
        if (!latestListContainer) return;

        const list = document.createElement('ol');
        list.className = 'news-latest-list';

        articles.forEach(article => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            const meta = document.createElement('small');

            link.href = article.url;
            link.textContent = article.title;
            meta.textContent = `${formatDate(article)}・${getPrimaryTagName(article)}`;

            item.append(link, document.createElement('br'), meta);
            list.appendChild(item);
        });

        latestListContainer.replaceChildren(list);
    }

    function renderTopicSummary() {
        if (!topicSummaryContainer) return;

        const grid = document.createElement('div');
        grid.className = 'topic-summary-grid';

        tagDefinitions.forEach(tag => {
            const card = document.createElement('article');
            const count = document.createElement('span');
            const title = document.createElement('h3');
            const description = document.createElement('p');

            card.className = 'topic-summary-card';
            count.className = 'topic-summary-count';
            count.textContent = `${countArticlesByTag(tag.id)}件`;
            title.textContent = tag.name;
            description.textContent = TAG_SUMMARIES[tag.id] || '関連する記事をまとめています。';

            card.append(count, title, description);
            grid.appendChild(card);
        });

        topicSummaryContainer.replaceChildren(grid);
    }

    function countArticlesByTag(tagId) {
        return allArticles.filter(article => Array.isArray(article.tags) && article.tags.includes(tagId)).length;
    }

    function getPrimaryTagName(article) {
        const primaryTagId = Array.isArray(article.tags) ? article.tags[0] : '';
        const tag = tagDefinitions.find(definition => definition.id === primaryTagId);
        return tag ? tag.name : '青雲寮だより';
    }

    // 記事数の更新
    function updateArticleCount() {
        if (articleCountEl) {
            articleCountEl.textContent = `${filteredArticles.length}件の記事`;
        }
    }

    // もっと見るボタンのイベントリスナー
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            renderArticlesBatch();
        });
    }
})();
