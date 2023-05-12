        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getAuth,
                createUserWithEmailAndPassword,
                signInWithEmailAndPassword,
                onAuthStateChanged,
                signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
    
        const firebaseConfig = {
          apiKey: "AIzaSyBX7WftlaH92T1Nf0pSZV9QfmwcOfgDOm4",
          authDomain: "authcms-74cbd.firebaseapp.com",
          projectId: "authcms-74cbd",
          storageBucket: "authcms-74cbd.appspot.com",
          messagingSenderId: "387435299184",
          appId: "1:387435299184:web:4ccf3e91605bd5fc4c0fb5"
        };
        
        const app = initializeApp(firebaseConfig);
        const auth= getAuth(app)
        const userEmail = document.querySelector('#userEmail')
        const userPassword = document.querySelector('#userPassword')
        const authForm = document.querySelector('#authForm')
        const signUpButton = document.querySelector('#signUpButton')
        const signInButton = document.querySelector('#signInButton')
        const secretContent = document.querySelector('#secretContent')
        const signOutButton = document.querySelector('#signOutButton')

        secretContent.style.display = 'none'

        const userSignUp = async() => {                 // * sign up
            const signUpEmail = userEmail.value;
            const signUpPassword = userPassword.value;
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                alert("Created");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            })
        }
 
        const userSignIn = async() => {               // * sign in
            const signInEmail = userEmail.value;
            const signInPassword = userPassword.value;
            signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(" signed in successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
        }

        const checkAuthState = async() => {      // * chackout state 
            onAuthStateChanged(auth, user => {
                if(user) {
                    authForm.style.display = 'none';
                    secretContent.style.display = 'block';
                }
                else {
                    authForm.style.display = 'block';
                    secretContent.style.display = 'none';
                }
            })
        }

        const userSignOut = async() => {
            await signOut(auth);
        }
        
        checkAuthState();

    
        signUpButton.addEventListener('click', userSignUp)
        signInButton.addEventListener('click', userSignIn)
        signOutButton.addEventListener('click', userSignOut);
