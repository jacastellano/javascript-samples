/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features - let, const & scope
  Date: 2017/11/05
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// let, const & scope sample
function test() {

    // declare variable
    let size = 38;

    // scope
    {
        // declare constant
        const size = 40;
        //size = 42; // It isn't possible to change
        console.log(`const size value: ${size}`);
    }

    size = 42; // It's possible to change
    console.log(`let size value: ${size}`);

}

test();