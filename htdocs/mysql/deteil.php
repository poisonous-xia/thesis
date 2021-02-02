<?php
    header("Content-type:text/html;charset=utf-8");
    header('Access-Control-Allow-Origin: *');
    //统一发返回格式
    $responseData = array("code" => 0, "message" => "");

    //1.链接数据库
    $link = mysql_connect("localhost","root","123456");
    //2.判断是否链接成功
    if(!$link){
        $responseData['code'] = 1;
        $responseData['message'] = "数据库链接失败";
        //返回到前端页面
        echo json_encode($responseData);
        exit;
    }
    //3.设置字符集
    mysql_set_charset("utf8");

    //4.选择数据库
    mysql_select_db("xzp");

    //5.准备sql语句进行插入操作
    $sql = "SELECT * FROM contactlist";

    //6.发送sql语句
    $res = mysql_query($sql);

    $arr = array();

    //7.处理结果
    while($row = mysql_fetch_assoc($res)){
        array_push($arr,$row);
    }

    echo json_encode($arr);
    //关闭数据库
    mysql_close($link);
?>