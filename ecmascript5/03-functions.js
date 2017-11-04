/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Function samples
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Standard function
function square(num) {
    return num * num;
}
console.log(square(3));

// Assigned function to variable
var squareFunc = function square(num) {
    return num * num;
};
console.log(squareFunc(3));

// Assigned anonymous function to variable
var squareAnonFunc = function (num) {
    return num * num;
};
console.log(squareAnonFunc(3));

// Auto invoked anonymous function
var numberToSquare = 3;
console.log(
    (function (num) {
        return num * num;
    })(numberToSquare)
);

// Arguments example
var showMyArgs = function () {
    if (arguments.length > 0) {
        for (var index = 0; index < arguments.length; index++) {
            console.log(arguments[index]);
        }
    } else {
        console.log('No parameters');
    }
};

showMyArgs();
showMyArgs(32, 'jose', ['swin', 'bike', 'run']);