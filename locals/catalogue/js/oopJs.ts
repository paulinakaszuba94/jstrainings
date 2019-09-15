import {javascript} from "../../trainings/javascript";

export const oopJsTraining = {
    name: `Object-oriented programming w JavaScript`,
    description: `
Celem szkolenia jest przekazanie informacji na temat mechanizmów języka JavaScript, pozwalających na tworzenie skalowalnego i wydajnego oprogramowania, stosując techniki OOP.`,
    profile: `
Szkolenie adresowane jest do programistów, którzy znają podstawy języka JavaScript  - posiadają wiedzę na poziomie ukończonego szkolenia JavaScript kurs podstawowy (dla programistów).`,
    duration:
        2,
    list: javascript.lists.filter(({name}) => name === "Object-oriented JavaScript")[0].list,
    skills: `
Po ukończonym szkoleniu uczestnicy będą znać szczegółowo zasady działania mechanizmów pomagających w tworzeniu programów w JavaScript w podejściu obiektowym.`
}
