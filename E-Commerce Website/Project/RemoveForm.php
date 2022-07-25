<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_GET['id'];

$query= "UPDATE registrationform SET ACTION = 1 where REGIST_ID = $id";

if($connection->query($query) == TRUE)
{
    echo header("location:Dashboard.php");
}

?>