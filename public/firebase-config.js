// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
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




