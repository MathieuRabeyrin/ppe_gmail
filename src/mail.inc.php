<?php
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        include_once("./pdo.inc.php");

        try {
            $query = $bdd->prepare("SELECT COUNT(mail) AS isUsed FROM user_mail WHERE mail = ?");
            $query->bindValue(1, $_GET['mail'], PDO::PARAM_STR);
            $query->execute();
            echo json_encode($query->fetch());
        } catch (Exception $e) {
            die ("Erreur : " .$e->getMessage());
        }
    } else
        print("405 Method Not Allowed");

?>