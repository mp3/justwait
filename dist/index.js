"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (waitingTime) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, waitingTime);
    });
});
