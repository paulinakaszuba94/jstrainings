import {angularBasicTraining} from "./angularPodstawowy";
import {angularAdvancedTraining} from "./angularZaawansowany";
import {angular} from "../../trainings/angular";

export const angularCompedium = {
    name: `Angular: kompedium wiedzy (TypeScript, RxJS)`,
    description:`
Szkolenie jest połączeniem szkoleń z Angulara (podstawowy i rozszerzony) oraz TypeScriptu i RXJS.`,
    profile: `
Szkolenie adresowane jest do programistów znających język JavaScript, chcących się nauczyć Reacta od podstaw.`,
    duration:
        5,
    list: angular.list,

    skills: angularAdvancedTraining.skills


}
