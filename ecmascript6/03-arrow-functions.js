/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features - Arrow functions
  Date: 2017/11/11
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// number list
const list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
console.log(`Original list: ${list}`);

// map sample
let incList = list.map(function(value) {
    return value + 1;
});
console.log(`Increased list (A): ${incList}`);

// map with arrow fuction sample
incList = list.map(v => v + 1);
console.log(`Increased list (B): ${incList}`);

// forEach sample
const evenPositionList = [];
list.forEach(function(value,index) {
    if (value % 2 === 0) {
        evenPositionList.push(index);
    }
});

// forEach with arrow fuction sample
const oddPositionList = [];
list.forEach((value,index) => {
    if (value % 2 !== 0) {
        oddPositionList.push(index);
    } 
});

console.log(`Event list: ${evenPositionList.map((value) => list[value])}`);
console.log(`Odd list: ${oddPositionList.map((value) => list[value])}`);