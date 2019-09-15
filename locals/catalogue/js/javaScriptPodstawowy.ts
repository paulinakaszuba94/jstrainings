import {javascript} from "../../trainings/javascript";

export const jsBasicTraining = {
    name: 'JavaScript: kurs podstawowy (dla programistów)',
    description: javascript.mainDescription + '\nCelem szkolenia jest przekazanie wiedzy na temat mechanizmów' +
            ' działania języka' +
            ' JavaScript.\n' +
        'Uczestnicy nauczą się budować aplikacje w oparciu o najnowsze standardy oraz poznają funkcyjne i obiektowe możliwości języka. Dostaną również szereg informacji na temat tego, w jaki sposób pisać skalowalny kod i jak używać współczesnych wzorców projektowych takich jak\n' +
        'MVC, MVVM, Flux. Dzięki przekazanej wiedzy uczestnicy będą rozumieć działanie języka, co pozwoli na szybki' +
        ' dalszy rozwój oraz unikanie najczęstszych błędów przy tworzeniu aplikacji internetowych.',
    profile: `
Szkolenie przeznaczone jest dla osób, znających dowolny język programowania. Dla tych, którzy dopiero zaczynają swoją przygodę z programowaniem sporządzony został kurs - Wstęp do programowania z JavaScript
`,
    duration: 3,
    list: javascript.lists.filter(({name}) => name === "JavaScript - kurs podstawowy")[0].list,
    skills: `
Po zakończonym szkoleniu uczestnicy będą znać podstawy tworzenia aplikacji internetowych. Ponadto będą znali różne podejścia programistyczne i będą wiedzieć, w jaki sposób można w prosty sposób rozwijać się dalej w obranym kierunku.
`
}
