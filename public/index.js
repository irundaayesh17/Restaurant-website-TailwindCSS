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

  window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});

