"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angularPodstawowy_1 = require("./angularPodstawowy");
var angularZaawansowany_1 = require("./angularZaawansowany");
exports.angularCompedium = {
    name: "Angular: kompedium wiedzy (TypeScript, RxJS)",
    description: "\nCelem szkolenia jest nauczenie uczestnik\u00F3w w jaki spos\u00F3b budowa\u0107 aplikacje w oparciu o framework Angular. Uczestnicy poznaj\u0105 mechanizmy frameworka co pozwoli im na samodzieln\u0105 prac\u0119 w tym \u015Brodowisku. Dodatkowo poznaj\u0105 struktury architektoniczne, kt\u00F3re mog\u0105 zosta\u0107 zaimplementowane w angularowych aplikacjach. \n",
    profile: "\nSzkolenie adresowane jest do programist\u00F3w znaj\u0105cych j\u0119zyk JavaScript, chc\u0105cych si\u0119 nauczy\u0107 Reacta od podstaw.",
    duration: 5,
    list: angularPodstawowy_1.angularBasicTraining.list.concat(angularZaawansowany_1.angularAdvancedTraining.list),
    skills: angularZaawansowany_1.angularAdvancedTraining.skills
};
