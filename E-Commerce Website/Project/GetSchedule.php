<?php
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$id= $_GET['Id'];

$query= "SELECT* FROM schedule s join course c on s.C_ID = c.COURSE_ID where SCHEDULE_ID = '$id'";

$queryResult = $connection->query($query);
$result= $queryResult->fetch_assoc();
echo json_encode(array("CId"=> $result["COURSE_ID"],"Id"=> $result["SCHEDULE_ID"], "SemDate" =>  $result["SEMINAR_DATE"], "StartDate" => $result["START_FROM_DATE"], "Timing" => $result["TIMINGS"]));
?>