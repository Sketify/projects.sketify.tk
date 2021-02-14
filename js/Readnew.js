function getdata() {
	var user = document.getElementById("user").value;
	//firebase data retrieval function
	//path of your data
	//.once will get all your data in one time


	firebase.database().ref('data1/' + user).once('value').then(function (snapshot) {
		//here we will get data


		//enter your field name
		var name = snapshot.val().title;
		var gender = snapshot.val().name;
		var country = snapshot.val().icon;

		//now we have data in variables
		//now show them in our html


		document.getElementById("name").innerHTML = "	    <strong>   Project ID Is Invalid </strong>";

		document.getElementById("country").src = "https://www.pngitem.com/pimgs/b/130-1308065_caution-sign-png.png"; 

	

	// Check If Valid (or) Invalid

		if (name.includes("undefined")) {

			document.getElementById("name").innerHTML = name;

			document.getElementById("gender").innerHTML = gender;

			document.getElementById
("country").src = country;

		};


		// 

		var img = document.createElement('img')

		//  img.src 

		= country

		//  document.body.appendChild(img)

	})
}