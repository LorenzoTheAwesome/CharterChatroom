function signOut() {
	document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	firebase.auth().signOut();
}
function signIn() {
	firebase.auth().signInWithEmailAndPassword(getCookie("email"), getCookie("password"));
}
function updateChatrooms() {

}