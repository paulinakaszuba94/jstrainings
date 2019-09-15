import {functional} from "../../trainings/functional";
import {rxjs} from "../../trainings/rxjs";

export const functionalAnd = {
    name: `JavaScript: Programowanie funkcyjne i reaktywne`,
    description: "Paradygmaty programowania reaktywnego i funkcyjnego są coraz cześciej, używane w językach" +
        " programowania. Strumienie, czyste funkcje, niemutowalność stanu, składanie funkcji, funkcje wyższego" +
        " rzędu, monady.... Zrozumienie podejścia funkcyjnego daje programiście dużo większe możliwości, a kod" +
        " zaimplementowany w ten sposób jest zdecydowanie bardziej ekspresywny, skalowalny i łatwiejszy do testowania.",
    profile: `Szkolenie adresowane jest do programistów, którzy znają przynajmniej podstawy języka Java lub JavaScript`,
    duration:
        2,
    list: functional.list.concat(rxjs.list),
    skills: `
Po ukończonym szkoleniu uczestnicy będą znać szczegółowo zasady podejścia reaktywnego i funkcyjnego.`
}