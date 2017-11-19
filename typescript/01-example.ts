/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: TypeScript - Introduction
  Date: 2017/11/19
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// declare constant
const size: number = 48;

// declare variable
let price: number = 1999.90;

// declare enum type
enum Color {
    white,
    black,
    red,
    blue,
}

// declare complex type
interface Vehicle {
    mark: string;
    model: string;
    color: Color;
    price?: number;
}

// extends interfaces
interface Car extends Vehicle {
    licensePlate?: string; // optional
    readonly seats: number; //read only
}

interface Bike extends Vehicle {
    size: number;
}

// declare complex objects
const vehicle: Vehicle = {
    mark: "Wolsvagen",
    model: "Passat",
    color: Color.black,
}

const car: Car = {
    mark: "Seat",
    model: "León",
    color: Color.red,
    price: 14000,
    seats: 5,
}

car.licensePlate = "5678HNM";
//car.seats = 6; // cannot update a read only attribute

const bike: Bike = {
    mark: "Merida",
    model: "Scultura",
    color: Color.blue,
    price: 1150,
    size: 48,
}

// functions
function printVehicle(vehicle: Vehicle) {
    console.log(`${vehicle.mark} ${vehicle.model}`);
}

printVehicle(vehicle);
printVehicle(bike);

function printCar(car: Car) {
    console.log(`${car.licensePlate} ${car.mark} ${car.model}`);
}

printVehicle(car);
printCar(car);

// structural typing
const moto = {
    mark: "Honda",
    model: "RC213V-S",
    color: Color.white,
}
printVehicle(moto);

const btt = {
    mark: "Merida",
    model: "TFS 900",
    color: Color.white,
    price: 999,
    size: "L",
    brakes: "disk",
}

// use 'as' example
const vehicleBtt: Vehicle = btt as Vehicle;
//const bikeBtt: Bike = btt as Bike; // size attribute has different types

interface CompleteBike extends Vehicle {
    size: number | string; // size could be a number or a string
}
const completeBikeBtt: CompleteBike = btt as CompleteBike;

function printBike(bike: CompleteBike) {
    printVehicle(bike);
    console.log(`Price: ${bike.price} €, Size: ${bike.size}`);
}
printBike(completeBikeBtt);