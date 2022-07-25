<?php
$connection =  new mysqli("localhost","root","","codester");
// Check connection
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$Pic_targetDir = "CourseImages/";
$Pic_fileName = basename($_FILES["Image"]["name"]);
$Pic_targetFilePath = $Pic_targetDir . $Pic_fileName;
if(!empty($_FILES["Image"]["name"]))
{
    move_uploaded_file($_FILES["Image"]["tmp_name"], $Pic_targetFilePath);
}
$q= "INSERT INTO course (TITLE, DESCRIPTION, CONTENT, DURATION, IMAGE, FEES) VALUES ('$_POST[Title]','$_POST[Discription]', '$_POST[Content]', '$_POST[Duration]','$Pic_fileName', $_POST[Fees])";

if($connection->query($q) == TRUE)
    echo header("location: ManageCourses.php");
else
    echo "ERROR";     

$connection->close();
?>