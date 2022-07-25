<?php
$connection =  new mysqli("localhost","root","","codester");
// Check connection
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$Pic_targetDir = "AdminImages/";
$Pic_fileName = basename($_FILES["Image"]["name"]);
$Pic_targetFilePath = $Pic_targetDir . $Pic_fileName;
if(!empty($_FILES["Image"]["name"]))
{
    move_uploaded_file($_FILES["Image"]["tmp_name"], $Pic_targetFilePath);
}
$q= "INSERT INTO admin (NAME, IMAGE, EMAIL, PASSWORD) VALUES ('$_POST[Name]', '$Pic_fileName', '$_POST[Email]','$_POST[Password]')";

if($connection->query($q) == TRUE)
    echo header("location: ManageAdmin.php");     

$connection->close();
?>