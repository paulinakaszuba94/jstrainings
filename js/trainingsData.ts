import {angular} from "../locals/trainings/angular";
import {functional} from "../locals/trainings/functional";
import {javascript} from "../locals/trainings/javascript";
import {testing} from "../locals/trainings/testing";
import {rxjs} from "../locals/trainings/rxjs";
import {graphql} from "../locals/trainings/graphql";
import {node} from "../locals/trainings/node";
import {typescript} from "../locals/trainings/typescript";
import {react} from "../locals/trainings/react";
import {webcomponents} from "../locals/trainings/webcomponents";
import {pwa} from "../locals/trainings/pwa";
import {vue} from "../locals/trainings/vue";

export const trainingsData = [javascript, typescript, functional, testing, angular, vue,  react, rxjs,  graphql, node, webcomponents, pwa].map((t, index) => ({
    ...t,
    index
}));