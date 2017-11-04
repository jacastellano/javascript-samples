/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Equality test
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// '==' operator

if (1 == 1) console.log('1 == 1');

if ('abc' == 'abc') console.log('abc == abc');

var student = {
    name: 'Jose Antonio',
    lastName: 'Castellano Ardila',
    hobbies: ['dance', 'sports', 'music'],
    greet: function () {
        console.log('Hello!!');
    },
};

var studentCopy = {
    name: 'Jose Antonio',
    lastName: 'Castellano Ardila',
    hobbies: ['dance', 'sports', 'music'],
    greet: function () {
        console.log('Hello!!');
    },
};

if (student == studentCopy) {
    console.log('student == studentCopy');
} else {
    console.log('student != studentCopy');
}

if ('1' == 1) console.log("'1' == 1");


// '===' operator

if ('1' === 1) {
    console.log("'1' === 1");
} else {
    console.log("'1' !== 1");
}

if (1 === parseInt('1')) console.log("1 === parseInt('1')");