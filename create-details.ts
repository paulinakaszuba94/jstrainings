import * as pug from 'pug';
import {trainings} from "./old/trainings";
import {general} from "./locals/general";
import {photos} from "./locals/photos";
import {howItWorks} from "./locals/howItWorks";
import {nav} from "./locals/nav";
import {references} from "./locals/references";
import {details} from "./old/details";
import {detailsPath, imgPath, index} from "./scripts/config";
import {trainingsData} from "./scripts/trainings-data";
// @ts-ignore
const fs = require('fs');


trainingsData.forEach((detail) => {
    const rendered = pug.compileFile('training.pug')({general,index,nav, training: detail});
    fs.writeFile(`./details/${detail.id}.html`, rendered, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log(`${detail.id} has been saved`);
    });
});
