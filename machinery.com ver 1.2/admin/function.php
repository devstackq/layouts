<?php
$servername = "localhost";
$username = "root";
$password ="";
$dbname = "db_market";

function connect(){
	$conn = mysqli_connect("localhost", "root", "", "db_market");
	if(!$conn){
		die("Connecion failed: " . mysqli_connect_error());
	}
	mysqli_set_charset($conn, urf8);
	return $conn;
}

function init() { // upload list product
	$conn = connect(); 
	$sql = "SELECT id, name FROM goods";
	$result = mysqli_query($conn, $sql);

	if(mysqli_num_rows($result) > 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)){
			$out[$row["id"]] = $row; 
		}
		echo json_encode($out);
	}else{
		echo "0";
	}
	mysqli_close($conn);
}

function selectOneGoods() {
	$conn = connect(); 
	$id = $_POST['gid'];
	$sql = "SELECT * FROM goods WHERE id = '$id' ";
	$result = mysqli_query($conn, $sql);

	if(mysqli_num_rows($result)> 0) {
		$row = mysqli_fetch_assoc($result);
		echo json_encode($row);
	}else{
		echo "0";
	}
	mysqli_close($conn);
}

function updateGoods() {
	$conn = connect();
	$id = $_POST['id'];
	$name = $_POST['gname'];
	$cost = $_POST['gcost'];
	$description = $_POST['gdescription'];
	$orders = $_POST['orders'];
	$img = $_POST['gimg'];

	$sql = "UPDATE goods SET name = '$name', cost = '$cost', description = '$description', orders = '$orders', img = '$img' WHERE id= '$id' ";
	if(mysqli_query($conn, $sql)) {
		echo "1";

	}else {
		echo "Error updating: " . mysqli_error($conn); 
	}
	mysqli_close($conn);
	writeJson();
}

function newGoods() {
	$conn = connect();
	$name = $_POST['gname'];
	$cost = $_POST['gcost'];
	$description = $_POST['gdescription'];
	$orders = $_POST['orders'];
	$img = $_POST['gimg'];
	$sql = "INSERT INTO goods (name, cost, description, orders, img)
	VALUES( '$name', '$cost','$description','$orders', '$img')";
	if(mysqli_query($conn, $sql)) {
		echo "1";
	}else {
		echo "Error : " . mysqli_error($conn); 
	}
	mysqli_close($conn);
	writeJson();
}

function writeJson(){
	$conn = connect(); 
	$sql = "SELECT * FROM goods";
	$result = mysqli_query($conn, $sql);

	if(mysqli_num_rows($result)> 0) {
		$out = array();
		while($row = mysqli_fetch_assoc($result)){
			$out[$row["id"]] = $row; 
		}
		$a = file_put_contents('../good.json', json_encode($out));	
echo write +$a;
	}else{

		echo "0";
	}
	mysqli_close($conn);
}
