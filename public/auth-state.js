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
const loadingscreen = document.getElementById('loadingScreen');

const registerBtn = document.getElementById('registerBTN');
const loginBtn = document.getElementById('loginBTN');
const submenubtn = document.getElementById('sub-menu-button');
const logoutBtn = document.getElementById('logout-subbtn');
const sub_menu = document.getElementById('sub-menu');
const showfname = document.getElementById('userFirstNameDisplay');

const fetchAndDisplayUserData = (user) => {
    loadingscreen.classList.remove('hidden'); // Show loading screen
    const userRef = ref(db, `users/${user.uid}`);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        showfname.innerHTML = userData.fname; // Display user's first name
      } else {
        showfname.innerHTML = 'User'; // Default if no data is available
      }
      loadingscreen.classList.add('hidden'); // Hide loading screen
    }).catch((error) => {
      console.error("Error fetching user data: ", error);
      showfname.innerHTML = 'User'; // Default on error
    });
  };

onAuthStateChanged(auth, (user) => {
    console.log(user);
    if(user){
        fetchAndDisplayUserData(user);
        registerBtn.classList.add('hidden');
        loginBtn.classList.add('hidden');
        submenubtn.classList.remove('hidden');
        sub_menu.classList.remove('hidden');
        //remove interactions
        registerBtn.style.pointerEvents ='none';
        loginBtn.style.pointerEvents ='none';
    }
    else{
        registerBtn.classList.remove('hidden');
        loginBtn.classList.remove('hidden');
        submenubtn.classList.add('hidden');
        sub_menu.classList.add('hidden');
        //remove interactions
        registerBtn.style.pointerEvents ='auto';
        loginBtn.style.pointerEvents ='auto';
        loadingscreen.classList.add('hidden');
    }
    //loadingscreen.classList.add('hidden');
});

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
