/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Introduction to Prototyping
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Prototye introduction

var students = [];

var addStudent = function (student) {
    students.push(student);
};

var sortStudents = function (key) {
    if (key === 'id') {
        return students.sort(orderById);
    } else if (key === 'name') {
        return students.sort(orderByName);
    } else {
        return students;
    }
};

var orderById = function (first, second) {
    return first.id - second.id;
};

var orderByName = function (first, second) {
    return first.name.localeCompare(second.name);
};

var Student = function (id, name) {

    return {
        id: id,
        name: name,
        showId: function () {
            return this.id;
        },
        showName: function () {
            return this.name;
        }
    }
};


// Prototype examples

// Example 1
function Rectangle() { }

var rec = new Rectangle();

console.log(rec.__proto__ === Rectangle.prototype);
rec.__proto__ = Object.prototype;
console.log(rec.__proto__ === Rectangle.prototype);

// Example 2
var proto = { y: 2 };
var obj = { x: 10 };
obj.__proto__ = proto;

proto.y = 20;
proto.z = 40;

console.log(obj.x === 10);
console.log(obj.y === 20);
console.log(obj.z === 40);

// Example 3
var stringProp = { desc: "description" };

String.__proto__ = stringProp;
var s1 = "333";
var s2 = new String("333");

console.log(String.desc === "description");
console.log(s1.desc === "description");
console.log(s2.desc === "description");

s1.__proto__ = String;  // Can't be set.
s2.__proto__ = String;

console.log(s1.__proto__);
console.log(s2.__proto__);

console.log(s1.desc === "description");
console.log(s2.desc === "description");