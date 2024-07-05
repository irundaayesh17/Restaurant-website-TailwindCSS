//navbar open and close in mobile view
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

//initilize the swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  //scroll eventfor header
  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});

//typing animation
var type1 = new Typed(".auto-type1",{
  strings : ["CHOOSE &amp; ENJOY", "FRESH &amp; TASTY" , "FAST &amp; EASY", "HOT &amp; SPICY", "DELICIOUS &amp; YUMMY"],
  typeSpeed : 100,
  backSpeed : 50,
  loop : true
});

// Define the callback function for the Intersection Observer
function startTypedAnimation(entries, observer) {
  entries.forEach(entry => {
    // Check if the element is intersecting (visible)
    if (entry.isIntersecting) {
      // Initialize Typed.js animation
      new Typed(".auto-type2", {
        strings: ["We Serve Healthy &amp; Tasty Foods"],
        typeSpeed: 70,
      });

      // Optionally, disconnect the observer if you don't need it anymore
      observer.disconnect();
    }
  });
}

// Create the Intersection Observer with the callback
let observer = new IntersectionObserver(startTypedAnimation, {
  root: null, // observing the viewport
  threshold: 0.1, // trigger when 10% of the target is visible
});

// Target the element to observe
let target = document.querySelector('.auto-type2');
if (target) {
  observer.observe(target); // Start observing
}

//navigations
//navigaaton header
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

//bannercard navigations
document.querySelectorAll('.ordernow-cards').forEach(function(element) {
  element.addEventListener('click', function() {
    window.location.href = 'order.html';
  });
});
//bannermenu cards navigations
document.querySelectorAll('.banner-card').forEach(function(element) {
  element.addEventListener('click', function() {
    window.location.href = 'menu.html';
  });
});
//home-menu navigations
document.querySelectorAll('.ordernow').forEach(function(element) {
  element.addEventListener('click', function() {
    window.location.href = 'order.html';
  });
});
//viewmore navigations
document.getElementById('viewmore').addEventListener('click', function() {
  window.location.href = 'menu.html';
});

document.addEventListener('DOMContentLoaded', (event) => {
  const currentPath = window.location.pathname;
  // Check if the current URL is the root or explicitly index.html, and not already /home
  if(currentPath === "/" || currentPath === "/index.html") {
    // Use the History API to change the URL
    window.history.replaceState(null, null, "/home");
  }
});