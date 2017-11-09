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
        console.log('const size value: ' + size);
    }

    size = 42; // It's possible to change
    console.log('let size value: ' + size);

}

testLetConst();


// class Person example
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
const p = new Person("Jose", "Málaga");

// print Name
p.printName();

// print Location
p.printLocation();


class Vehicle {
    constructor(mark, model, color) {
        this.mark = mark;
        this.model = model;
        this.color = color;
    }

    toString() {
        return "Mark: " + this.mark + ", Model: " + this.model + ", Color: " + this.color;
    }
}

class Car extends Vehicle {
    constructor(mark, model, color, licensePlate) {
        super(mark, model, color);
        this.licensePlate = licensePlate;
    }

    toString() {
        return "License Plate: " + this.licensePlate + ", " + super.toString();
    }
}

class Bike extends Vehicle {
    constructor(mark, model, color, size) {
        super(mark, model, color);
        this.size = size;
    }

    toString() {
        return super.toString() + ", Size: " + this.size;
    }
}

const myVehicle = new Vehicle("Seat", "León", "Red");
console.log(myVehicle.toString());

const myCar = new Car("Seat", "León", "Red", "4567HNM");
console.log(myCar.toString());

const myBike = new Bike("Merida", "Scultura Evo", "Blue", "S/M");
console.log(myBike.toString());
