<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$cId= $_POST['cId'];
$sId = $_POST['sId'];
$semDate = $_POST['semDate'];
$startDate= $_POST['startDate'];
$timing = $_POST['timing'];

$query= "UPDATE schedule SET C_ID = '$cId' , SEMINAR_DATE = '$semDate' , START_FROM_DATE = '$startDate' , TIMINGS = '$timing'   where SCHEDULE_ID = '$sId'";

if($connection->query($query) == TRUE)
{
    echo json_encode(array("ANS"=> 'Done'));
}

?>