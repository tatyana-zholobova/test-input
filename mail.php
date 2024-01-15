<?php

$post = $_POST;
if (!$post) {
  header($_SERVER['SERVER_PROTOCOL'] . " 404 Not Found"); // возвращаем 404 если не найдено
  die();
}

if (is_array($post)) {
  $types = [
    'form_name' => 'Название формы',
    'phone' => 'Телефон',
    'name' => 'Имя',
    'message' => 'Сообщение',
  ];

  $to = ['aquy@yandex.ru', 'lead@chiedocover.ru'];
  $subject = 'каркасстула.рф - новая заявка';
  $headers = "From: no-replay@xn--80aaa1bbh6akakl.xn--p1ai <no-replay@xn--80aaa1bbh6akakl.xn--p1ai>";
  $headers .= "\nReply-To: <no-replay@xn--80aaa1bbh6akakl.xn--p1ai>";
  $headers .= "\nReturn-Path: <no-replay@xn--80aaa1bbh6akakl.xn--p1ai>";
  $headers .= "\nDate: " . date('r');
  $headers .= "\nMIME-Version: 1.0";
  $headers .= "\nContent-type: text/html; charset=utf-8 \r\n";

  $tbody = '';
  $comment = '';

  foreach ($post as $key => $item) {
    if (isset($types[$key])) {
      $tbody .= "<tr><td>" . $types[$key] . ":</td><td>" . strip_tags($item) . "</td></tr>";
      $comment .= $types[$key] . ": " . strip_tags($item) . "\r\n";
    }
  }

  $message = '<html><body>';
  $message .= '<h4>Новая заявка с сайта каркасстула.рф</h4>';
  $message .= '<table>';
  $message .= $tbody;
  $message .= '</table>';
  $message .= '</body></html>';

  foreach ($to as $item) {
    $result = mail($item, $subject, $message, $headers);
  }

  $utm = [
    'utm_campaign' => '',
    'utm_content' => '',
    'utm_medium' => '',
    'utm_source' => '',
    'utm_term' => '',
  ];

  foreach ($utm as $key => $value) {
    if (isset($_COOKIE['_uc_' . $key])) {
      $utm[$key] = $_COOKIE['_uc_' . $key];
    }
  }

  $queryUrl = 'https://backend.chiedocover.ru/external-form/external-form';
  $queryData = http_build_query([
    'landing' => 'каркасстула.рф',
    'sourceId' => '35',
    'phone' => isset($post['phone']) ? $post['phone'] : '',
    'params_json' => json_encode([
      'UTM_CAMPAIGN' => $utm['utm_campaign'],
      'UTM_CONTENT' => $utm['utm_content'],
      'UTM_MEDIUM' => $utm['utm_medium'],
      'UTM_SOURCE' => $utm['utm_source'],
      'UTM_TERM' => $utm['utm_term'],
    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    'comment' => $comment,
  ]);

  $curl = curl_init();
  curl_setopt_array($curl, [
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
  ]);

  curl_exec($curl);
  curl_close($curl);

  echo '1';
}
