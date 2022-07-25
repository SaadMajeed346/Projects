<?php
 session_start();
$connection =  new mysqli("localhost","root","","codester");
if($connection->connect_error)
    die("Connection Failed" . $connection->connect_error);

$email= $_POST['email'];
$password= $_POST['password'];


$query= "SELECT* FROM admin where EMAIL = '$email' && PASSWORD = '$password'";
$Result = $connection->query($query);
$count = mysqli_num_rows($Result);

if($count == 1)
{
    $Admin= $Result->fetch_assoc();
    $_SESSION['Name'] = $Admin["NAME"];
    $_SESSION['IMAGE'] = $Admin["IMAGE"];

    if($_POST['rememberMe'] == '1')
    {
        setcookie("ADMIN_EMAIL", $Admin["EMAIL"] , time() + (86400 * 30), "/");
        setcookie("ADMIN_PASSWORD", $Admin["PASSWORD"] , time() + (86400 * 30), "/");
    }
    echo json_encode(array("Match"=>'Sucess'));   
}
else
{
    echo json_encode(array("Match"=>'Fail'));  
}
?>