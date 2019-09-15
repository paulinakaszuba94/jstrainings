//requiring path and fs modules
import {angularBasicTraining} from "../locals/catalogue/js/angularPodstawowy";
import {angularAdvancedTraining} from "../locals/catalogue/js/angularZaawansowany";
import {frontendArchitectureTraining} from "../locals/catalogue/js/architekturaAplikacjiFrontendowych";
import {es6Training} from "../locals/catalogue/js/es6";
import {graphQlTraining} from "../locals/catalogue/js/graphQL";
import {jsBasicTraining} from "../locals/catalogue/js/javaScriptPodstawowy";
import {jsAdvancedTraining} from "../locals/catalogue/js/javaScriptZaawansowany";
import {communicationTraining} from "../locals/catalogue/business/komunikacjaZDevelopmentem";
import {nodeBasicTraining} from "../locals/catalogue/js/nodePodstawowy";
import {oopJsTraining} from "../locals/catalogue/js/oopJs";
import {functionalJs} from "../locals/catalogue/js/functionalJs";
import {reactTraining} from "../locals/catalogue/js/react";
import {testsBasicTraining} from "../locals/catalogue/js/testyPodstawowe";
import {testsAdvancedTraining} from "../locals/catalogue/js/testyZaawansowane";
import {typeScriptTraining} from "../locals/catalogue/js/typeScript";
import {introductionToProgrammingTraining} from "../locals/catalogue/js/wstepDoProgramowania";
import {reactiveProgrammingTraining} from "../locals/catalogue/js/wstepDoProgramowaniaReaktywnego";
import {publicSpeakingTraining} from "../locals/catalogue/soft/wystapieniaPubliczne";
import {webAssemblyTraining} from "../locals/catalogue/js/webAssemblyTraining";
import {regexTraining} from "../locals/catalogue/js/regexp";
import {angularCompedium} from "../locals/catalogue/js/Angular - kompendium wiedzy";
import {javaScriptForJavaDevsTraining} from "../locals/catalogue/js/JavaScriptDlaProgramistowJava";
import {pwaTraining} from "../locals/catalogue/js/progressiveWebApps";
import {progressiveAppRewriting} from "../locals/catalogue/js/progressiveAppRewritting";
import {restTraining} from "../locals/catalogue/js/rest";
import {businessIntelligence} from "../locals/catalogue/big-data/BId3";
import {neuralNetworksTraining} from "../locals/catalogue/big-data/neuralNetworks";
import {vueTraining} from "../locals/catalogue/js/vue";
import {functionalAnd} from "../locals/catalogue/js/functionalAndReactiveJSandJava";
import {year2020} from "../locals/catalogue/js/2020 - rok JavaScriptu (Angular, react, vue)";
import {webcomponentsTraining} from "../locals/catalogue/js/webcomponents";

const path = require('path');
const fs = require('fs');
//joining path of directory
const cataloguePath = `../locals/catalogue/`;
const directoryPath = path.join(cataloguePath);
//passsing directoryPath and callback function
const catalogue = [];

const bigDataTrainings = [businessIntelligence, neuralNetworksTraining];
const general = [graphQlTraining, restTraining, regexTraining];
const jsTrainings = [year2020, jsBasicTraining, jsAdvancedTraining, typeScriptTraining,
    angularBasicTraining, angularAdvancedTraining, angularCompedium,
    reactTraining,
    vueTraining,
    pwaTraining,
    nodeBasicTraining,
    oopJsTraining, functionalAnd,
    frontendArchitectureTraining, es6Training,
    testsBasicTraining,
    // testsAdvancedTraining,
    webcomponentsTraining,
    introductionToProgrammingTraining,
    webAssemblyTraining, javaScriptForJavaDevsTraining, progressiveAppRewriting];
const businessTraining = [publicSpeakingTraining, communicationTraining];

