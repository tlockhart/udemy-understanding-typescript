/**
 * Example 1: Interfaces and types are not exactly the same:
 * Interfaces: Can only be used to describe the structure of an object
 * Types: Can store union types, interfaces can't
 */

type Person1 = {
  name: string;
  age: number;
  greet(phrase: string): void;
}

type Alien1  = {
  superPower: string;
  homePlanet: string;
}

type superHeroe1 = Person1  & Alien1 ;

interface Person2 {
  name: string;
  age: number;
  greet(phrase: string): void;
}

interface Alien2  {
  superPower: string;
  homePlanet: string;
}

// Example 1: Interfaces can not store union types or interfaces
// interface superHeroe2 = Person2  & Alien2 ;

// Example2: An Interface is a contract a class has to adhere to:
interface Greetable {
  name: string;

  greet(phrase: string): void;
}
interface Agable {
  age: number;
}

/**
 *  Example3: An interface is implemented by a class
 * A class can implement multiple interfaces
 */
class Person implements Greetable, Agable {
  name: string;
  age = 30;
  occupation: string = "Doctor";

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

/**
 * Example 4: user1 object's Person blueprint implements Greetable
 * Since Person inherits from Greetable the user1 object can also be of
 * type Greetable
 */
let user1: Greetable = new Person('Max');
// let user1: Person = new Person('Max');


user1.greet('Hi there - I am');
console.log(user1);