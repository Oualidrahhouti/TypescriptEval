"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercice1_1 = require("./exercice1");
// exercice 1
var user = {
    name: "M'hamed",
    age: 27,
    occupation: "Dev",
    compentences: ["Flutter", "Java"],
    adresse: {
        rue: "1 rue",
        cp: 99,
        ville: "Paris",
    },
};
(0, exercice1_1.logPerson)(user);
// *************************************
// exercice 2
var utilisateurAdmin = {
    nom: "admin",
    email: "admin.email@gmail.com",
    ip: "192.168.1.1",
    dt_connexion: new Date(),
    login: "admin_login",
    password: "1234",
};
var utilisateurAnonyme = {
    ip: "192.168.1.1",
};
var utilisateurAvecNom = {
    nom: "Utilisateur Anonyme",
    ip: "192.168.1.1",
};
console.log("admin", utilisateurAdmin);
console.log("user 1", utilisateurAnonyme);
console.log("user 2", utilisateurAvecNom);
