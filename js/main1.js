
    document.querySelector('.hamburger').onclick = showMenu;
    document.querySelector('.hamburger hamburger_activated').onclick = hideMenu;

    function showMenu() {
        document.querySelector('.header__list').style.right = 0;
        document.querySelector('.header__list').style.display = 'block';
    }

    function hideMenu() {
        document.querySelector('.header__list').style.right = '-100%';
        document.querySelector('.header__list').style.display = 'none';
    }
