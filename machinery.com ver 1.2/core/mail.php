<?php
// read json file
$json = file_get_contents('../good.json');
$json = json_decode($json, true);
//letter
$message = '';
$message .= '<h1> Order in shop</h1>';
$message .= '<p>Phone: '.$_POST['phone'].' </p>';
$message .= '<p>Email: '.$_POST['email'].' </p>';
$message .= '<p>Name: '.$_POST['name'].' </p>';

$cart = $_POST['cart'];
$sum = 0;
foreach($cart as $id=>$count) {
	$message .= $json[$id]['name'].'----';
	$message .= $count.'----';
	$message .= $count*$json[$id]['cost'];
	$message .= '<br>';
	$sum = $sum + $count+ $json[$id]['cost'];
}
$message .= 'All: '.$sum;
// print_r($message);
$to = 'upzq@mail.ru'.',';
$to .= $_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title> Order</title></head><body>';
$headers =  'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Order  in shop', $spectext.$message.'</body></html>', $headers);

if($m) {echo 1;} else{echo 0;}





