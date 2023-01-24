// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number, c: number): number;
}

// created a method of type AddFn
let add: AddFn;

// declare add method
add = (n1: number, n2: number, n3: number) => {
  return n1 + n2  * n3;
};

// Example1: Optional interface properities and methods
interface Named {
  readonly name?: string;
  outputName?: string;

  myMethod?(param1: string, param2: string): string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// Example 2: Optional Class Instance Variables.
class Person implements Greetable {
  name?: string;
  age = 30;

  /**
   * Example3: Optional param in constructor
   * Note: If default value is not supplied the 
   * value is undefined
   */
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  //Example4: How to define a method with optional params
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

// user1 = new Person();
user1 = new Person("Tony");
// user1.name = 'Manu';

user1.greet('Hi there - My name is');
console.log(user1);
