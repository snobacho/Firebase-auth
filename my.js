import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAuth,createUser} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

  const firebaseConfig = { 
    apiKey: "AIzaSyCpuRD9ddM1edm2mAM2n91y6RACdQvN34g",
    authDomain: "sign-up-5659d.firebaseapp.com",
    projectId: "sign-up-5659d",
    storageBucket: "sign-up-5659d.appspot.com",
    messagingSenderId: "154222194495",
    appId: "1:154222194495:web:103da9e2c1ac7da30bad8a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  var email = document.getElementById('email')
  var password = document.getElementById('password')

  window.signup = function(e) {
    e.preventDefault()
    var obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
    }
  
  
    createUser(auth, obj.email, obj.password) 
        .then(function(succes) {
            alert('signup success')
        })
        .catch(function(err) {
            alert('error' + err)
        })
        console.log(obj)
    
}
