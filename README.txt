﻿## Welcome to Sketify!!

You can use the [editor on GitHub](https://github.com/Sketify/projects.sketify.tk/edit/projects/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Sketify/projects.sketify.tk/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.





















---------------

<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
   <head>
      <title>Retrieve data</title>
      <!-- For Hiding an Object (Use Class="hidden")-->
      <style>
         .hidden {
         display: none;
      </style>
      <!-- Make Of Links-->
      <link href="https://sketchware.io/css/deeplink.css" rel="stylesheet"/>
      <link href="bootstrap.min.css" rel="stylesheet">
      <!--<link href='http://sketchware.io/css/deeplink.css' rel='stylesheet'> </link>-->
      <link rel="shortcut icon" type="image/ico" href="favicon.ico" />
      <!-- End Of Links-->
      <!--Meta Links-->
      <meta content='IE=edge' http-equiv='X-UA-Compatible'/>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content='width=device-width, initial-scale=1' name='viewport'/>
      <meta property="og:url" content="https://sketify.tk"/>
      <!-- End Meta Links-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://sketchware.io/vendor/bootstrap/js/bootstrap.min.js"></script>
      <!--Cascad Sylings-->
      <style>
         body {
         height: 100%;
         width: 100%;
         font-family: 'Roboto-Medium','Helvetica','Arial,sans-serif';
         }
         @media (max-width: 768px) {
         .container {
         max-width: 720px;
         }
         }
         .card{
         margin-top : 48px;
         }
         .card-header{
         background-color: #008dcd;
         }
         .card-header img{
         height: 24px;
         }
         .card-body img{
         height: 60px;
         }
         .row {
         margin-bottom: 16px;
         }
         .row > div {
         margin-bottom: 8px;
         }
         .row > .col-sm-3 {
         font-weight: bold;
         }
         .align-right {
         display: flex;
         justify-content: flex-end;
         flex-wrap: wrap;
         }
         .align-right > .btn-container {
         margin-left: 8px;
         }
         .btn-container {
         text-decoration: none !important;
         }
         .btn-secondary {
         background: transparent;
         color: var(--bc-primary);
         border: 1px solid lightgrey;
         }
         .btn-secondary:hover {
         background: rgba(0,0,0,.05);
         color: var(--bc-primary);
         }
      </style>
      <!-- Header Scripts-->
      <script>
         // Get Site Url To String Variable $url
         
         <?php  
            if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')   
                 $url = "https://";   
            else  
                 $url = "http://";   
            // Append the host(domain name, ip) to the URL.   
            $url.= $_SERVER['HTTP_HOST'];   
            
            // Append the requested resource location to the URL   
            $url.= $_SERVER['REQUEST_URI'];    
              
            ?> 
         
         // Got Site Url In $url
         
         document.getElementById("country").hide();
         
      </script>


      <!-- End Header Scripts-->

      <!--  ===============  Main Head  ===============  -->


   </head>
   

<!--  ===============  Main Body  ===============  -->


   <body>
      <!-- Main Header Start-->
      <div class="container">
         <div class="card">
            <div background-color="#008dcd" class="card-header">
               <img alt="Sketchub" class="img-responsive" width="90" height="90" src="https://raw.githubusercontent.com/Sketify/projects.sketify.tk/projects/gt-sketify-logo-white.png">
            </div>
            <!-- Main Header End-->


            <!-- Main Body Start-->


            <div class="card-body">
               <h5 class="card-title">Somebody shared you a project from Sketify.</h5>
               <div class="row">

	<!-- Title Section -->
                  <div class="col-sm-3">Title</div>
                  <div class="col-sm-9">
                     <img id="country" src="transpa.png" alt="Project Icon" style="width:40px;height:35px;">
                     <a id="name" > </a>
                  </div>

	<!-- Published By Whom -->
                  <div class="col-sm-3">Published by</div>
                  <div  id="gender" class="col-sm-9">
                  </div>

         <!-- Note Section -->
                  <div class="col-sm-3">Note</div>
                  <div class="col-sm-9">You must have installed Sketify in your Android phone to access this project.</div>
      
	<!-- Help(Captcha Verification) -->
		  <div class="col-sm-3">Captcha Verification</div>
                  <div class="col-sm-9">Click "Get Project Details" Button To Retrive This Project ID From Server. </div>
		
</div>

               <!-- Main Body End-->
               <!-- Get Buttons-->
               <div class="align-right">
                  <a id="open" onClick="getdata();"class="btn-container" target="_blank">  
                        <h4 class="btn btn-secondary">Get Project Details</h4>
                  </a>
                  <a class="btn-container" href="http://sketify.tk/" target="_blank">
                     <h4 class="btn btn-secondary">Install Sketify</h4>
                  </a>
                  <a class="btn-container" onClick="openLink()" id="link_main" >
                     <h4 class="btn btn-primary" id="btn_open_project">Open Project</h4>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <!--
         <div class='container'>
         <div class='card' style="padding:15px;">
         <p style="margin:0px;">Use these badges in your project to promote your content on Sketchub. 
         <a href="http://sketchub.in/branding.html" target="_blank">
            <img src="https://sketchub.in/images/brandings/badge_english_dark.png" alt="get it on sketchub" align="middle" width="150px">Find More
         </a>
         </p>
         </div>
         </div>
         -->
      <!-- Deeplink Stylesheet-->
      <!-- Deeplink Stylesheet-->
      <input type="text" id="user" required="required" >
      <!-- Functions Start -->
      <!-- Script To Get Credentials-->
      <script>
         var url =  "<?= $url ?>";
         
         if (url.includes("msk") !== false )  {            
                 
		document.getElementById("gender").innerHTML = url; 
		 <?php
            $uri = str_replace( 'https://sketify.000webhostapp.com/owritten-?id=msk-refer-sketifyapplicationparam-9a71e0719545676a138b25f1a00c30e4dfba301d-1613274417-0-AXz_t-Un1QG914Iv1MvBia1f7ScUVzvJ95H9QICmvFknUMQJHqHp0241u54UDlH24c2cU3bXYzYczYN8jxWpicK5j7i_ZXl-RqMVoIoQRrYX0KnaYuBuKd9xGoUky4jAhyrAUiYY7jbGWNOTA_oYb1G_jEqFH8Ad2ofjx3Fac6EQpLaolsUvsjXLGcI1KGeP_62RtQ_sQGE7u5VEE_dBV-h-FlSyB4bZ6DFwQZHmoMerZQUchYrGj5UrdIahOb-bi8j5jdiauyWUyrTKX8cFGqhOgtVHtgKDYo_zVcvLTipIcW5HtUpk1RCR4QcWUPcj0w', '', $url );
            $urid = str_replace( '&afI=https://sketify.tk&efr=1' , '', $uri );
                
                $vari = json_encode($urid);
                
                
                ?>
            
                
            
             }
          
              
              
              document.getElementById("user").value = "<?= $urid ?>";
              
              
      </script>
      <!-- Scripts To Get Credentials End -->
      <!-- Firebase Credentials-->
      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase.js"></script>
      <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#config-web-app -->
      <script>
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
         
      </script>
      <script type="text/javascript" src="js/Readnew.js"></script>
      <script>
         // Extra Codes Will Go Here...
         
         click_event = new CustomEvent("click"); 
         
             btn_element = document.querySelector("#open"); 
         
             btn_element.dispatchEvent(click_event); 
         
         document.getElementById("#open").click();
         
         $(document).ready( function(){
         var id = $.urlParam("id");
         
         $('#btn_open_project').click(function(e) {
         openLink(id);
         });
         
         
      </script>
      <!--Function To Open Project-->
      <script>
         function openLink() {
             var uid = "<?= $urid ?>"
         	var url = "https://sketifyproject.page.link/?link=https://sketify.tk/" + uid + "&apn=com.sketify.msk&afl=https://sketify.tk&efr=1";
         	window.open(url);
         	
         }
             
      </script>
      <!-- End Of Firebase Credentials-->
      <!-- Functions End-->
   </body>
</html>
