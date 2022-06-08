// basic types 
let myTypeString:string = "hello world!"
let myTypenumber:number = 22;
let myTypeBoolean:boolean = true;
let myTypeUndefined:undefined=undefined;
let myTypeNull:null=null;

// special types
let myTypeAny:any ="Bolivia"; //Útil para declarar variables que a priori no sabemos de qué tipo es o será

// Array
let myArrayTypeNumber:number[] = [1,2,3];
let myArrayTypeNumber2:Array<number> = [1,2,3];

let myArrayTypeAny:Array<any> = ["hola",2,true];

// Tuple
let myTupleType:[string,number,boolean] = ["hola",2,true];

//Array of tuple
let myArrayofTupleType:[number,string][];
myArrayofTupleType =[
    [1,"Hola"],
    [2,"Adios"],
    [3,"Hasta la vista"]
]