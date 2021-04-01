<?php

//THIS FILE IS FOR PART-IX:- https://youtu.be/LlmIJMP6HCs

header("Access-Control-Allow-Origin: *");
//Your server name, it will be same for all 000webhost accounts
$servername = "remotemysql.com";

//Your DB username
$username = "Qm9FfsRJNG";

//Your DB password
$password = "zSsNGEQFAx";

//Your DB name, required if you have two DB and want to connect to a specific one
$dbname = "Qm9FfsRJNG";

//Connect to MySQL
$mysql = mysqli_connect($servername, $username, $password, $dbname);

if ($mysql->connect_error) {
  
  echo "Connection failed: " . $mysql->connect_error;

} else {

//This folder will contain your all uploaded files
$target_path = "project_files/";

//Now this contain a path with your filename
$target_path = $target_path . basename( $_FILES['uploadedfile']['name']); 

//This will create a data where all your filename are stored
$table = "CREATE TABLE IF NOT EXISTS files(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(30) NOT NULL
)";

$mysql->query($table);

$filepath = $target_path;


//This will upload file to the path
if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) {
    $filename = basename( $_FILES['uploadedfile']['name']);
    
    echo "The file ".  $filename. 
    " has been uploaded";
    
    //This will add the filename into the DB
    $sql = "INSERT INTO files (filename) VALUES ('$filename')";
    if ($mysql->query($sql) === TRUE) {
    echo "New record created successfully<br>";
       echo 'http://projects.sketify.tk/project_files/'.$filename ;
    
} else {
    echo "Error: " . $sql . "<br>" . $mysql->error;
}
} else{
    echo "Error Uploading";
}
  
}

?>
