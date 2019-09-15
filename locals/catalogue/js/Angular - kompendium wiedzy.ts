import {angularBasicTraining} from "./angularPodstawowy";
import {angularAdvancedTraining} from "./angularZaawansowany";

export const angularCompedium = {
    name: `Angular: kompedium wiedzy (TypeScript, RxJS)`,
    description:`
Celem szkolenia jest nauczenie uczestników w jaki sposób budować aplikacje w oparciu o framework Angular. Uczestnicy poznają mechanizmy frameworka co pozwoli im na samodzielną pracę w tym środowisku. Dodatkowo poznają struktury architektoniczne, które mogą zostać zaimplementowane w angularowych aplikacjach. 
`,
    profile: `
Szkolenie adresowane jest do programistów znających język JavaScript, chcących się nauczyć Reacta od podstaw.`,
    duration:
        5,
    list: angularBasicTraining.list.concat(angularAdvancedTraining.list),

    skills: angularAdvancedTraining.skills


}