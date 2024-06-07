let navbarr = document.querySelector('ul');
function menu(e){
    if(e.name === 'menu'){
        e.name = 'close';
        //navbarr.classList.toggle('top-[10%]');
        navbarr.classList.toggle('opacity-100');
    }
    else{
        e.name = 'menu';
        //navbarr.classList.remove('top-[10%]');
        navbarr.classList.remove('opacity-100');
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
    header.classList.toggle('bg-orange-500', window.scrollY > 50);
});