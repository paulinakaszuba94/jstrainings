import {functional} from "../../trainings/functional";
import {rxjs} from "../../trainings/rxjs";

export const functionalAnd = {
    name: `JavaScript: Programowanie funkcyjne i reaktywne`,
    description: `Szkolenie jest połączeniem szkoleń z programowania funkcyjnego oraz reaktywnego.`,
    profile: `Szkolenie adresowane jest do programistów, którzy znają przynajmniej podstawy języka Java lub JavaScript`,
    duration:
        2,
    list: functional.list.concat(rxjs.list),
    skills: `
Po ukończonym szkoleniu uczestnicy będą znać szczegółowo zasady podejścia reaktywnego i funkcyjnego.`
}