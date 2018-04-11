
    document.jquerySelector('.hamburger').onclick = showMenu;
    document.jquerySelector('.hamburger_activated').onclick = hideMenu;

    function showMenu() {
        document.jquerySelector('.header__list').style.right = 0;
        document.jquerySelector('.header__list').style.display = 'block';
    }

    function hideMenu() {
        document.jquerySelector('.header__list').style.right = '-100%';
    }
