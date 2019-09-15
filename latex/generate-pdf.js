"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//requiring path and fs modules
var angularPodstawowy_1 = require("../locals/catalogue/js/angularPodstawowy");
var angularZaawansowany_1 = require("../locals/catalogue/js/angularZaawansowany");
var architekturaAplikacjiFrontendowych_1 = require("../locals/catalogue/js/architekturaAplikacjiFrontendowych");
var es6_1 = require("../locals/catalogue/js/es6");
var graphQL_1 = require("../locals/catalogue/js/graphQL");
var javaScriptPodstawowy_1 = require("../locals/catalogue/js/javaScriptPodstawowy");
var javaScriptZaawansowany_1 = require("../locals/catalogue/js/javaScriptZaawansowany");
var komunikacjaZDevelopmentem_1 = require("../locals/catalogue/business/komunikacjaZDevelopmentem");
var nodePodstawowy_1 = require("../locals/catalogue/js/nodePodstawowy");
var oopJs_1 = require("../locals/catalogue/js/oopJs");
var react_1 = require("../locals/catalogue/js/react");
var testyPodstawowe_1 = require("../locals/catalogue/js/testyPodstawowe");
var typeScript_1 = require("../locals/catalogue/js/typeScript");
var wstepDoProgramowania_1 = require("../locals/catalogue/js/wstepDoProgramowania");
var wystapieniaPubliczne_1 = require("../locals/catalogue/soft/wystapieniaPubliczne");
var webAssemblyTraining_1 = require("../locals/catalogue/js/webAssemblyTraining");
var regexp_1 = require("../locals/catalogue/js/regexp");
var Angular___kompendium_wiedzy_1 = require("../locals/catalogue/js/Angular - kompendium wiedzy");
var JavaScriptDlaProgramistowJava_1 = require("../locals/catalogue/js/JavaScriptDlaProgramistowJava");
var progressiveWebApps_1 = require("../locals/catalogue/js/progressiveWebApps");
var progressiveAppRewritting_1 = require("../locals/catalogue/js/progressiveAppRewritting");
var rest_1 = require("../locals/catalogue/js/rest");
var BId3_1 = require("../locals/catalogue/big-data/BId3");
var neuralNetworks_1 = require("../locals/catalogue/big-data/neuralNetworks");
var vue_1 = require("../locals/catalogue/js/vue");
var functionalAndReactiveJSandJava_1 = require("../locals/catalogue/js/functionalAndReactiveJSandJava");
var _2020___rok_JavaScriptu__Angular__react__vue_1 = require("../locals/catalogue/js/2020 - rok JavaScriptu (Angular, react, vue)");
var path = require('path');
var fs = require('fs');
//joining path of directory
var cataloguePath = "../locals/catalogue/";
var directoryPath = path.join(cataloguePath);
//passsing directoryPath and callback function
var catalogue = [];
var bigDataTrainings = [BId3_1.businessIntelligence, neuralNetworks_1.neuralNetworksTraining];
var general = [graphQL_1.graphQlTraining, rest_1.restTraining, regexp_1.regexTraining];
var jsTrainings = [_2020___rok_JavaScriptu__Angular__react__vue_1.year2020, javaScriptPodstawowy_1.jsBasicTraining, javaScriptZaawansowany_1.jsAdvancedTraining, typeScript_1.typeScriptTraining,
    angularPodstawowy_1.angularBasicTraining, angularZaawansowany_1.angularAdvancedTraining, Angular___kompendium_wiedzy_1.angularCompedium,
    react_1.reactTraining,
    vue_1.vueTraining,
    progressiveWebApps_1.pwaTraining,
    nodePodstawowy_1.nodeBasicTraining,
    oopJs_1.oopJsTraining, functionalAndReactiveJSandJava_1.functionalAnd,
    architekturaAplikacjiFrontendowych_1.frontendArchitectureTraining, es6_1.es6Training,
    testyPodstawowe_1.testsBasicTraining,
    // testsAdvancedTraining,
    wstepDoProgramowania_1.introductionToProgrammingTraining,
    webAssemblyTraining_1.webAssemblyTraining, JavaScriptDlaProgramistowJava_1.javaScriptForJavaDevsTraining, progressiveAppRewritting_1.progressiveAppRewriting];
