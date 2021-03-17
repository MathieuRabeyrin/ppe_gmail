<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        function saniziteData($str) {
            return htmlspecialchars(stripslashes(trim($str)));
        }

        $input = array(
            "nom" => saniziteData($_POST['nom']),
            "prenom" => saniziteData($_POST['prenom']),
            "mail" => saniziteData($_POST['mail']),
            "password" => saniziteData($_POST['password']),
            "token" => saniziteData($_POST['csrf_token'])
        );

        function checkCRSF_TOKEN($input) {
            session_start();

            if (!isset($_SESSION['token']) || !isset($input['token']))
                return FALSE;
            if (hash_equals($_SESSION['token'], $input['token']))
                return TRUE;
            return FALSE;
        }

        function checkPostKeysAndEmptyValues($input) {
            $whitelist = ['nom', 'prenom', 'mail', 'password', 'token'];

            if (sizeof($whitelist) != sizeof($input))
                return FALSE;
            foreach($whitelist as $key) {
                if (!isset($input[$key]) || strlen($input[$key]) == 0)
                    return FALSE;
            }
            return TRUE;
        }

        function checkEmail($input) {
            if (filter_var($input['mail'], FILTER_VALIDATE_EMAIL))
                return TRUE;
            return FALSE;
        }

        function insertValues($input) {
            include_once("./pdo.inc.php");

            try {
                $query = $bdd->prepare("INSERT INTO user_mail (nom, prenom, mail, password) VALUES (:nom, :prenom, :mail, :password) ON DUPLICATE KEY UPDATE mail = :mail");
                $query->bindValue(':nom', $input['nom'], PDO::PARAM_STR);
                $query->bindValue(':prenom', $input['prenom'], PDO::PARAM_STR);
                $query->bindValue(':mail', $input['mail'], PDO::PARAM_STR);
                $query->bindValue(':password', $input['password'], PDO::PARAM_STR);
                $query->execute();
                header('location: ../connexion.html');
            } catch (Exception $e) {
                die ("Erreur : " .$e->getMessage());
            }
        }

        if (checkCRSF_TOKEN($input) && checkPostKeysAndEmptyValues($input) && checkEmail($input))
            insertValues($input);
    } else
        print("405 Method Not Allowed");
?>