"use strict";

//function createUser(firstName = null, lastName = null, age = null)

function createUser(firstName, lastName, age) {
    let obj = {
        firstName: (firstName || null),
        lastName: (lastName || null),
        age: (age || null),
    }
    return obj;
}

let player = createUser( "", "ivanov", 33);

