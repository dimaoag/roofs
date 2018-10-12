<?php

$method = $_SERVER['REQUEST_METHOD'];


$message = "";
if ( $method == 'POST' ) {
    $project_name = "Art Steli";
    $admin_email = "dimaoag@gmail.com";
//    $admin_email = "tehnotop100@gmail.com";
    $form_subject = "Заявка с сайта Art Steli";
    $phone_key = 'Телефон';
    $phone_value = '';
    $message = '';

    if (!empty($_POST['phone'])) {
        $phone_value = htmlspecialchars($_POST['phone']);
        $message = '<table style="width: 100%;">'
            . '<tr style="background-color: #f8f8f8;">'
            . '<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $phone_key . '</b></td>'
            . '<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $phone_value . '</td>'
            . '</tr></table>';
    }
    function adopt($text)
    {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }


    $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        'From: ' . adopt($project_name) . ' <' . $admin_email . '>' . PHP_EOL .
        'Reply-To: ' . $admin_email . '' . PHP_EOL;

    mail($admin_email, adopt($form_subject), $message, $headers);

    $res = "1";

    echo json_encode($res);
//    header("Location: " .$_SERVER['HTTP_ORIGIN'] . "?status=1");
}