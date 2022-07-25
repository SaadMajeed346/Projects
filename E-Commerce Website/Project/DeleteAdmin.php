<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_POST['Id'];

$query= "DELETE FROM admin where ADMIN_ID = '$id'";

if($connection->query($query) == TRUE)
{
    echo json_encode(array("ANS"=> 'Done'));
}

?>