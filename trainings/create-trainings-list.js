"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pug = require("pug");
var general_1 = require("../locals/general");
var howItWorks_1 = require("../locals/howItWorks");
var generate_pdf_1 = require("../latex/generate-pdf");
// @ts-ignore
var fs = require('fs');
// Compile the source code
var compiledFunction = pug.compileFile('trainings/index.pug');
var rendered = (compiledFunction({
    trainings: generate_pdf_1.all, general: general_1.general, howItWorks: howItWorks_1.howItWorks, detailed: generate_pdf_1.detailed
}));
fs.writeFile("trainings/index.html", rendered, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
