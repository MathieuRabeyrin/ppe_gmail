<?php
    try {
        $dsn = "mysql:host=localhost;dbname=user_inscription;charset=utf8";
        $opt = array(
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        $bdd = new PDO($dsn,'admin','admin', $opt);
    } catch (Exception $e) {
        die ('Erreur : ' .$e->getMessage());
    }
?>