// Example 1: Interfaces only define the structure of an object
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

// Step 2: Create an object with the Person Interface type
let user1: Person;

/**
 * Step 3: Create the object with the 
 * required fields defined in the interface
 */
user1 = {
  name: 'Max',
  age: 30,
  greet(anyParam: string) {
    console.log(anyParam + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');