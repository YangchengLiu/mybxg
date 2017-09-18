<?php
    header('Content-Type:text/html;charset=utf-8');
    $dir = 'main';
    $filename = 'index';
    if(array_key_exists('PATH_INFO',$_SERVER)){
    //路径存在
    $path=$_SERVER['PATH_INFO'];
    //截取字符串
    $str = substr($path,1);
    //分割字符串
    $ret = explode('/',$str);
    if(count($ret)==2){
      $dir = $ret[0];
      $filename = $ret[1];
    }else{
       $filename = 'login';
    }

  }
  //嵌入子页面
   include('./views/'.$dir.'/'.$filename.'.html');
?>