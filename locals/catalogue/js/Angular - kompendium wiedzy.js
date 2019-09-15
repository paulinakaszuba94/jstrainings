"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angularPodstawowy_1 = require("./angularPodstawowy");
var angularZaawansowany_1 = require("./angularZaawansowany");
exports.angularCompedium = {
    name: "Angular: kompedium wiedzy (TypeScript, RxJS)",
    description: "\nSzkolenie jest po\u0142\u0105czeniem szkole\u0144 z Angulara (podstawowy i rozszerzony) oraz TypeScriptu i RXJS",
    profile: "\nSzkolenie adresowane jest do programist\u00F3w znaj\u0105cych j\u0119zyk JavaScript, chc\u0105cych si\u0119 nauczy\u0107 Reacta od podstaw.",
    duration: 5,
    list: angularPodstawowy_1.angularBasicTraining.list.concat(angularZaawansowany_1.angularAdvancedTraining.list),
    skills: angularZaawansowany_1.angularAdvancedTraining.skills
};
