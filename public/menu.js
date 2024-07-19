let navbarr = document.querySelector('ul');
function menu(e){
    if(e.name === 'menu'){
        e.name = 'close';
        navbarr.classList.toggle('opacity-100');
        navbarr.style.zIndex = '1000';
        navbarr.style.pointerEvents = 'all'; // Enable pointer events when navbar is visible
    }
    else{
        e.name = 'menu';
        navbarr.classList.remove('opacity-100');
        navbarr.style.zIndex = '-1';
        navbarr.style.pointerEvents = 'none'; // Disable pointer events when navbar is invisible
    }
}


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});


let submenu = document.querySelector('#sub-menu');

submenu.classList.add('opacity-0');
submenu.style.zIndex = '-1';
submenu.style.pointerEvents = 'none';

function subMenu(e) {
    if (e.name === 'dropdown-menu') {
        e.name = 'closemenu';
        submenu.classList.toggle('opacity-100');
        submenu.style.zIndex = '1000';
        submenu.style.pointerEvents = 'all'; // Enable pointer events when submenu is visible
    } else {
        e.name = 'dropdown-menu';
        submenu.classList.remove('opacity-100');
        submenu.style.zIndex = '-1';
        submenu.style.pointerEvents = 'none'; // Disable pointer events when submenu is invisible
    }
}