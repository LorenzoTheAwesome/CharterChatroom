function signOut() {
	document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	firebase.auth().signOut();
}