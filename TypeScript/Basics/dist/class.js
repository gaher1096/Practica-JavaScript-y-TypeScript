"use strict";
// Opcion clasica
/* class Employee{
    //atributos
    private readonly id: number; //Se agrega la propiedad readonly para una vez declarada quede como solo lectura
    private name:string;
    private dept:string;
    
    constructor(id:number, name:string, dept:string){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }

    //metodos
    private showInfo():void{
        console.log(`${this.name}`);
    }
}
const emp = new Employee(22, "Daniel", "Urgencias"); */
//Opcion typescript automatic properties
class Employee {
    //atributos
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    //metodos
    showInfo() {
        console.log(`${this.name}`);
    }
}
const emp = new Employee(22, "Daniel", "Urgencias");
