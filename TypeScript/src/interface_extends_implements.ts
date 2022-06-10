//Interfaces

/* interface Employee{
    id:number;
    name:string;
    dept:string;
}

interface Customer{
    id:number;
    name:string;
    country: string;
} */

// Herencia de interfaces 

interface Person{
    id:number;
    name:string;
}

interface Employees extends Person{
    dept:string;
}

interface Customer extends Person{
    country: string;
}

const empleado:Employees={
    id : 1,
    name : "Daniel",
    dept : "Consulta Externa"
};