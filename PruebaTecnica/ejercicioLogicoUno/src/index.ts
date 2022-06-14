type Objeto = {
    expresion:string;
}

function operation(objeto:Objeto){
    let regExp = /[\(]?[-]?[0-9]+([\.][0-9]+)?([\)]?[/*+%-][\(]?[-]?[0-9]+([\.][0-9]+)?)+[\)]?/g;
    let verificacion = regExp.test(objeto.expresion);
    return verificacion;
}

function compute(objeto:Objeto){
    var resultado:any = operation(objeto);
    if(true==resultado)
    {
        resultado = eval(objeto.expresion);
    } else{
        resultado = false;
    }
    return resultado;
}

console.log("Operation:")
console.log(operation({expresion:"Hello World"}));
console.log(operation({expresion:"2+10/2-20"}));
console.log(operation({expresion:"(2+10)/2-20"}));
console.log(operation({expresion:"(2+10/2-20"}));

console.log("\n Compute:")
console.log(compute({expresion:"Hello World"}));
console.log(compute({expresion:"2+10/2-20"}));
console.log(compute({expresion:"(2+10)/2-20"}));
//console.log(compute({expresion:"(2+10/2-20"}));