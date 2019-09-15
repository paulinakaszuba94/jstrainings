"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functional_1 = require("../../trainings/functional");
var rxjs_1 = require("../../trainings/rxjs");
exports.functionalAnd = {
    name: "JavaScript: Programowanie funkcyjne i reaktywne",
    description: "Paradygmaty programowania reaktywnego i funkcyjnego są coraz cześciej, używane w językach" +
        " programowania. Strumienie, czyste funkcje, niemutowalność stanu, składanie funkcji, funkcje wyższego" +
        " rzędu, monady.... Zrozumienie podejścia funkcyjnego daje programiście dużo większe możliwości, a kod" +
        " zaimplementowany w ten sposób jest zdecydowanie bardziej ekspresywny, skalowalny i łatwiejszy do testowania.",
    profile: "Szkolenie adresowane jest do programist\u00F3w, kt\u00F3rzy znaj\u0105 przynajmniej podstawy j\u0119zyka Java lub JavaScript",
    duration: 2,
    list: functional_1.functional.list.concat(rxjs_1.rxjs.list),
    skills: "\nPo uko\u0144czonym szkoleniu uczestnicy b\u0119d\u0105 zna\u0107 szczeg\u00F3\u0142owo zasady podej\u015Bcia reaktywnego i funkcyjnego."
};
