/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features - Binding
  Date: 2017/11/11
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// Class Counter
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
let increment = counter.increment;
//increment(); // it doesn't work
// check value
//console.log(`counter (after increment): ${counter.getValue()}`);

// increment counter
increment = () => counter.increment();
increment(); // it works!!
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
increment = counter.increment;
increment.call(counter); // it works!!
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
increment = bindCounter.increment;
increment(); // it works!!
// check value
console.log(`bindCounter (after increment 1): ${bindCounter.getValue()}`);