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
window.addEventListener('scroll', function () {
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

// 背景画像の自動切り替え
const images = [
    "img/Hero1.JPG",
    "img/Hero2.JPG",
    "img/Hero3.JPG"
];
let currentImageIndex = 0;
let currentBgIndex = 0;
let nextBgIndex = 1;
const bgEls = [
    document.querySelector('.hero-bg-1'),
    document.querySelector('.hero-bg-2')
];

// 初期設定
bgEls[0].style.backgroundImage = `url('${images[0]}')`;
bgEls[0].classList.add('show');

function fadeToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    bgEls[nextBgIndex].style.backgroundImage = `url('${images[currentImageIndex]}')`;
    bgEls[nextBgIndex].classList.add('show');
    bgEls[currentBgIndex].classList.remove('show');
    let temp = currentBgIndex;
    currentBgIndex = nextBgIndex;
    nextBgIndex = temp;
}

setInterval(() => {
    fadeToNextImage();
}, 4000);

// メールアドレスのバリデーション
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

function validateEmail({ force = false } = {}) {
    const trimmedEmail = emailInput.value.trim();
    emailInput.value = trimmedEmail; // 前後の空白を除去してから検証する

    if (!force && trimmedEmail === '') {
        emailError.style.display = 'none';
        emailInput.setCustomValidity('');
        return true;
    }

    const isValid = emailInput.checkValidity();
    emailError.style.display = isValid ? 'none' : 'block';
    emailInput.setCustomValidity(isValid ? '' : '有効なメールアドレスを入力してください');
    return isValid;
}

emailInput.addEventListener('blur', function () {
    validateEmail();
});

emailInput.addEventListener('input', function () {
    if (emailError.style.display === 'block') {
        validateEmail();
    }
});

// お問い合わせフォームの送信処理
const inquiryForm = document.getElementById('customInquiryForm');
const submitFrame = document.getElementById('contactSubmitFrame');
const submitButton = document.getElementById('submitButton');
const formMessage = document.getElementById('formMessage');
const formIntro = document.getElementById('contactFormIntro');
const successPanel = document.getElementById('formSuccessPanel');

if (inquiryForm && submitFrame && submitButton && formMessage && successPanel) {
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbx9u-uiuzPV2Pw6j90pz9TKxYC292wN7RBeV9V197hfOAthCShLmEG8CRb-jfNJLUreMA/exec';
    let isSubmitting = false;
    let isCompleted = false;
    let submitTimeoutId = null;

    function resetSubmitButton() {
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
    }

    function clearSubmitTimeout() {
        if (submitTimeoutId) {
            window.clearTimeout(submitTimeoutId);
            submitTimeoutId = null;
        }
    }

    function showFormError(message) {
        clearSubmitTimeout();
        isSubmitting = false;
        formMessage.className = 'error';
        formMessage.textContent = message;
        formMessage.style.display = 'block';
        resetSubmitButton();
    }

    function showSuccessState() {
        if (isCompleted) {
            return;
        }

        clearSubmitTimeout();
        isSubmitting = false;
        isCompleted = true;

        inquiryForm.reset();
        emailError.style.display = 'none';
        emailInput.setCustomValidity('');
        formMessage.style.display = 'none';
        formMessage.className = '';
        formIntro?.classList.add('is-hidden');
        inquiryForm.classList.add('is-hidden');
        successPanel.hidden = false;
        successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (window.gtag) {
            window.gtag('event', 'generate_lead', {
                page_location: window.location.href,
                page_type: 'contact',
                method: 'form'
            });
            window.gtag('event', 'contact_submit_success', {
                page_location: window.location.href,
                page_type: 'contact',
                method: 'form'
            });
        }
    }

    submitFrame.addEventListener('load', function () {
        if (!isSubmitting || isCompleted) {
            return;
        }
        showSuccessState();
    });

    inquiryForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (isSubmitting || isCompleted) {
            return;
        }

        if (!validateEmail({ force: true })) {
            emailInput.reportValidity();
            return;
        }

        if (!inquiryForm.reportValidity()) {
            return;
        }

        isSubmitting = true;
        formMessage.style.display = 'none';
        formMessage.className = '';
        successPanel.hidden = true;
        inquiryForm.action = GAS_URL;
        submitButton.disabled = true;
        submitButton.textContent = '送信中...';

        clearSubmitTimeout();
        submitTimeoutId = window.setTimeout(() => {
            showFormError('送信完了を確認できませんでした。お手数ですが、042-369-7761 までお電話いただくか、info@toyama-ryo.or.jp 宛にメールでご連絡ください。');
        }, 15000);

        inquiryForm.submit();
    });
}
