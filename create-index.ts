import * as pug from 'pug';
import {trainings} from "./old/trainings";
import {general} from "./locals/general";
import {photos} from "./locals/photos";
import {howItWorks} from "./locals/howItWorks";
import {nav} from "./locals/nav";
import {references} from "./locals/references";
import {details} from "./old/details";
import {trainingsData} from "./scripts/trainings-data";
import {index} from "./scripts/config";
// @ts-ignore
const fs = require('fs');

// Compile the source code
const compiledFunction = pug.compileFile('./index.pug');
const rendered = (compiledFunction({
    trainings: trainingsData, general, photos, howItWorks, nav, references
}));
fs.writeFile(`./${index}`, rendered, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});