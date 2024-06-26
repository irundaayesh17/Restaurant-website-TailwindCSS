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

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('bg-orange-500', window.scrollY > 50);
});

//readmore button
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.getElementById("readmore");
    const readMoreText = document.querySelector(".read-more-text");

    readMoreButton.addEventListener("click", function(e) {
        e.preventDefault();
        readMoreText.classList.toggle("hidden");
        if (readMoreText.classList.contains("hidden")) {
            readMoreButton.textContent = "Read More";
        } else {
            readMoreButton.textContent = "Read Less";
        }
    });
});
