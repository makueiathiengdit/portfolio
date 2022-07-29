<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

$message = "We got your  " .  $_SERVER["REQUEST_METHOD"] . " request";
$data = ["status" => 200, "message" => $message];

echo json_encode($data);