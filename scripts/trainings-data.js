"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("../locals/trainings/angular");
var functional_1 = require("../locals/trainings/functional");
var javascript_1 = require("../locals/trainings/javascript");
var testing_1 = require("../locals/trainings/testing");
var rxjs_1 = require("../locals/trainings/rxjs");
var graphql_1 = require("../locals/trainings/graphql");
var node_1 = require("../locals/trainings/node");
var typescript_1 = require("../locals/trainings/typescript");
var react_1 = require("../locals/trainings/react");
var webcomponents_1 = require("../locals/trainings/webcomponents");
var pwa_1 = require("../locals/trainings/pwa");
var vue_1 = require("../locals/trainings/vue");
exports.trainingsData = [javascript_1.javascript, typescript_1.typescript, functional_1.functional, testing_1.testing, angular_1.angular, vue_1.vue, react_1.react, rxjs_1.rxjs, graphql_1.graphql, node_1.node, webcomponents_1.webcomponents, pwa_1.pwa].map(function (t, index) { return (__assign({}, t, { index: index })); });
