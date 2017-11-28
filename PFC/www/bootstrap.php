<?php
//bootstrap.php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManeger;

require_once "vendor/autoload.php"

//Create a simple "default" Doctrine ORM configuration for Annotations
$isDevMode = true;
$config = Setup::createAnnotationMetadataConfiguration(array(_DIR_."src/Produto/entidades"), $isDevMode);
//or if you prefer yaml or XML
//$config = Setup::createXMLMetadataConfiguration(array(_DIR_."/config/xml"), $isDevMode);
//$config = Setup::CreateYAMLMetadataConfiguration(array(_DIR_."/config/yaml"), $isDevMode);

//database configuration paraseters

$conn = array(
    'dbname' => 'dms',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql'

);

//obtaining the entity manager
$entityManager = EntityManeger::create($conn, $config);
?>