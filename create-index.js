"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pug = require("pug");
var general_1 = require("./locals/general");
var photos_1 = require("./locals/photos");
var howItWorks_1 = require("./locals/howItWorks");
var nav_1 = require("./locals/nav");
var references_1 = require("./locals/references");
var trainings_data_1 = require("./scripts/trainings-data");
var config_1 = require("./scripts/config");
// @ts-ignore
var fs = require('fs');
// Compile the source code
var compiledFunction = pug.compileFile('./index.pug');
var rendered = (compiledFunction({
    trainings: trainings_data_1.trainingsData, general: general_1.general, photos: photos_1.photos, howItWorks: howItWorks_1.howItWorks, nav: nav_1.nav, references: references_1.references
}));
fs.writeFile("./" + config_1.index, rendered, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
