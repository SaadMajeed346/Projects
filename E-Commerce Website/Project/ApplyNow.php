<?php
$connection =  new mysqli("localhost","root","","codester");
// Check connection
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$q= "INSERT INTO registrationform (EMAIL, PHONE_NUMBER, C_ID, NAME, ACTION) VALUES ('$_POST[email]', '$_POST[phoneNo]',$_POST[courses] ,'$_POST[name]',0)";

if($connection->query($q) == TRUE)
    echo json_encode(array("ANS"=>'Done'));      

$connection->close();
?>