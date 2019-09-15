import {javascript} from "../../trainings/javascript";

export const jsAdvancedTraining = {
    name: `JavaScript: kurs zaawansowany`,
    description: `${javascript.detailDescription}
Celem szkolenia jest przekazanie informacji na temat zaawansowanych mechanizmów działania języka JavaScript. Uczestnicy dowiedzą się, w jaki sposób mogą tworzyć Web Components bez wsparcia żadnego frameworka, poznają sposób działania nowoczesnych featurów języka, jak np. generatory, iterables, proxies, pogłębią informacje na temat mechanizmów, takich jak prototypy, zmiana kontekstu, a także dostaną szereg wiadomości na temat asynchroniczności, funkcyjnego podejścia i silników przeglądarek. Nabyta wiedza pozwoli pisać bardziej ekspresywny, czysty i wydajny kod.`,
    profile: `
Szkolenie adresowane jest do programistów, którzy znają podstawy języka JavaScript  - posiadają wiedzę na poziomie ukończonego szkolenia JavaScript kurs podstawowy (dla programistów).`,
    duration:
        3,
    list: javascript.lists.filter(({name}) => name === "JavaScript - kurs zaawansowany")[0].list,
    skills: `
Po ukończonym szkoleniu uczestnicy będą znać szczegółowo zasady działania prototypów oraz innych nisko poziomowych mechanizmów w JavaScripcie, będą umieć wykorzystać najnowocześniejsze featury języka oraz będą rozumieć nowoczesne wzorce architektoniczne.
`


}
