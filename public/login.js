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
const showpass = document.getElementById('showpass');

function showpassword(){
    if(showpass.checked){
        document.getElementById('passwordL').type = 'text';
        document.getElementById('cpassword').type = 'text';
    }
    else{
        document.getElementById('passwordL').type = 'password';
        document.getElementById('cpassword').type = 'password';
    }
}
showpass.addEventListener('click', showpassword);

const email = document.getElementById('emailL'); 
const password = document.getElementById('passwordL');

email.addEventListener('input', emailvalidation);
password.addEventListener('input', passwordvalidation);

function subMenu(e) {
    let submenu = document.getElementById('sub-menu-wrap');

    if (e.name === 'dropdown-menu') {
        e.name = 'closemenu';
        submenu.classList.remove('opacity-0', 'pointer-events-none');
        submenu.classList.add('opacity-100', 'pointer-events-auto');
    } else {
        e.name = 'dropdown-menu';
        submenu.classList.remove('opacity-100', 'pointer-events-auto');
        submenu.classList.add('opacity-0', 'pointer-events-none');
    }
}

