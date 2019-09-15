import {node} from "../../trainings/node";

export const nodeBasicTraining = {
    name: `Node.js: kurs podstawowy (dla programistów front-end)`,
    description: node.mainDescription + '\n' + node.detailDescription,
    profile: `
Szkolenie adresowane jest do programistów aplikacji frontendowych, którzy nie mają doświadczenia w tworzeniu aplikacji backendowych.`,
    duration:
        2,
    list: node.list,

    skills: `
Po skończonym szkoleniu uczestnicy będą znali założenia środowiska Node.js, jego architekturę oraz nauczą się tworzenia prostych programów komunikujących się z bazami danych.
`
}
