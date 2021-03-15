DROP DATABASE IF EXISTS user_inscription;

CREATE DATABASE user_inscription;

USE user_inscription;

CREATE TABLE user_mail (
       id INT AUTO_INCREMENT,
       nom VARCHAR(255) NOT NULL,
       prenom VARCHAR(255) NOT NULL,
       mail VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       PRIMARY KEY(id)
);
