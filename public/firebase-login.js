// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
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
const submenubtn = document.getElementById('sub-menu-button');
const sub_menu = document.getElementById('sub-menu-wrap');
const showfname = document.getElementById('userFirstNameDisplay');

const updateLocalStorage = (user) => {
    get(child(ref(db), `users/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        localStorage.setItem('user-info', JSON.stringify({
          firstname: userData.fname,
          lastname: userData.lname,
        }));
        showfname.innerHTML = userData.fname;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error("Error fetching user data: ", error);
    });
  };

onAuthStateChanged(auth, (user) => {
    console.log(user);
    if(user){
        updateLocalStorage(user);
        llogout.classList.remove('hidden');
        luseremail.innerHTML = user.email;
        Lregistericon.classList.add('hidden');
        Lloginicon.classList.add('hidden');
        logform.classList.add('hidden');
        submenubtn.classList.remove('hidden');
        sub_menu.classList.remove('hidden');
        //remove interactions
        Lregistericon.style.pointerEvents ='none';
        Lloginicon.style.pointerEvents ='none';
    }
    else{
        Lregistericon.classList.remove('hidden');
        luseremail.innerHTML = '';
        llogout.classList.add('hidden');
        Lloginicon.classList.remove('hidden');
        logform.classList.remove('hidden');
        submenubtn.classList.add('hidden');
        sub_menu.classList.add('hidden');
        //add interactions
        Lregistericon.style.pointerEvents ='auto';
        Lloginicon.style.pointerEvents ='auto';
        localStorage.removeItem('user-info');
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
        const userCredential = await signInWithEmailAndPassword(auth, loginemail, loginpassword);
        const user = userCredential.user;
        updateLocalStorage(user);
        loadingscreen.classList.remove('hidden');
        
        // Set a timeout to hide the loading screen and refresh the page after 1 minute
        setTimeout(() => {
            loadingscreen.classList.add('hidden');
            //window.location.reload();
        }, 1000); // 60000 milliseconds = 1 minute
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
        loadingscreen.classList.remove('hidden');
      
      // Set a timeout to log out the user after 2 seconds
      setTimeout(() => {
          auth.signOut().then(() => {
              window.location.reload();
              console.log('User logout successful');
              //window.location.reload();
          }).catch(error => {
              console.log(error);
              alert('User logout failed');
              // Hide the loading screen if logout fails
              loadingscreen.classList.add('hidden');
          });
      }, 1000); // 2000 milliseconds = 2 seconds
    }
    catch(error){
        console.log(error);
        alert('User logout failed');
    }
});
//logout for sub menu wrap button
document.getElementById('logout-subbtn').addEventListener('click', () => {
    try{
        loadingscreen.classList.remove('hidden');
      
      // Set a timeout to log out the user after 2 seconds
      setTimeout(() => {
          auth.signOut().then(() => {
              window.location.reload();
              console.log('User logout successful');
              //window.location.reload();
          }).catch(error => {
              console.log(error);
              alert('User logout failed');
              // Hide the loading screen if logout fails
              loadingscreen.classList.add('hidden');
          });
      }, 1000); // 2000 milliseconds = 2 seconds
    }
    catch(error){
        console.log(error);
        alert('User logout failed');
    }
});
