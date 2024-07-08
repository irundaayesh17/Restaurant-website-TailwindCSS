
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

function emailvalidation() {
    const emailerror = document.getElementById('emailerror');
  
    // Improved email validation using a regular expression
    const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
      emailerror.innerHTML = 'Invalid Email';
      return false;
    }
  
    emailerror.innerHTML = '';  // Clear error message if valid
    return true;
}
function passwordvalidation() {
    const passworderror = document.getElementById('passerror');  
    // Check if password is at least 8 characters long
    if (password.value.length < 8) {
      passworderror.innerHTML = 'Password must be at least 8 characters long';
      return false;
    }
    //check password atleast one uppercase letter andonelowercase andonenumber
    else if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/[0-9]/.test(password.value)) {
        passworderror.innerHTML = 'Password must contain atleast one uppercase, one lowercase and one number';
        return false;
    }
    passworderror.innerHTML = '';  // Clear error message if valid
    return true;
}

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

