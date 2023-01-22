// Example 1a: Interface:
interface Greetable {
  // Note: Interfaces can not have protected or private members
  // Note: Interfaces properties can use union types
  readonly name: string | number;

  greet(phrase: string): void;
}
// Example 1b: Type
type Greetable2 = {
  readonly name: string | number;

  greet(phrase: string): void;
}

// Example 2: Create a blueprint that extends (class inheritance) from Greetable
interface Playable extends Greetable {
  readonly game: string;

  play(phrase: string): void;
}

class Feedable {
  food = "Kibbles 'n Bits";
  // shorthand instance variables
  constructor(protected timePhrase: string) {
  }
  feed(phrase: string) {
    console.log(`${phrase} ${this.food}${this.timePhrase}`)
  };
}

/**
 * Example 3: Create a concrete class that extends (class inheritance)
 * Feedable and implements (interface inheritance) Playable 
 * 
 * Note: you can only implement one interface
 */
class Pet extends Feedable implements Playable {
  // Instance Variables
  game = "Fetch";

  constructor(public name: string) {
    const timePhrase: string = `, before it rains!`;
    // Call Feedable constructor and pass in the timePhrase
    super(timePhrase);
  }
  greet(phrase: string) {
    console.log(`Hi ${this.name}, ${phrase}`);
  }
  play(phrase: string) {
    console.log(`Go ${this.game}, ${phrase}`);
  }
}
const myPet = new Pet("Scooby");
myPet.greet('what a good boy!');
myPet.play('get the stick!');
myPet.feed('Come and get your');

/******************************
 * Example 4: You can not create an  
 * interface with a union Type
 ******************************/
// interface dog: Playable  & Greetable ;
const dog: Playable & Greetable = {
  name: "Scooby",
  game: "Fetch",
  greet: (phrase: string) => {
    console.log(`Hi ${dog.name}, ${phrase}`);
  },
  play: (phrase: string) => {
    console.log(`Go ${dog.game}, ${phrase}`);
  }
}
/*********************************
 * Max Examples:
**********************************/
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

/**************************************
 * Example1a : Define the structure of the user1 
 * object using the Greetable Interface blueprint.
 **************************************/
let user1: Greetable;

user1 = new Person('Max');
console.log(`**********************`);
user1.greet('Hi there - I am');
console.log(user1);
/**************************************/