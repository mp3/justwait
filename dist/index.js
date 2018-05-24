"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (waitingTime) {
    if (waitingTime === void 0) { waitingTime = 0; }
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, waitingTime);
    });
});
