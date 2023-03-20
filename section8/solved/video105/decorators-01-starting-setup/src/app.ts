function Logger(constructor: Function) {
    console.log('Logging...');
    console.log("Constructor:", constructor);
}

// Example1: Add logger a decorator to the Person class
@Logger
class Person {
    name = "Tony";

    constructor() {
        console.log("Creating person object ..");
    }
}

const pers = new Person();
console.log(pers);