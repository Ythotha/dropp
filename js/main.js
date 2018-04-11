(function(){
    'use strict';

    let hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', (event) => hamburger.classList.toggle('hamburger_activated'));
})();