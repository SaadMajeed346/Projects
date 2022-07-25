<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_POST['id'];
$title = $_POST['title'];
$fees = $_POST['fees'];
$discription= $_POST['discription'];
$content = $_POST['content'];
$duration = $_POST['duration'];

$query= "UPDATE course SET TITLE = '$title' , DESCRIPTION = '$discription' , CONTENT = '$content' , DURATION = '$duration' , FEES = '$fees'   where COURSE_ID = '$id'";

if($connection->query($query) == TRUE)
{
    echo json_encode(array("ANS"=> 'Done'));
}

?>