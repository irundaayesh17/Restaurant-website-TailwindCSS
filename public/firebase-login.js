// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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
const db = getDatabase();
const auth = getAuth(app);
const analytics = getAnalytics(app);

const Lregistericon = document.getElementById('registerL');
const Lloginicon = document.getElementById('loginL');
const logform = document.getElementById('loginform');
const llogout = document.getElementById('logoutL');
const luseremail = document.getElementById('useremailL');
const loadingscreen = document.getElementById('loadingScreen');

onAuthStateChanged(auth, (user) => {
    console.log(user);
    if(user){
        llogout.classList.remove('hidden');
        luseremail.innerHTML = user.email;
        Lregistericon.style.visibility ='hidden';
        Lloginicon.style.visibility ='hidden';
        logform.classList.add('hidden');
        //remove interactions
        Lregistericon.style.pointerEvents ='none';
        Lloginicon.style.pointerEvents ='none';
    }
    else{
        Lregistericon.style.visibility='visible';
        luseremail.innerHTML = '';
        llogout.classList.add('hidden');
        Lloginicon.style.visibility='visible';
        logform.classList.remove('hidden');
        //add interactions
        Lregistericon.style.pointerEvents ='auto';
        Lloginicon.style.pointerEvents ='auto';
    }
    loadingscreen.classList.add('hidden');
  });

document.getElementById('loginbutton').addEventListener('click', async(e) => {
    e.preventDefault();
    const loginemail = document.getElementById('emailL').value;
    const loginpassword = document.getElementById('passwordL').value;
    const passworderror = document.getElementById('passerror');  
    const emailerror = document.getElementById('emailerror');
    
    try{
        await signInWithEmailAndPassword(auth, loginemail, loginpassword);
    }
    catch(error){
        console.log(error.code);
        if(error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found'){
            emailerror.innerHTML = 'Invalid email';
            passworderror.innerHTML = '';
        }
        else if(error.code === 'auth/too-many-requests'){
            alert('Too many requests, try again later');
            emailerror.innerHTML = '';
            passworderror.innerHTML = '';
        }
        else if(error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential' || error.code === 'auth/missing-password'){
            emailerror.innerHTML = '';
            passworderror.innerHTML = 'Incorrect password';
        }
        else{
            alert('Try Again Later');
            emailerror.innerHTML = '';
            passworderror.innerHTML = '';
        }
    }
    
  });

  document.getElementById('logoutL').addEventListener('click', () => {
    try{
        auth.signOut();
    }
    catch(error){
        console.log(error);
        alert('User logout failed');
    }
});
