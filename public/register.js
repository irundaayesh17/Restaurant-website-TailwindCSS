

const showpass = document.getElementById('showpass');

function generatepass(){
    const length = 15;
    const isinclude_uppercase = true;
    const isinclude_lowercase = true;
    const isinclude_numbers = true;
    const isinclude_symbols = true;

    const pass = generatepassword(length, isinclude_lowercase, isinclude_uppercase, isinclude_numbers, isinclude_symbols);
    document.getElementById('password').value = pass;
    document.getElementById('cpassword').value = pass;
    document.getElementById('password').style.border = '1px solid #D1D5DB';
    document.getElementById('cpassword').style.border = '1px solid #D1D5DB';
    //error remove
    document.getElementById('passerror').innerHTML = '';
    document.getElementById('cpasserror').innerHTML = '';
    console.log(`Pass is ${pass}`);
}

function generatepassword(length, isinclude_lowercase, isinclude_uppercase, isinclude_numbers, isinclude_symbols)  {
    const lowercasechars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercasechars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberschars = '0123456789';
    const symbolschars = '!@#$%^&*_+';

    let allowedchars = '';
    let password = '';

    allowedchars += isinclude_lowercase ? lowercasechars : '';
    allowedchars += isinclude_uppercase ? uppercasechars : '';
    allowedchars += isinclude_numbers ? numberschars : '';
    allowedchars += isinclude_symbols ? symbolschars : '';
    
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[random];
    }

    return password;
}
function showpassword(){
    if(showpass.checked){
        document.getElementById('password').type = 'text';
        document.getElementById('cpassword').type = 'text';
    }
    else{
        document.getElementById('password').type = 'password';
        document.getElementById('cpassword').type = 'password';
    }
}
showpass.addEventListener('click', showpassword);
//variable
const fname = document.getElementById('fname');  
const email = document.getElementById('email'); 
const lname = document.getElementById('lname');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// Add event listeners to the input elements
fname.addEventListener('input', fnamevalidation);
email.addEventListener('input', emailvalidation);
lname.addEventListener('input', lnamevalidation);
password.addEventListener('input', passwordvalidation);
cpassword.addEventListener('input', passwordvalidation);


function fnamevalidation() {
  const fnameerror = document.getElementById('fnameerror');

 
  // Check if first name contains numbers
  if (/[0-9]/.test(fname.value)) {
    fnameerror.innerHTML = 'First Name cannot contain numbers';
    //make input field red
    document.getElementById('fname').style.border = '2px solid red';
    return false;
  }

  fnameerror.innerHTML = '';  // Clear error message if valid
  document.getElementById('fname').style.border = '1px solid #D1D5DB';
  return true;
}

function lnamevalidation() {
    const lnameerror = document.getElementById('lnameerror');
  
   
    // Check if first name contains numbers
    if (/[0-9]/.test(lname.value)) {
        lnameerror.innerHTML = 'First Name cannot contain numbers';
        document.getElementById('lname').style.border = '2px solid red';
      return false;
    }
  
    lnameerror.innerHTML = '';  // Clear error message if valid
    document.getElementById('lname').style.border = '1px solid #D1D5DB';
    return true;
}

function emailvalidation() {
  const emailerror = document.getElementById('emailerror');

  // Improved email validation using a regular expression
  const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  if (!emailRegex.test(email.value)) {
    emailerror.innerHTML = 'Invalid Email';
    document.getElementById('email').style.border = '2px solid red';
    return false;
  }

  emailerror.innerHTML = '';  // Clear error message if valid
  document.getElementById('email').style.border = '1px solid #D1D5DB';
  return true;
}

function passwordvalidation() {
    const passworderror = document.getElementById('passerror');
    const cpassworderror = document.getElementById('cpasserror');
  
    // Check if password is at least 8 characters long
    if (password.value.length < 8) {
      passworderror.innerHTML = 'Password must be at least 8 characters long';
      document.getElementById('password').style.border = '2px solid red';
      return false;
    }
    //check password atleast one uppercase letter andonelowercase andonenumber
    else if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/[0-9]/.test(password.value)) {
        passworderror.innerHTML = 'Password must contain atleast one uppercase, one lowercase and one number';
        document.getElementById('password').style.border = '2px solid red';
        return false;
    }
    else if (cpassword.value != password.value){
        cpassworderror.innerHTML = 'Password does not match';
        document.getElementById('cpassword').style.border = '2px solid red';
        return false;
    }
  
    passworderror.innerHTML = '';  // Clear error message if valid
    cpassworderror.innerHTML = '';  // Clear error message if valid
    document.getElementById('password').style.border = '1px solid #D1D5DB';
    document.getElementById('cpassword').style.border = '1px solid #D1D5DB';
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

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundImage = "url('https://i.ibb.co/VWsBT2J/headerbg.png')";
    } else {
        header.style.backgroundImage = "";
    }
});

//navigations
//navigaaton header