var businessTraining = [wystapieniaPubliczne_1.publicSpeakingTraining, komunikacjaZDevelopmentem_1.communicationTraining];
exports.all = jsTrainings.concat(general, bigDataTrainings, businessTraining);
exports.detailed = {
    js: { description: "JavaScript, technologie frontendowe", trainings: jsTrainings },
    general: { description: "Architektury, wyrażenia reguralne", trainings: general },
    bigData: { description: "Big data", trainings: bigDataTrainings },
    business: { description: "Dla biznesu", trainings: businessTraining }
};
var toLatexFormat = function (training) {
    return "    \n\t\\section{" + training.name + "}\n\n\t\\subsection*{Opis szkolenia:}\n\t\\begin{adjustwidth}{2cm}{}\n\\justifying\n\t\t" + training.description + "\n\t\\end{adjustwidth}\n\t\\subsection*{Profil uczestnik\u00F3w:}\n\\begin{adjustwidth}{2cm}{}\n\\justifying\n\t" + training.profile + "\n\\end{adjustwidth}\n\t\\subsection*{Czas trwania:}\n\\begin{adjustwidth}{2cm}{}\n\t" + training.duration + " " + (training.duration > 1 ? 'dni' : 'dzien') + "\n\\end{adjustwidth}\n\n\t\\subsection*{Wiedza teoretyczna i praktyczna:}\n\\begin{adjustwidth}{1.5cm}{}\n\t\\begin{itemize}\n" + training.list.map(function (item) {
        return "\t\t\\item " + item;
    }).join('\n') + "\n\t\\end{itemize}\n\\end{adjustwidth}\n\n\t\\subsection*{Umiej\u0119tno\u015Bci:}\n\\begin{adjustwidth}{2cm}{}\n\\justifying\n\t" + training.skills + "\n\\end{adjustwidth}\n\n\\newpage\n\n";
};
var fileStart = "\n \\documentclass{article}[10pt]\n\\usepackage{changepage} \n\\usepackage[T1]{fontenc}\n\\usepackage{sectsty}\n\\usepackage{fancyhdr}\n\\usepackage[sfdefault]{roboto}\n\\usepackage{hyperref}\n\\usepackage[utf8]{inputenc}\n\\usepackage{lipsum}\n\\usepackage[tocflat]{tocstyle}\n\\usetocstyle{standard}\n\\usepackage[document]{ragged2e}\n\\usepackage{blindtext}\n\n% Redefinition of ToC command to get centered heading\n\\makeatletter\n\\renewcommand\\tableofcontents{%\n  \\null\\hfill\\textbf{\\Large\\contentsname}\\hfill\\null\\par\n  \\@mkboth{\\MakeUppercase\\contentsname}{\\MakeUppercase\\contentsname}%\n  \\@starttoc{toc}%\n}\n\\makeatother\n\\hypersetup{\n    colorlinks,\n    citecolor=black,\n    filecolor=black,\n    linkcolor=black,\n    urlcolor=black\n}\n\\pagenumbering{arabic}\n\\sectionfont{\\fontsize{24}{15}\\fontseries{t}\\selectfont}\n\\subsectionfont{\\fontsize{14}{15}\\fontseries{l}\\selectfont}\n\n\\renewcommand*\\contentsname{Szkolenia:}\n\n\\pagestyle{fancy}\n\\fancyhead{}\n\n\\fancyfoot{}\n\\fancyfoot[R]{\\thepage}\n\n\\renewcommand{\\headrulewidth}{0pt}\n\\rhead{\\fontsize{10}{8} \\selectfont www.jstrainings.com} \n\n\\setcounter{secnumdepth}{0} % sections are level 1\n\n\\begin{document}\n\n\t\\pagestyle{empty} %get rid of header/footer for toc page\n    \\tableofcontents %put toc in\n    \\cleardoublepage %start new page\n    \\pagestyle{fancy} % put headers/footers back on\n    \\setcounter{page}{1} %reset the page counter\n\n\t\\newpage";
var makeLatexText = function (trainings, fileStart) { return trainings.reduce(function (fileText, training) {
    return fileText + '\n' + toLatexFormat(training);
}, fileStart) + '\n\\\end{document}'; };
var latexText = makeLatexText(exports.all, fileStart);
var selflatex = require('node-latex-pdf');
fs.writeFileSync("../trainings.tex", latexText);
selflatex("../latex/trainings.tex", 'trainings', function (err, msg) {
    if (err)
        console.log("Error, " + msg);
    else
        console.log("Success! " + msg);
});
