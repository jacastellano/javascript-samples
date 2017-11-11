/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features 
  Date: 2017/11/05
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// let, const & scope sample
function testLetConst() {

    // declare variable
    let size = 38;

    // scope
    {
        // declare constant
        const size = 40;
        //size = 42; // It isn't possible to change
        console.log(`const size value: ${size}`);
    }

    size = 42; // It's possible to change
    console.log(`let size value: ${size}`);

}

testLetConst();


// class sample
class Person {

    // constructor
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    // print name
    printName() {
        console.log(this.name);
    }

    // print location
    printLocation() {
        console.log(this.location);
    }

}

// new person
const person = new Person("Jose", "Málaga");

// print Name
person.printName();

// print Location
person.printLocation();


// inherance sample
class Vehicle {
    constructor(mark, model, color) {
        this.mark = mark;
        this.model = model;
        this.color = color;
    }

    toString() {
        return `Mark: ${this.mark}, Model: ${this.model}, Color: ${this.color}`;
    }
}

class Car extends Vehicle {
    constructor(mark, model, color, licensePlate) {
        super(mark, model, color);
        this.licensePlate = licensePlate;
    }

    toString() {
        return `License Plate: ${this.licensePlate}, ${super.toString()}`;
    }
}

class Bike extends Vehicle {
    constructor(mark, model, color, size) {
        super(mark, model, color);
        this.size = size;
    }

    toString() {
        return `${super.toString()}, Size: ${this.size}`;
    }
}

const myVehicle = new Vehicle("Seat", "León", "Red");
console.log(myVehicle.toString());

const myCar = new Car("Seat", "León", "Red", "4567HNM");
console.log(myCar.toString());

const myBike = new Bike("Merida", "Scultura Evo", "Blue", "S/M");
console.log(myBike.toString());


// Arrow function sample
// number list
const list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(`Original list: ${list}`);

// increment function
const increment = function increment(value) {
    return value + 1;
}

let incList = list.map(increment);
console.log(`Increased list (A): ${incList}`);

// arrow fuction use
incList = list.map(v => v + 1);
console.log(`Increased list (B): ${incList}`);

const evenList = [];
list.forEach((value) => {
    if (value % 2 === 0) {
        evenList.push(value);
    }
});
console.log(`Even list: ${evenList}`);

// Binding sample

// Class Counter without binding
class Counter {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
    }
    getValue() {
        return this.value;
    }
}

// create counter
let counter = new Counter();
console.log(`counter (initial): ${counter.getValue()}`);

// increment counter
counter.increment();
// check value
console.log(`counter (after increment 1): ${counter.getValue()}`);

// increment counter
let inc = counter.increment;
//inc(); // it doesn't work
// check value
//console.log(`counter (after increment): ${counter.getValue()}`);

// increment counter
inc = () => counter.increment();
inc(); // it works!!
// check value
console.log(`counter (after increment 2): ${counter.getValue()}`);

// increment counter
fetch(() => counter.increment()); // it works!!
function fetch(callback) {
    callback();
}
// check value
console.log(`counter (after fetch 3): ${counter.getValue()}`);

// increment counter
inc = counter.increment;
inc.call(counter); // it works!!
// check value
console.log(`counter (after increment 4): ${counter.getValue()}`);


// Class Counter with binding
class BindCounter {
    constructor() {
        this.value = 0;
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.value++;
    }
    getValue() {
        return this.value;
    }
}

// create counter
let bindCounter = new BindCounter();
console.log(`bindCounter (initial): ${bindCounter.getValue()}`);

// increment counter
let incWithBind = bindCounter.increment;
incWithBind(); // it works!!
// check value
console.log(`bindCounter (after increment 1): ${bindCounter.getValue()}`);