// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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

    const registericon = document.getElementById('registerH');
    const loginicon = document.getElementById('loginH');
    const regform = document.getElementById('registerform');
    const logout = document.getElementById('logout');
    const useremail = document.getElementById('useremail');

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if(user){
        logout.classList.remove('hidden');
        useremail.innerHTML = user.email;
        registericon.classList.add('hidden');
        loginicon.classList.add('hidden');
        regform.classList.add('hidden');
    }
    else{
        registericon.classList.remove('hidden');
        useremail.innerHTML = '';
        logout.classList.add('hidden');
        loginicon.classList.remove('hidden');
        regform.classList.remove('hidden');
    }
  });

  document.getElementById('registerbutton').addEventListener('click', (e) => {
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        set(ref(db, 'users/' + userCredential.user.uid), {
          fname: fname,
          lname: lname
        });
        const user = userCredential.user;
        console.log(user);
        alert('User registered successfully');
        window.location.href = 'register.html';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('User registration failed');
        // ..
      });
  });

  document.getElementById('logout').addEventListener('click', () => {
      try{
          auth.signOut();
          alert('User logged out successfully');
          window.location.href = 'register.html';
      }
      catch(error){
          console.log(error);
          alert('User logout failed');
      }
  });


