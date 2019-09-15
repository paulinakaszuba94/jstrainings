import {angularBasicTraining} from "./angularPodstawowy";
import {angularAdvancedTraining} from "./angularZaawansowany";

export const year2020 = {
    name: `2020 - rok JavaScriptu (Angular, react, vue)`,
    description:`
W czasie szkolenia uczestnicy będą mieli szansę dowiedzieć się, jak działąją obecnie najpopularniejsze biblioteki/frameworki na rynku aplikacji frontendowych. Skupimy się na ich wadach, zaletach, podobieństwach i różnicach tak, aby uczestnicy mogli podejmować świadome decyzje dotyczące wyboru technologii do projektu.`,
    profile: `
Szkolenie adresowane jest do programistów znających język JavaScript.`,
    duration:
        3,
    list: [
        'Architektura komponentowa',
        'Narzędzia do zarządzania stanem aplikacji',
        'virtual DOM',
        'Komunikacja komponentów',
        'server-side rendering',
        'TypeScript vs JavaScript',
        `MVVM vs Flux`,
        'Hooks vs Redux',
        `Reaktywne updaty`
    ],

    skills: angularAdvancedTraining.skills


}
