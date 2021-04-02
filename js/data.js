
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



			var url_string = window.location.href;
			var url = new URL(url_string);
			var a = document.getElementById('link_main');
			a.href = "project.sketify://" + url;

