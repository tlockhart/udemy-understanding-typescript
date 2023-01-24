interface Named {
  readonly name: string;
}
interface AnotherInterface {
  // Optional Property
  test?: string;
}
/**
 * Example1: Interfaces can extend other interfaces.
 * Note: Every class that implements
 *  Greetable must have a name property.
 */
interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}

class Person implements Greetable {
  // Named is required from Greetable
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
