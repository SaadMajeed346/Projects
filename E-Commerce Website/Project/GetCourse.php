<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_GET['Id'];

$query= "SELECT* FROM course where COURSE_ID = '$id'";

$queryResult = $connection->query($query);
$result= $queryResult->fetch_assoc();
echo json_encode(array("Id"=> $result["COURSE_ID"], "Title" => $result["TITLE"], "Fees" => $result["FEES"], "Discription" => $result["DESCRIPTION"], "Content" => $result["CONTENT"], "Duration" => $result["DURATION"]));
?>