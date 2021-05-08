firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;

	<?php
		echo "Request Code -0.1";
	?>

    } else {

	<?php
		echo "Request Code -0.1";
	?>

    }

  } else {

    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

	<?php
		echo "Request Code -0.3";
	?>

  }
});

function login(){

  var userEmail = "mskshafi99@gmail.com";
  var userPass = "Msk@12345";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

	<?php
		echo "Request Code -0.E";
	?>

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
