function greet(name:string):string{
    return name.toUpperCase();
}

let upperName:string=greet("Gabriel");
console.log(`Hello, ${upperName} !!`);

function printPosition(position: { lat: number, long ? : number }): void {
    console.log(`latitude & longitude are: LAT ${position.lat} LONG ${position.long}`);
}

printPosition({lat: 22})