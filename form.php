<?php
    require 'db.php';

    $data = $_POST;

    $user = R::dispense('users');
    $user->email = $data['email'];
    $user->phone = $data['phone'];
    
    if($data['radio'] == 'radio1') {
        $user->time = "6 месяцев";
    }else if($data['radio'] == 'radio2') {
        $user->time = "1 год";
    }else if($data['radio'] == 'radio3') {
        $user->time = "2 года";
    }else if($data['radio'] == 'radio4') {
        $user->time = "Позже";
    }

    if(isset($data['checkbox'])){
        $user->acception = "согласен";
    }else{
        $user->acception = 'не согласен';
    }
    R::store($user);
?>
