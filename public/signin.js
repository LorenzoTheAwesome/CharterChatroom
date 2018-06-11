function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var emailRef = document.getElementById("email");
var passwordRef = document.getElementById("password");

function LogIn() {
  document.cookie = "email=" + emailRef.value;
  document.cookie = "password=" + passwordRef.value;
  window.location.href="https://charterchatroom.firebaseapp.com/index.html"
}

function SignUp() {
  firebase.auth().createUserWithEmailAndPassword(emailRef.value, passwordRef.value);
  setTimeout(function() {LogIn()}, 1500);
}

var login = document.getElementById("log in");
var signup = document.getElementById("sign up");

login.addEventListener("click", LogIn);
signup.addEventListener("click", SignUp);