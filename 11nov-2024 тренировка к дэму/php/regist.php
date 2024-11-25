<?php
if (isset($_POST) && !empty($_POST)) {
   require_once('..\db\conn.php');
   $UserReg = $conn -> prepare('select * from Users2 where login = ?');
   $UserReg -> execute(array($_POST['login']));
   $UserReg = $UserReg->fetch();
   var_dump($UserReg);
   if(!$UserReg){
    // $UserYes = $conn -> prepare('insert')
   }
}



?>