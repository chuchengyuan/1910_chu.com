<?php

header('content-type:text/html;charset=utf-8');
$mysql_conf = array(
    'host'=>'localhost:3306',
    'db_user'=>'root',
    'db_pwd'=>'19951124',
    'db'=>'WMSC_1910'
);

$mysqli = @new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pwd']);

if($mysqli->connect_errno){
    die('连接错误'.$mysqli->connect_errno);
    
}

$mysqli->query("set names utf8"); 

$select_db = $mysqli->select_db($mysql_conf['db']);  

if(!$select_db){
    die('数据库连接错误'.$mysqli->error);
}

?>