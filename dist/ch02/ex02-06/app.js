"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data = { a: 10, b: 20 };
const math_js_1 = __importDefault(require("./math.js"));
console.log(1, math_js_1.default.sum(data));
console.log(1, math_js_1.default.substract(data));
console.log(1, math_js_1.default.divide(data));
const math_js_2 = require("./math.js");
console.log(2, (0, math_js_2.sum)(data));
console.log(2, (0, math_js_2.substract)(data));
