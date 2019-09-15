"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var javascript_1 = require("../../trainings/javascript");
exports.jsBasicTraining = {
    name: 'JavaScript: kurs podstawowy (dla programistów)',
    description: javascript_1.javascript.mainDescription + '\nCelem szkolenia jest przekazanie wiedzy na temat mechanizmów' +
        ' działania języka' +
        ' JavaScript.\n' +
        'Uczestnicy nauczą się budować aplikacje w oparciu o najnowsze standardy oraz poznają funkcyjne i obiektowe możliwości języka. Dostaną również szereg informacji na temat tego w jaki sposób pisać skalowalny kod i jak używać współczesnych wzorców projektowych takich jak\n' +
        'MVC, MVVM, Flux. Dzięki przekazanej wiedzy uczestnicy będą rozumieć działanie języka co pozwoli na szybki' +
        ' dalszy rozwój oraz unikanie najczęstszych błędów przy tworzeniu aplikacji internetowych.',
    profile: "\nSzkolenie przeznaczone jest dla os\u00F3b, znaj\u0105cych dowolny j\u0119zyk programowania. Dla tych, kt\u00F3rzy dopiero zaczynaj\u0105 swoj\u0105 przygod\u0119 z programowaniem sporz\u0105dzony zosta\u0142 kurs - Wst\u0119p do programowania z JavaScript\n",
    duration: 3,
    list: javascript_1.javascript.lists.filter(function (_a) {
        var name = _a.name;
        return name === "JavaScript - kurs podstawowy";
    })[0].list,
    skills: "\nPo zako\u0144czonym szkoleniu uczestnicy b\u0119d\u0105 zna\u0107 podstawy tworzenia aplikacji internetowych. B\u0119d\u0105 znali r\u00F3\u017Cne podej\u015Bcia programistyczne i b\u0119d\u0105 wiedzie\u0107 w jaki spos\u00F3b b\u0119d\u0105 mogli w prosty spos\u00F3b rozwija\u0107 si\u0119 dalej w obranym kierunku.\n"
};
