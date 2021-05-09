

         // Your web app's Firebase configuration
         
         var firebaseConfig = {
             apiKey: "AIzaSyBK-juZ6krPJCHHELQgOW9sFUXsS9h3wHI",
             authDomain: "sketify-f7280.firebaseapp.com",
             databaseURL: "https://sketify-f7280-default-rtdb.firebaseio.com/",
             projectId: "sketify-f7280-default-rtdb",
             storageBucket: "sketify-f7280.appspot.com",
             messagingSenderId: "463332404757",
             appId: "1:529893568319:android:3362cdc8bbdeb17c486d8a"
         };
         
         // Initialize Firebase
         
         firebase.initializeApp(firebaseConfig);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;

	
		alert("Request Code - 0.1");
	

    } else {


		alert("Request Code -0.1");
	

    }

  } else {

    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

	
		alert("Request Code -0.3");


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

	
		alert("Request Code -0.E");
	

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

