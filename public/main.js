if (document.cookie == "") {
  window.location.href = "https://charterchatroom.firebaseapp.com/signin.html"
}
else {
  firebase.auth().signInWithEmailAndPassword(getCookie("email"), getCookie("password"));
}