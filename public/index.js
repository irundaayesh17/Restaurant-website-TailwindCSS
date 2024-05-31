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
