import {javascript} from "../../trainings/javascript";

export const es6Training = {
    name: `ES6+`,
    description: `
Celem szkolenia jest przekazanie wiedzy na temat nowych featurów języka JavaScript, które zostały zaimplementowane w standardach EcmaScript, nowszych niż EcmaScript 5. Uczestnicy nauczą się podstawowych mechanizmów, takich jak zmienne blokowe, jak również tych bardziej skomplikowanych, jak iteratory, generatory czy metaprogrmowanie przy użyciu proxy
`,

    profile: `
Szkolenie adresowane jest do programistów znających język JavaScript w wersji EcmaScript 5, chcących poznać możliwości języka, które zostały dodane w standardach EcmaScript 2015 i kolejnych (czyli ES6+ ).`,

    duration:
        1,
    list: javascript.lists.filter(({name}) => name === "Mechanizmy ES6+")[0].list,


    skills: `
Po zakończonym szkoleniu uczestnicy będą sprawnie posługiwać się nowymi featurami języka JavaScript.`


}
