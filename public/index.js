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

document.addEventListener('DOMContentLoaded', function() {
  const overlay3 = document.getElementById('overlay3');
  const close_popupwarning = document.getElementById('close_popupwarning');
  const popupwarning = document.getElementById('warningpopup-panel');

  // Function to show the popup if it's the user's first visit
  function showPopupIfFirstVisit() {
      const hasVisited = localStorage.getItem('hasVisited');
      console.log('Has visited:', hasVisited); // Debugging line
      if (!hasVisited) { // Show popup if hasVisited is null or false
          overlay3.classList.remove('hidden');
          overlay3.style.zIndex = '99';
          overlay3.style.backdropFilter = 'blur(4px)';
          overlay3.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          popupwarning.classList.remove('hidden');
          localStorage.setItem('hasVisited', 'true');
          console.log('Setting hasVisited to true'); // Debugging line
      }
  }

  // Function to hide the popup
  close_popupwarning.addEventListener('click', function() {
      overlay3.classList.add('hidden');
      popupwarning.classList.add('hidden');
      console.log('Popup closed'); // Debugging line
  });

  // Call the function to check and show the popup if it's the first visit
  showPopupIfFirstVisit();
});