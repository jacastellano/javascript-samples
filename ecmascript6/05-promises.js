/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  Description: EcmaScript 6 - New features - Promises
  Date: 2017/11/12
  Author: José Antonio Castellano Ardila
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// function with promise sample
function findPersonById(id) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(id) && id > 0) {

            // simulate data access process
            const delay = id * 1000;
            // success
            setTimeout(() => resolve({
                id: id,
                name: 'Jose',
                sex: 'Male',
                idAdress: 29,
            }), delay);

        } else {
            // error
            reject(new Error(`Person ${id} not found`));
        }

    });
}

// promise sample with success result
findPersonById(3)
    .then((person) => console.log(person))
    .catch((error) => console.log(error.message));

// promise sample with success result
findPersonById(2)
    .then((person) => console.log(person))
    .catch((error) => console.log(error.message));

// promise sample with error result
findPersonById(null)
    .then((person) => console.log(person))
    .catch((error) => console.log(error.message));


// function with promise sample
function findAdressById(id) {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(id) && id === 29) {

            // simulate data access process
            const delay = id * 100;
            // success
            setTimeout(() => resolve({
                id: id,
                country: 'Spain',
                city: 'Málaga',
                street: 'Ayala',
                number: 7,
            }), delay);

        } else {
            // error
            reject(new Error(`Adress ${id} not found`));
        }

    });
}

// multiple promises
findPersonById(5)
    .then((person) => {
        findAdressById(person.idAdress)
            .then((adress) => {
                console.log(person);
                console.log(adress);
            })
            .catch((error) => {
                console.log(person);
                console.log(error.message);
            });
    })
    .catch((error) => console.log(error.message));



// All specified promises finished
let promisePerson1 = findPersonById(1);
let promisePerson2 = findPersonById(10);

Promise.all([promisePerson1, promisePerson2])
    .then((people) => {
        if (people[0].id >= people[1].id) {
            console.log(people[0]);
        } else {
            console.log(people[1]);
        }
    });
