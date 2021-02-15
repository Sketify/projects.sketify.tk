

function getdata() {
    
    
    var url1 = window.location.href;
    // alert(window.location.href);

    var url2 = url1.replace("https://projects.sketify.tk/project?id=prefix-9a71e0719545676a138b25f1a00c30e4dfba301d?&&", "")
    
    var id = url2.replace("&&afl=https://sketify.tk&efr=1", "")


    document.getElementById("user").value = id;

    alert(id);

    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
   
        document.getElementById("name").innerHTML = "<strong>Project ID Is Invalid </strong>";

		document.getElementById("country").src = "error.png"; 

  
    firebase.database().ref('data1/'+id).once('value').then(function (snapshot) {
        
        //here we will get data
        //enter your field name
        var name=snapshot.val().title;
        var gender=snapshot.val().name;
        var icon=snapshot.val().icon;
    

        //now we have data in variables
        //now show them in our html
        
      
      if (name.includes("undefined") == false) {

        document.getElementById("country").src = "error.png"; 
        document.getElementById("name").innerHTML = name;
        document.getElementById("gender").innerHTML = gender;
        document.getElementById("country").src = icon;

      } else {
          
    }
      
    } 
)}