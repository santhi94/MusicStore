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
$sql1= "SELECT * FROM MyUser WHERE username = '".$_POST['uname']."' and password= '".$_POST['psw']."';";

//echo $sql1;

if (!result1) {

	echo "Database Select Error";
	return;
}


$result1=pg_query($dbconn,$sql1);

$rows = pg_num_rows($result1);

if ($rows == 0) {

	header("Location: http://localhost/mywebsite/php/user-nf.html");

	exit();
}

echo $rows . " row(s) return.\n";

//$uname = $_POST['uname'];
//$psw = $_POST['psw'];




//check result
if($result1) {
	echo "Your sign-up has been completed";
} else {
	echo "Something went wrong <br>";
	die('Query failed:' .pg_last_error());
}

pg_close($dbconn);

?>