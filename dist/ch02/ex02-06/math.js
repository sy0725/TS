"use strict";
// ex02-05/math.js 복사
Object.defineProperty(exports, "__esModule", { value: true });
exports.substract = exports.sum = void 0;
function sum(data) {
    return data.a + data.b;
}
exports.sum = sum;
function substract(data) {
    return data.a - data.b;
}
exports.substract = substract;
function divide(data) {
    return data.a / data.b;
}
exports.default = { sum, substract, divide };
