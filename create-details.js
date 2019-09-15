"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pug = require("pug");
var general_1 = require("./locals/general");
var nav_1 = require("./locals/nav");
var config_1 = require("./scripts/config");
var trainings_data_1 = require("./scripts/trainings-data");
// @ts-ignore
var fs = require('fs');
trainings_data_1.trainingsData.forEach(function (detail) {
    var rendered = pug.compileFile('training.pug')({ general: general_1.general, index: config_1.index, nav: nav_1.nav, training: detail });
    fs.writeFile("./details/" + detail.id + ".html", rendered, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(detail.id + " has been saved");
    });
});
