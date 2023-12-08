import { User, logPerson } from "./exercice1";
import { Administrateur, UtilisateurAnonyme } from "./exercice2";

// exercice 1
let user: User = {
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

logPerson(user);

// *************************************

// exercice 2
const utilisateurAdmin: Administrateur = {
  nom: "admin",
  email: "admin.email@gmail.com",
  ip: "192.168.1.1",
  dt_connexion: new Date(),
  login: "admin_login",
  password: "1234",
};

const utilisateurAnonyme: UtilisateurAnonyme = {
  ip: "192.168.1.2",
};

const utilisateurAvecNom: UtilisateurAnonyme = {
  nom: "Utilisateur Anonyme",
  ip: "192.168.1.3",
};

console.log("admin", utilisateurAdmin);
console.log("user 1", utilisateurAnonyme);
console.log("user 2", utilisateurAvecNom);
