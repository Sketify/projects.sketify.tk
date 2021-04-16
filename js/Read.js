function getdata() {


	var url1 = window.location.href;

	var url2 = url1.replace("https://projects.sketify.tk/project?id=prefix-9a71e0719545676a138b25f1a00c30e4dfba301d?&&", "")

	var id = url2.replace("&&afl=https://sketify.tk&efr=1", "")


	///////////////////////////////////////////// ////////////////////////////////////////////////////////////////

	// ============================================= Main Header ==============================================


	// ============================================= Main Header End ==========================================

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// ============================================== Main Body Start =========================================

	// Send Request to Database To Search ID

	firebase.database().ref('data1/' + id).once('value').then(function (snapshot) {

		// Set Data To Variaables

		var name = snapshot.val().title;

		var gender = snapshot.val().name;

		var icon = snapshot.val().icon;

		// Variables Set

		///////////////////////////////////////////////////////////////////////////////////////////////////////////////

		// Set Error 

		document.getElementById("name").innerHTML = "<strong>  Project ID Is Invalid </strong>(Check The Url)";

		//   document.getElementById("country").src = "error.png"; 

		if (name.includes("undefined") == false) {

			document.getElementById("country").src = "transpa.png";
			document.getElementById("country").src = icon;
			document.getElementById("name").innerHTML = "   " + name;
			document.getElementById("gender").innerHTML = gender;
			document.getElementById("heading").innerHTML = name + " - Sketify";
			document.getElementById("des").innerHTML = name + " shared a Project on Sketify";
		}

		// ============================================== Main Body End ===========================================

		///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	})
}

getdata();