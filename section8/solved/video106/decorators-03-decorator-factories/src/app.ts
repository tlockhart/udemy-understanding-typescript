// Function that returns a function
// Pass in a log string into decorator from factory function
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Example1: Decorator Factory: Returns a decorator function
// Allows configuration when we assign it as a decorator to a class
@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
