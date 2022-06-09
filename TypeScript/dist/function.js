"use strict";
function greet(name) {
    return name.toUpperCase();
}
let upperName = greet("Gabriel");
console.log(`Hello, ${upperName} !!`);
function printPosition(position) {
    console.log(`latitude & longitude are: LAT ${position.lat} LONG ${position.long}`);
}
printPosition({ lat: 22 });
