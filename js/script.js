/*===================================СЛАЙДЕРЫ====================================*/

const sliderPeople = new Swiper('.gallery__sliderPeople', {

    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    scrollbar: {
        el: '.custom-scrollbar',
        draggable: true,
        dragSize: 200,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.455,
            scrollbar: {
                dragSize: 102,
            },
        },
        767: {
            slidesPerView: 2.325,
            scrollbar: {
                dragSize: 102,
            },
        },
        1320: {
            slidesPerView: 4,
            scrollbar: {
                dragSize: 200,
            },
        },
    },

});

const sliderTools = new Swiper('.gallery__sliderTools', {

    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: '.click-next',
        prevEl: '.click-prev',
    },
    scrollbar: {
        el: '.click-scrollbar',
        draggable: true,
        dragSize: 200,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.315,
            spaceBetween: 30,
            scrollbar: {
                dragSize: 102,
            },
        },
        767: {
            slidesPerView: 1.755,
            scrollbar: {
                dragSize: 102,
            },
        },
        1320: {
            slidesPerView: 3,
            scrollbar: {
                dragSize: 200,
            },
        },
    },

});

const sliderTrainers = new Swiper('.trainers__sliderTrainers', {

    slidesPerView: 3.3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    scrollbar: {
        el: '.trainers-scrollbar',
        draggable: true,
        dragSize: 102,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        767: {
            slidesPerView: 2.32,
        },
        1320: {
            slidesPerView: 3.3,
        },
    },

});
/*===================================Шапка. Меню "бургер".====================================*/
let headerBurger = document.querySelector('.header__nav_burger'),
    headerNav = document.querySelector('.header__nav'),
    headerClose = document.querySelector('.header__nav_cross');

headerBurger.addEventListener("click", (e) => {
    headerBurger.classList.toggle('btn__burger_display');
    headerNav.classList.toggle('header__nav_displayNone');
    headerClose.classList.toggle('btn__burger_display');
});

headerClose.addEventListener("click", (e) => {
    headerBurger.classList.toggle('btn__burger_display');
    headerNav.classList.toggle('header__nav_displayNone');
    headerClose.classList.toggle('btn__burger_display');
});
/*===================================POP-UP====================================*/

let popupBg = document.querySelector('.popUp__wrapper'),
    openPopupButtons = document.querySelector('.form__btn'),
    closePopupButton = document.querySelector('.popUp__close');

openPopupButtons.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.style = "display: flex;";
});

closePopupButton.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.style = "display: none;";
});

window.addEventListener("click", (e) => {
    if(e.target === popupBg){
        popupBg.style = "display: none;";
    }
});

/*===================================Шапка. Меню "бургер".====================================*/
let footerBurger = document.querySelector('.footer__burger'),
    footerNav = document.querySelector('.footer__links_row'),
    footerClose = document.querySelector('.footer__cross');

footerBurger.addEventListener("click", (e) => {
    footerBurger.classList.toggle('btn__burger_display');
    footerNav.classList.toggle('footer__links_display');
    footerClose.classList.toggle('btn__burger_display');

});

footerClose.addEventListener("click", (e) => {
    footerBurger.classList.toggle('btn__burger_display');
    footerNav.classList.toggle('footer__links_display');
    footerClose.classList.toggle('btn__burger_display');
});

