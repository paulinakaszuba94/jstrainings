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
var config_1 = require("../scripts/config");
exports.photos = [{
        href: 'pst.jpg',
        description: 'Training for trainers',
        place: 'Polska szkoła trenerów, Poznań'
    }, {
        href: '2.jpg',
        description: 'Communication within distributed systems',
        place: 'Ericsson, Mexico City'
    }, {
        href: 'wit.jpg',
        description: 'Typing game in RxJS',
        place: 'WiT, Kraków'
    }, {
        href: '3.jpg',
        description: 'Data transfer protocols',
        place: 'Ericsson, New Delhi'
    }, {
        href: 'meetjs.jpg',
        description: 'Angular dependency injection in details',
        place: 'Kraków, MeetJS'
    }, {
        href: 'colombo.jpg',
        description: 'JavaScript mechanics - from prototypes to proxies',
        place: 'Pyxle, Colombo'
    }
].map(function (photo) { return (__assign({ alt: photo.description, hrefBig: config_1.fullsizePath + "/" + photo.href, hrefSmall: config_1.thumbPath + "/" + photo.href }, photo)); });
