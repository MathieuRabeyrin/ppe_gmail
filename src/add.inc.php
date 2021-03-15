<?php

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        include_once("./pdo.inc.php");
        
        function checkPostKeysAndEmptyValues() {
            $map_name = ['nom', 'prenom', 'mail', 'password'];

            if (sizeof($map_name) != sizeof($_POST))
                return FALSE;
            foreach($map_name as $key) {
                if (!isset($_POST[$key]) || strlen($_POST[$key]) == 0)
                    return FALSE;
            }
            return TRUE;
        }

        function checkEmail() {
            if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL))
                return TRUE;
            return FALSE;
        }
        
        if (checkPostKeysAndEmptyValues() && checkEmail()) {
            try {
                $query = $bdd->prepare("INSERT INTO user_mail (nom, prenom, mail, password) VALUES (?, ?, ?, ?)");
                $query->execute([$_POST['nom'], $_POST['prenom'], $_POST['mail'], $_POST['password']]);
                header('location: ../connexion.html');
            } catch (Exception $e) {
                die ("Erreur : " .$e->getMessage());
            }
        } else {
            print("erreur dans le formulaire");
        }

    } else {
        print("mauvaise methode");
    }
?>