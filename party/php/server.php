<?php
    header('Access-Control-Allow-Origin: http://localhost:6969');
    $user = $_POST['name'];
    echo ("Hello from server: $user");
?>