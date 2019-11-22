<?php
    include("./conn01.php");

    // 接收用户数据
    $username = $_REQUEST['username'];
   
    $password = $_REQUEST['password'];
  
    $sql = "select * from h5_1908 where u_name='$username' and u_pass='$password'";
    
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo '{"status":200,"msg":"登陆成功","num":"0"}';
        // echo "<script src='../js/cookie.js'></script>";
        // echo "<script>cookie.set('isLogin','true',1);cookie.set('username','$username',1);</script>";
       
    }else{
        echo '{"status":200,"msg":"用户名或密码不正确","num":"1"}';

        //  echo "<script>location.href='../html/index.html';</script>";
    }

    $mysqli->close();

?>