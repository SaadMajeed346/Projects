<?php
$connection =  new mysqli("localhost","root","","codester");
// Check connection
if ($connection->connect_error) {
  die("Connection failed: " . $connection->connect_error);
}

$q= "INSERT INTO schedule (C_ID, SEMINAR_DATE, START_FROM_DATE, TIMINGS) VALUES ($_POST[courses],'$_POST[seminarDate]', '$_POST[startingDate]', '$_POST[timing]')";

if($connection->query($q) == TRUE)
    echo json_encode(array("ANS"=> 'Done'));
else
    echo json_encode(array("ANS"=> 'Fail'));   

$connection->close();
?>