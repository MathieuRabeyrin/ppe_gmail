<?php
    session_start();

    $token = bin2hex(random_bytes(32));
    $_SESSION['token'] = $token;
?>

<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="gmail">
    <title>Gmail</title>
    <link rel="icon" href="./assets/favicon.ico">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/nav.css">
    <link rel="stylesheet" href="./css/toast.css">
    <link rel="stylesheet" href="./css/form.css">
    <link rel="stylesheet" href="./css/home.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">gmail</a></li>
                <li><a href="#">pour les pros</a></li>
                <li><a href="connexion.html">connexion</a></li>
                <li><a href="#create" class="active">créer un compte</a></li>
            </ul>
        </nav>
        <a class="arrow" href="#create" aria-hidden="true" tabindex="-1"><img src="./assets/arrow.png" alt="arrow"></a>
    </header>
    <main>
        <h1>Retrouvez la fluidité et la simplicité de Gmail sur tous vos appareils</h1>
        <a href="#create">CREER UN COMPTE</a>
    </main>
    <footer id="create">
        <section>
            <div role="region" aria-labelledby="heading">
                <h2 id="heading">Une boîte de réception entièrement repensée</h2>
                <p>Avec les nouveaux onglets personnalisables, repérez immédiatement les nouveaux messages et choisissez ceux que vous souhaitez lire en priorité.</p>
            </div>
            <div role="alert" class="toast hide">
                <img src="./assets/alert.svg" alt="erreur">
                <p></p>
                <img tabindex="0" src="./assets/x.svg" alt="fermer">
            </div>
            <form action="./src/add.inc.php" method="POST">
                <fieldset>
                    <legend>Créer un compte</legend>
                    <label for="nom">Nom *</label>
                    <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
                    <label for="prenom">Prénom *</label>
                    <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" required>
                    <label for="mail">Mail *</label>
                    <input type="email" id="mail" name="mail" placeholder="Votre mail" required>
                    <label for="password">Choisir votre mot de passe *</label>
                    <input type="password" id="password" name="password" placeholder="Votre mot de passe" required>
                    <input type="hidden" name="csrf_token" value="<?php echo $token ?>">
                    <input type="submit" value="VALIDER VOTRE COMPTE">
                </fieldset>
            </form>
        </section>
    </footer>
    <script src="./js/Form.js"></script>
    <script src="./js/arrow.js"></script>
    <script src="./js/check.js"></script>
</body>
</html>