interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

// Example1 : Define the structure of the user1 object using the Greetable Interface blueprint.
let user1: Greetable;

user1 = new Person('Max');

user1.greet('Hi there - I am');
console.log(user1);