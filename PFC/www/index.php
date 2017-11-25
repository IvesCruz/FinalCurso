<?php
$loader = require __DIR__ . '/vendor/autoload.php';
use Produto\entidades\Produto;

$u = new Produto();
$u->login = "Ives Cruz";

echo "Hello ".$u->login;
?>