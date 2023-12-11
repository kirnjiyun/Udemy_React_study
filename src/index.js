import { add, sub } from "./math.js";
import multiply from "./math.js";
import randomColor from "randomcolor";
// console.log("안녕 노드 제이에스야");

// const moduleData = require("./math");

console.log(add(1, 22));
console.log(sub(30, 2));
console.log(multiply(409, 2));

// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

const color = randomColor();
console.log(color);
