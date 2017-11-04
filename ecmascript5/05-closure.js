/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Closure example
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Closure example
var Counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function (inc) {
            changeBy(inc);
        },
        decrement: function (dec) {
            changeBy(-dec);
        },
        value: function () {
            return privateCounter;
        }
    }
})();

console.log(Counter.value());
Counter.increment(2);
Counter.increment(2);
console.log(Counter.value());
Counter.decrement(3);
console.log(Counter.value());