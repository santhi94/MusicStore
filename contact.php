<?php
require_once 'credent.php';

//create connection
$connecionstr="host=".DB_SERVER." port=5432 dbname=".DB_BASE." user=".DB_USER." 
password=".DB_PASS." options='--client_encoding=UTF8'";

$dbconn = pg_connect($connecionstr);

//check connection
if(!$dbconn) {
	die("Connection failed: " .pg_connect_error());
}

//query
$sql= "INSERT INTO MyUser(email,username,password,psw_repeat) VALUES   ( '".$_POST['email']."'    ,'".$_POST['username']."',
                                                                         '".$_POST['password']."' ,'".$_POST['psw_repeat']."')";


echo $sql;

//query

$result=pg_query($dbconn,$sql);


//check result
if($result) {
	echo "Your sign-up has been completed";
} else {
	echo "Something went wrong <br>";
	die('Query failed:' .pg_last_error());
}

pg_close($dbconn);

?>