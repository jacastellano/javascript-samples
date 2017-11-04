/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Scope tests
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var greet = function greet() {
    var hello = 'Hello!!';
    console.log(hello);
}

greet();
//console.log(hello);

var store = function () {
    var items = [];
    var addItem = function () {
        var item = {
            description: 'A',
            value: 89,
        };
        items.push(item);
        return items;
    };
    return addItem();
};

console.log(store());

var g = 'In global';
var func = function () {
    var local = 'Local';
    var g = 'I´m in local as well';
    console.log(local);
    console.log(g);
}

console.log(g);
func();