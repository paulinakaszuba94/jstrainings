import * as pug from 'pug';
import {general} from "../locals/general";
import {howItWorks} from "../locals/howItWorks";
import {all, detailed} from "../latex/generate-pdf";
// @ts-ignore
const fs = require('fs');


// Compile the source code
const compiledFunction = pug.compileFile('trainings/index.pug');
const rendered = (compiledFunction({
    trainings: all, general, howItWorks, detailed
}));
fs.writeFile(`trainings/index.html`, rendered, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});