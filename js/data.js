
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
            var a = document.getElementById('btn_open_project');
            a.href = "projects.sketify://" + url;


         function openLink() {


    var url1 = window.location.href;

    var url2 = url1.replace("https://projects.sketify.tk/project?id=prefix-9a71e0719545676a138b25f1a00c30e4dfba301d?&&", "")
    
    var id = url2.replace("&&afl=https://sketify.tk&efr=1", "")

        var opener = 
            "https://sketifyproject.page.link/?link=https://sketify.tk/" 
            + id + 
            "&apn=com.sketify.msk&afl=https://sketify.tk&efr=1";

            // Open App

            window.open(opener);  


            
         }