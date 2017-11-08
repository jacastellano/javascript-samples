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