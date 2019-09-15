"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var javascript_1 = require("../../trainings/javascript");
exports.oopJsTraining = {
    name: "Object-oriented programming w JavaScript",
    description: "\nCelem szkolenia jest przekazanie informacji na temat mechanizm\u00F3w j\u0119zyka JavaScript pozwalaj\u0105cych na tworzenie skalowalnego i wydajnego oprogramowania stosuj\u0105c techniki OOP.",
    profile: "\nSzkolenie adresowane jest do programist\u00F3w, kt\u00F3rzy znaj\u0105 podstawy j\u0119zyka JavaScript  - posiadaj\u0105 wiedz\u0119 na poziomie uko\u0144czonego szkolenia JavaScript kurs podstawowy (dla programist\u00F3w).",
    duration: 2,
    list: javascript_1.javascript.lists.filter(function (_a) {
        var name = _a.name;
        return name === "Object-oriented JavaScript";
    })[0].list,
    skills: "\nPo uko\u0144czonym szkoleniu uczestnicy b\u0119d\u0105 zna\u0107 szczeg\u00F3\u0142owo zasady dzia\u0142ania mechanizm\u00F3w pomagaj\u0105cych w tworzeniu program\u00F3w w JavaScript w podej\u015Bciu obiektowym"
};
