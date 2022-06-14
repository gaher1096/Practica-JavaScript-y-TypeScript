"use strict";

function operation(objeto) {
    let regExp = /[\(]?[-]?[0-9]+([\.][0-9]+)?([\)]?[/*+%-][\(]?[-]?[0-9]+([\.][0-9]+)?)+[\)]?/g;
    let verificacion = regExp.test(objeto.expresion);
    return verificacion;
}

function compute(objeto) {
    var resultado = operation(objeto);
    if (true == resultado) {
        try {
            resultado = eval(objeto.expresion);
        } catch (e) {
            if (e instanceof SyntaxError) {
                console.log(e.message);
            }
        }
    } else {
        resultado = false;
    }
    return resultado;
}
console.log("Operation:");
console.log(operation({ expresion: "Hello World" }));
console.log(operation({ expresion: "2+10/2-20" }));
console.log(operation({ expresion: "(2+10)/2-20" }));
console.log(operation({ expresion: "(2+10/2-20" }));
console.log("\nCompute:");
console.log(compute({ expresion: "Hello World" }));
console.log(compute({ expresion: "2+10/2-20" }));
console.log(compute({ expresion: "(2+10)/2-20" }));
console.log(compute({ expresion: "(2+10/2-20" }));