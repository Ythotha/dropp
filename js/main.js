(function(){
    'use strict';

    let hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', (event) => hamburger.classList.toggle('hamburger_activated'));
    hamburger.addEventListener('click', (event) => document.querySelector('.header__list').classList.toggle('header__list_open'));
})();