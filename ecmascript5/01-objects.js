/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Objects samples
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Object sample
var student = {
    name: 'Jose Antonio',
    lastName: 'Castellano Ardila',
    hobbies: ['dance', 'sports', 'music'],
    greet: function () {
        console.log('Hello!!');
    },
};

// Show object properties 
var showObjectProperties = function (obj) {

    // Iterate object properties
    for (var key in obj) {
        var value = obj[key];

        // Check if it is an array
        if (Array.isArray(value)) {
            var arrayValue = '[';

            // Iterate array
            for (var index = 0; index < value.length; index++) {
                if (index > 0) {
                    arrayValue += ', ';
                }
                var element = value[index];
                arrayValue += element;
            }
            arrayValue += ']';
            console.log(key + ': ' + arrayValue);

        } else {
            console.log(key + ': ' + value);
        }
    }
}

showObjectProperties(student);