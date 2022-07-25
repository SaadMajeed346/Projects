<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_GET['Id'];

$query= "SELECT* FROM admin where ADMIN_ID = '$id'";

$queryResult = $connection->query($query);
$result= $queryResult->fetch_assoc();
echo json_encode(array("Id"=> $result["ADMIN_ID"], "Name" => $result["NAME"], "Email" => $result["EMAIL"]));
?>