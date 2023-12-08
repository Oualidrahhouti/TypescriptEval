"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercice1_1 = require("./exercice1");
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
