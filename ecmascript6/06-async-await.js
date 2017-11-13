/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features - Promises (async await)
  Date: 2017/11/13
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// it returns a json file that contains a random joke 
const jokeUrl = "https://api.icndb.com/jokes/random";

// it returns a joke promise
function getJoke() {
    // fech() returns a promise
    return fetch(jokeUrl)
        // json() return a promise
        .then((response) => response.json()
            .then((data) => data.value.joke)
            .catch((error) => error.message)
        )
        .catch((error) => error.message);
}

// print the first joke
const jokePromise = getJoke();
jokePromise
    .then(data => console.log(data))
    .catch(message => console.log(message));


// it returns a joke promise using async/await
async function getAnotherJoke() {
    try {
        // fech() returns a promise
        const response = await fetch(jokeUrl);
        // json() return a promise
        const data = await response.json();
        return data.value.joke;
    } catch (error) {
        return error.message;
    }
}

// print the second joke using async/await
async function printAhotherJoke() {
    try {
        let joke = await getAnotherJoke();
        console.log(joke);
    } catch (error) {
        console.log(error);
    }
}
printAhotherJoke();