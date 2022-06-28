let burger = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
let pageHeader = document.querySelector('.page-header');
let promo = document.querySelector('.promo');
let btnnext = document.querySelector('.promo__button--next');
let btnprev = document.querySelector('.promo__button--prew');
let slideItem = document.querySelectorAll('.slider');
let i = 0;

burger.addEventListener('click', function(event) {

    burger.classList.toggle('toggle--activ');
    nav.classList.toggle('navigation--close');
});

nav.classList.remove('navigation--nojs');
pageHeader.classList.remove('page-header--nojs');
promo.classList.remove('promo--nojs');

btnnext.addEventListener('click', function (event) {
    if (slideItem[i].classList.contains('slider--active')) {
        slideItem[i].classList.remove('slider--active');
        i++;
    if (i >= slideItem.length) {
        i = 0;
        slideItem[i].classList.add('slider--active');
    } else if (i <= slideItem.length) {
        slideItem[i].classList.add('slider--active');
        };
    };
});

btnprev.addEventListener('click', function (event) {
    if (slideItem[i].classList.contains('slider--active')) {
        slideItem[i].classList.remove('slider--active');
        i--;
    if (i < 0) {
        i = slideItem.length-1;
        slideItem[i].classList.add('slider--active');
    } else if (i <= slideItem.length) {
        slideItem[i].classList.add('slider--active');
        };
    };
});

// const navMain = document.querySelector('.main-nav');
// const navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

// const link = document.querySelector('.js-login');
// const popup = document.querySelector('.modal');
// const close = popup.querySelector('.modal__button--close');
// const form = popup.querySelector('form');
// const login = popup.querySelector('[name=login]');
// const password = popup.querySelector('[name=password]');

// let isStorageSupport = true;
// let storage = '';

// try {
//   storage = localStorage.getItem('login');
// } catch (err) {
//   isStorageSupport = false;
// }

// link.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.add('modal--show');

//   if (storage) {
//     login.value = storage;
//     password.focus();
//   } else {
//     login.focus();
//   }
// });

// close.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   popup.classList.remove('modal--show');
//   popup.classList.remove('modal--error');
// });

// form.addEventListener('submit', function (evt) {
//   if (!login.value || !password.value) {
//     evt.preventDefault();
//     popup.classList.remove('modal--error');
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add('modal--error');
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem('login', login.value);
//     }
//   }
// });

// window.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();

//     if (popup.classList.contains('modal--show')) {
//       popup.classList.remove('modal--show');
//       popup.classList.remove('modal--error');
//     }
//   }
// });
