(function () {

    var sidenavIsOpen = false;

    function openNav(event) {

        event.preventDefault();
        event.stopPropagation();

        document.querySelector(".sidenav").style.width = "250px";
        document.querySelector(".content").style.marginLeft = "250px";
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').style.height = '100%';
    }

    function closeNav() {

        event.preventDefault();
        event.stopPropagation();

        document.querySelector(".sidenav").style.width = "0";
        document.querySelector(".content").style.marginLeft = "0";
        document.querySelector('body').style.overflow = 'initial';
        document.querySelector('body').style.height = 'initial';
    }

    function handler() {

        sidenavIsOpen = !sidenavIsOpen;

        sidenavIsOpen ? openNav() : closeNav();

    }

    document.querySelector('.mobilemenu-button').addEventListener('click', handler);
    document.querySelector('.mobilemenu-button').addEventListener('touchstart', handler);

}());