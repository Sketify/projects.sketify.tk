function getdata() {



	const urlParams = new URLSearchParams(window.location.search);

	const id = urlParams.get('id');

	// Send Request to Database To Search ID

	firebase.database().ref('data1/' + id).once('value').then(function (snapshot) {

		// Set Data To Variaables

		var name = snapshot.val().title;

		var gender = snapshot.val().name;

		var icon = snapshot.val().icon;

		// Variables Set

		///////////////////////////////////////////////////////////////////////////////////////////////////////////////

		// Set Error 

		document.getElementById("name").innerHTML = "<strong>  Project ID Is Invalid </strong>";

		//   document.getElementById("country").src = "error.png"; 

		if (name.includes("undefined") == false) {

			document.getElementById("country").src = "transpa.png";
			document.getElementById("country").src = icon;
			document.getElementById("name").innerHTML = "   " + name;
			document.getElementById("gender").innerHTML = gender;
			document.getElementById("heading").innerHTML = name + " - Sketify";
			document.getElementById("des").innerHTML = name + " shared a Project on Sketify";
		}

	})
}

login();
getdata();