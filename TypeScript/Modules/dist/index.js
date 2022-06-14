"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myModules_1 = require("./myModules");
//import {PI as myPI} from './myModules';
//import * as myCode from './myModules';
const user = {
    id: 1,
    name: "Felipe"
};
console.log(myModules_1.PI);
console.log(user);
console.log((0, myModules_1.generateRandomNumber)());
