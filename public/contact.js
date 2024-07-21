
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});

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
const loadingscreen = document.getElementById('loadingScreen');

//focus event
document.querySelectorAll('.contact-input').forEach(function(input) {
    input.addEventListener('focus', function() {
        this.style.border = '2px solid'; // Apply focus style to all inputs with class .contact-input
    });
    input.addEventListener('blur', function() {
        this.style.border = ''; // Remove border on blur for all inputs
    });
});

//nortification send using web3form API
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
                window.location.reload();
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});