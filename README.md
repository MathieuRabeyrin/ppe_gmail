# PPE Gmail single page 

Le sujet de ce PPE concerne la réalisation de la single page Gmail. Ci-dessous la

![site](https://user-images.githubusercontent.com/48683601/120114146-1a869600-c17e-11eb-8a54-0a9bb9742597.jpg)
![formulaire](https://user-images.githubusercontent.com/48683601/120114156-283c1b80-c17e-11eb-9ec6-6d9c6ec7f4fd.png)

La navigation est faite par le biais du petit bouton rouge pour aller vers le bas et
par des items qui se trouvent dans la barre de navigation : « pour les pros » et
« connexion » pour aller vers le haut. La barre de navigation est toujours
présente fixée dans la partie haute de la page.
## Les phases de réalisation
Dans un premier moment vous devez vous concentrer sur la réalisation de la
maquette statique. Travaillez d’abord toute la structure html avec des balises
structurantes comme header, nav, main et footer. Cela vous facilitera la tâche
lorsque vous allez décomposer la maquette en différentes sources php. Lorsque
vous terminez et validez la partie html, commencez à mettre en forme en css
chaque partie de la page. Je vous conseille pour la css de commencer d’abord
par le reset : mettre à zéro toutes les propriétés par défaut html et ensuite
passez aux modules et thème. La sémantique css doit être anglophone. Si dans
la structure html vous ajoutez des balises div justifiez le sens de ces balises en
ajoutant des attributs rôle. Si vous avez oubliez les valeurs des attributs rôle je
vous propose d’aller voir à cette adresse des exemples :
https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html

Si vous avez fini est validé la structure html et css pour la navigation verticale
appliquez des liens internes dans les balises < a > et servez-vous des ID comme
référence d’ancrage. Pour les effets de scroll animé faites usage toujours des
propriétés css.

## Charte graphique et typographique
- Police de caractère : Open-Sans, sans-serif, taille de base dans body 1.6rem
- Couleur des boutons et items : #dd5347
- Couleur de fond : #fafafa
- Le bolder : 300 (font-weight)

## Consignes techniques

1. Les technologies autorisées sont : html5 css3 et javascript,
fontAwesome.
2. Utilisez Visual Studio Code ou équivalent.
3. Largeur des containers auto.
4. La hauteur de chaque partie sauf le header doit couvrir 1/100 d’écran en
hauteur.
5. Les sources, logo photo se trouvent dans le répertoire « sources » du
partiel.
Votre rendu doit être publié sur GITHUB.
6. L’ergonomie et la clarté de votre code sera pris en compte dans la
notation. Commentez chaque partie clé de votre code : html, css, js.

---
# Partie PHP

Dans cette deuxième partie lorsque vous êtes sur la deuxième page, vous devez
par le biais de php envoyer coté serveur toutes les données utilisateur. Pour
cela il faudra créer d’abord une BDD « **user_inscription** », puis une table
« **user_mail** ». Cette table doit contenir les champs suivants :
- Id : int,
- Nom : string,
- Prenom : string,
- Mail : string,
- Password : string

L’envoi de ces données doit se faire automatiquement lorsque vous passez à la
deuxième page. Il est conseillé d’utiliser les super globales php pour indexer
l’ensemble des données et mettre en place la requête « Insert into... »
