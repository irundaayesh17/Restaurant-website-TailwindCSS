let navbarr = document.querySelector('ul');
document.getElementById('mobmenu').addEventListener('click', menu);
function menu(e){
    let icon = e.target; // Correctly access the clicked icon
    if(icon.name === 'menu'){
        icon.name = 'close';
        navbarr.classList.toggle('opacity-100');
        navbarr.style.zIndex = '1000';
        navbarr.style.pointerEvents = 'all'; // Enable pointer events when navbar is visible
    }
    else{
        icon.name = 'menu';
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

  //Registration form

const showpass = document.getElementById('showpass');
document.getElementById('generatepassw').addEventListener('click', generatepass);
function generatepass(){
    const length = 15;
    const isinclude_uppercase = true;
    const isinclude_lowercase = true;
    const isinclude_numbers = true;
    const isinclude_symbols = true;

    const pass = generatepassword(length, isinclude_lowercase, isinclude_uppercase, isinclude_numbers, isinclude_symbols);
    document.getElementById('password').value = pass;
    document.getElementById('cpassword').value = pass;
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

// Add event listeners to the input elements
fname.addEventListener('input', fnamevalidation);
email.addEventListener('input', emailvalidation);
lname.addEventListener('input', lnamevalidation);
password.addEventListener('input', passwordvalidation);
cpassword.addEventListener('input', passwordvalidation);


function fnamevalidation() {
  const fname = document.getElementById('fname');  
  const fnameerror = document.getElementById('fnameerror');

 
  // Check if first name contains numbers
  if (/[0-9]/.test(fname.value)) {
    fnameerror.innerHTML = 'First Name cannot contain numbers';
    return false;
  }

  fnameerror.innerHTML = '';  // Clear error message if valid
  return true;
}

function lnamevalidation() {
    const lname = document.getElementById('lname');
    const lnameerror = document.getElementById('lnameerror');
  
   
    // Check if first name contains numbers
    if (/[0-9]/.test(lname.value)) {
        lnameerror.innerHTML = 'First Name cannot contain numbers';
      return false;
    }
  
    lnameerror.innerHTML = '';  // Clear error message if valid
    return true;
}

function emailvalidation() {
  const email = document.getElementById('email'); 
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
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');
    const passworderror = document.getElementById('passerror');
    const cpassworderror = document.getElementById('cpasserror');
  
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
    else if (cpassword.value != password.value){
        cpassworderror.innerHTML = 'Password does not match';
        return false;
    }
  
    passworderror.innerHTML = '';  // Clear error message if valid
    cpassworderror.innerHTML = '';  // Clear error message if valid
    return true;
}

//USER REGISTRATION - FIREBASE CONFIGURATION
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMgAuX01CPvNgYgoC3WU7l1fafc9qKiN8",
    authDomain: "restaurant-web-app-74ce3.firebaseapp.com",
    projectId: "restaurant-web-app-74ce3",
    storageBucket: "restaurant-web-app-74ce3.appspot.com",
    messagingSenderId: "681930832106",
    appId: "1:681930832106:web:a831f8c25f0bcd97f97f93",
    measurementId: "G-1BNF7TDRG3"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase();
    const analytics = getAnalytics(app);

    const regicon = document.getElementById('registericn');
    const loginicon = document.getElementById('loginicn');

    onAuthStateChanged(auth, (user) => {
      console.log(user);
  });

//register function
    document.getElementById('registerbtn').addEventListener('click', register);

    function register(e) {
      const fname = document.getElementById('fname').value;
      const lname = document.getElementById('lname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      e.preventDefault();  // Prevent default form submission
      // Replace these placeholders with your actual Firebase authentication code
      if (!fnamevalidation()) {
        return;  // Prevent form submission if first name is invalid
      }
      if (!emailvalidation()) {
        return;  // Prevent form submission if email is invalid
      }
      if (!lnamevalidation()) {
        return;  // Prevent form submission if first name is invalid
      }
      if (!passwordvalidation()) {
        return;  // Prevent form submission if password is invalid
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, 'UsersAuthList/' + userCredential.user.uid), {
            firstname: fname,
            lastname: lname,
          })
          console.log(userCredential);
          alert('User Registered Successfully');
          regicon.style.display = 'none';
          loginicon.style.display = 'none';
          // ... your additional logic after successful registration
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(errorMessage);
          // ... your error handling logic
        });
    }

  