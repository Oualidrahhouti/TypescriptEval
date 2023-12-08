import { User, logPerson } from "./exercice1";

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
