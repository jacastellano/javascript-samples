/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 5 - Revealing pattern sample
  Date: 2017/11/04
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var myBike = (function () {

    var color;
    var mark;
    var model;
    var size;

    var getColor = function getColor() {
        return color;
    }

    var setColor = function setColor(c) {
        color = c;
    }

    var getMark = function getMark() {
        return mark;
    }

    var setMark = function setMark(m) {
        mark = m;
    }

    var getModel = function getModel() {
        return model;
    }

    var setModel = function setModel(m) {
        model = m;
    }

    var getSize = function getSize() {
        return size;
    }

    var setSize = function setSize(s) {
        size = s;
    }

    var print = function print() {
        console.log(getMark() + ' ' + getModel() + ', ' + getColor() + ', ' + getSize());
    }

    return {
        setColor: setColor,
        setMark: setMark,
        setModel: setModel,
        setSize: setSize,
        print: print,
    };

})();

myBike.setColor("Blue");
myBike.setMark("Mérida");
myBike.setModel("Escultura Evo");
myBike.setSize("M");
myBike.print();

