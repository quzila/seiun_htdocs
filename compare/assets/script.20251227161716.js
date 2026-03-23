// --- JavaScriptは省略せず元のまま貼ってOK ---
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
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
         if (window.innerWidth <= 768) {
            closeMenu();
         }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        if (navMenu.classList.contains('active')) {
            closeMenu();
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
window.addEventListener('scroll', function() {
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

// 初期設定
bgEls[0].style.backgroundImage = `linear-gradient(rgba(0,80,150,0.4),rgba(0,122,255,0.3)), url('${images[0]}')`;
bgEls[0].classList.add('show');

function fadeToNextImage() {
    // 切り替え先画像セット
    bgEls[next].style.backgroundImage = `linear-gradient(rgba(0,80,150,0.4),rgba(0,122,255,0.3)), url('${images[(current+1)%images.length]}')`;
    bgEls[next].classList.add('show');
    // 下の画像をフェードアウト
    bgEls[current].classList.remove('show');
    // current/nextを入れ替え
    let old = current;
    current = next;
    next = old;
}

setInterval(() => {
    fadeToNextImage();
}, 4000);

// ページロード時のアニメーション（ギャラリーアイテム）
window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeIn 0.6s ease forwards';
        }, index * 100);
    });
});
