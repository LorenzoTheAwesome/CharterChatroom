var cookies = document.cookie;
console.log("Running main.js");
if (cookies == "") {
  window.location.href="https://charterchatroom.firebaseapp.com/signin.html"
} else {
  signIn();
  setTimeout(function() {signIn();}, 100);
}