export const all = [...jsTrainings, ...general, ...bigDataTrainings, ...businessTraining] as any;
export const detailed = {
    js: {description: "JavaScript, technologie frontendowe", trainings: jsTrainings},
    general: {description: "Architektury, wyrażenia reguralne", trainings: general},
    bigData: {description: "Big data", trainings: bigDataTrainings},
    business: {description: "Dla biznesu", trainings: businessTraining}
};

const toLatexFormat = training =>
    `    
\t\\section{${training.name}}

\t\\subsection*{Opis szkolenia:}
\t\\begin{adjustwidth}{2cm}{}
\\justifying
\t\t${training.description}
\t\\end{adjustwidth}
\t\\subsection*{Profil uczestników:}
\\begin{adjustwidth}{2cm}{}
\\justifying
\t${training.profile}
\\end{adjustwidth}
\t\\subsection*{Czas trwania:}
\\begin{adjustwidth}{2cm}{}
\t${training.duration} ${training.duration > 1 ? 'dni' : 'dzien'}
\\end{adjustwidth}

\t\\subsection*{Wiedza teoretyczna i praktyczna:}
\\begin{adjustwidth}{1.5cm}{}
\t\\begin{itemize}
${training.list.map(item => 
        `\t\t\\item ${item}`
    ).join('\n')}
\t\\end{itemize}
\\end{adjustwidth}

\t\\subsection*{Umiejętności:}
\\begin{adjustwidth}{2cm}{}
\\justifying
\t${training.skills}
\\end{adjustwidth}

\\newpage

`;

const fileStart = `
 \\documentclass{article}[10pt]
\\usepackage{changepage} 
\\usepackage[T1]{fontenc}
\\usepackage{sectsty}
\\usepackage{fancyhdr}
\\usepackage[sfdefault]{roboto}
\\usepackage{hyperref}
\\usepackage[utf8]{inputenc}
\\usepackage{lipsum}
\\usepackage[tocflat]{tocstyle}
\\usetocstyle{standard}
\\usepackage[document]{ragged2e}
\\usepackage{blindtext}

% Redefinition of ToC command to get centered heading
\\makeatletter
\\renewcommand\\tableofcontents{%
  \\null\\hfill\\textbf{\\Large\\contentsname}\\hfill\\null\\par
  \\@mkboth{\\MakeUppercase\\contentsname}{\\MakeUppercase\\contentsname}%
  \\@starttoc{toc}%
}
\\makeatother
\\hypersetup{
    colorlinks,
    citecolor=black,
    filecolor=black,
    linkcolor=black,
    urlcolor=black
}
\\pagenumbering{arabic}
\\sectionfont{\\fontsize{24}{15}\\fontseries{t}\\selectfont}
\\subsectionfont{\\fontsize{14}{15}\\fontseries{l}\\selectfont}

\\renewcommand*\\contentsname{Szkolenia:}

\\pagestyle{fancy}
\\fancyhead{}

\\fancyfoot{}
\\fancyfoot[R]{\\thepage}

\\renewcommand{\\headrulewidth}{0pt}
\\rhead{\\fontsize{10}{8} \\selectfont www.jstrainings.com} 

\\setcounter{secnumdepth}{0} % sections are level 1

\\begin{document}

\t\\pagestyle{empty} %get rid of header/footer for toc page
    \\tableofcontents %put toc in
    \\cleardoublepage %start new page
    \\pagestyle{fancy} % put headers/footers back on
    \\setcounter{page}{1} %reset the page counter

\t\\newpage`;

const makeLatexText = (trainings, fileStart) => trainings.reduce((fileText, training) => {
    return fileText + '\n' + toLatexFormat(training);
}, fileStart) + '\n\\\end{document}';

const latexText = makeLatexText(all, fileStart);
const selflatex = require('node-latex-pdf');
fs.writeFileSync(`../trainings.tex`, latexText);
selflatex(`../latex/trainings.tex`, 'trainings', (err,msg) => {
    if(err)
        console.log(`Error, ${msg}`);
    else
        console.log(`Success! ${msg}`);
});