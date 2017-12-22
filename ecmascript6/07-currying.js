
// sum function with two arguments
let sum = function sum(a,b) {
  return a + b;
}
console.log(sum(2,3));

// sum function with one argument
sum = function sum(a) {
  return function(b) {
    return a + b;
  }
}

// increment function based in sum function
const increment = sum(3);
console.log(increment(5));

sum = (a,b) => a + b;
console.log(sum(8,3));

sum = (a) => (b) => a + b;
console.log(sum(8)(2));