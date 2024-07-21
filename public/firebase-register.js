// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
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
  const dbref = ref(db);  
  const analytics = getAnalytics(app);

    const registericon = document.getElementById('registerH');
    const loginicon = document.getElementById('loginH');
    const regform = document.getElementById('registerform');
    const logout = document.getElementById('logout');
    const useremail = document.getElementById('useremail');
    const loadingscreen = document.getElementById('loadingScreen');
    const submenubtn = document.getElementById('sub-menu-button');
    const sub_menu = document.getElementById('sub-menu');
    const showfname = document.getElementById('userFirstNameDisplay');

    const updateLocalStorage = (user) => {
      get(child(dbref, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          localStorage.setItem('user-info', JSON.stringify({
            firstname: snapshot.val().fname,
            lastname: snapshot.val().lname,
          }));
          showfname.innerHTML = snapshot.val().fname;
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
        logout.classList.remove('hidden');
        useremail.innerHTML = user.email;
        //showfname.innerHTML = userfname.firstname;
        registericon.classList.add('hidden');
        loginicon.classList.add('hidden');
        regform.classList.add('hidden');
        submenubtn.classList.remove('hidden');
        sub_menu.classList.remove('hidden');
        //remove interactions
        registericon.style.pointerEvents ='none';
        loginicon.style.pointerEvents ='none';
    }
    else{
        registericon.classList.remove('hidden');
        loginicon.classList.remove('hidden');
        submenubtn.classList.add('hidden');
        useremail.innerHTML = '';
        logout.classList.add('hidden');
        regform.classList.remove('hidden');
        sub_menu.classList.add('hidden');
        //add interactions
        registericon.style.pointerEvents ='auto';
        loginicon.style.pointerEvents ='auto';
        localStorage.removeItem('user-info');
    }
    loadingscreen.classList.add('hidden');

  });

  document.getElementById('registerbutton').addEventListener('click', (e) => {
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const emailerror = document.getElementById('emailerror');
    const passworderror = document.getElementById('passerror');
    const cpassworderror = document.getElementById('cpasserror');
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        set(ref(db, 'users/' + userCredential.user.uid), {
          fname: fname,
          lname: lname,
          email: email,
          password: password,
        });

        updateLocalStorage(userCredential.user);
        
          
        const user = userCredential.user;
        console.log(user);

        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('cpassword').value = '';
        document.getElementById('fnameerror').innerHTML = '';
        document.getElementById('lnameerror').innerHTML = '';
        document.getElementById('emailerror').innerHTML = '';
        document.getElementById('passerror').innerHTML = '';
        document.getElementById('cpasserror').innerHTML = '';
        loadingscreen.classList.remove('hidden');
        // Set a timeout to hide the loading screen and refresh the page after 1 minute
        setTimeout(() => {
            loadingscreen.classList.add('hidden');
            //window.location.reload();
        }, 1000); // 60000 milliseconds = 1 minute
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/email-already-in-use'){
          emailerror.innerHTML = 'Email already in use';
        }
        else if(errorCode === 'auth/invalid-email'){
          emailerror.innerHTML = 'Invalid email';
        }
        else if(errorCode === 'auth/weak-password'){
          passworderror.innerHTML = 'Weak password';
          cpassworderror.innerHTML = '';
        }
        else if(errorCode === 'auth/missing-password'){
          passworderror.innerHTML = 'Password is required';
          cpassworderror.innerHTML = 'Password is required';
        }
        else if(errorCode === 'auth/too-many-requests'){
          alert('Too many requests, try again later');
        }
        // ..
      });
  });

  document.getElementById('logout').addEventListener('click', () => {
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


