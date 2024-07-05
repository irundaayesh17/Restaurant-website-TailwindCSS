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

document.getElementById('menu').addEventListener('click', function() {
    window.location.href = 'menu.html';
  });
document.getElementById('about').addEventListener('click', function() {
    window.location.href = 'about.html';
  });
document.getElementById('register').addEventListener('click', function() {
    window.location.href = 'register.html';
  });
document.getElementById('login').addEventListener('click', function() {
    window.location.href = 'login.html';
  });
document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });
document.getElementById('order').addEventListener('click', function() {
    window.location.href = 'order.html';
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const currentPath = window.location.pathname;
    // Check if the current URL is the root or explicitly index.html, and not already /home
    if(currentPath === "/menu.html") {
      // Use the History API to change the URL
      window.history.replaceState(null, null, "/menu");
    }
  });