
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});

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

const removecrd1 = document.getElementById('removecard1');
const removecrd2 = document.getElementById('removecard2');


removecrd1.addEventListener('click', function() {
    document.getElementById('cardno1').value = '';
});
removecrd2.addEventListener('click', function() {
    document.getElementById('cardno2').value = '';
});

const ship = document.getElementById('ship');
const pickup = document.getElementById('pickup');
const shipping_div = document.getElementById('shipdiv');

pickup.addEventListener('click', function() {
    shipping_div.style.display = 'none';
});
ship.addEventListener('click', function() {
    shipping_div.style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup-panel');
    const overlay2 = document.getElementById('overlay2');
    const openpopupbtn = document.getElementById('open_popup');

    openpopupbtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission
        popup.style.display = 'block';
        popup.style.zIndex = '1000';
        overlay2.classList.remove('hidden');
        document.body.classList.add('no-scroll'); // Add class to stop scrolling
        setTimeout(() => {
            overlay2.style.transition = 'backdrop-filter 300ms';
            overlay2.style.backdropFilter = 'blur(5px)';
        }, 0);
    });

    function closepopup() {
        popup.style.display = 'none';
        overlay2.classList.add('hidden');
        document.body.classList.remove('no-scroll'); // Remove class to restore scrolling
        location.reload(); // Reload the page
    }

    window.closepopup = closepopup; // Make the function accessible globally if needed
});
