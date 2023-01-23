
/**
 * Example1a: Interfaces can be used to 
 * define the structure of a function.
 */
interface AddFn {
  (a: number, b: number): number;
}

/**
 * Example 1b: Type used to define a function
 */
// type AddFn = (param1:number,  param2: number) => number;

// Example 2: Declare the function add, as a type AddFn
let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
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

let user1: Greetable;

user1 = new Person('Max');
// user1.name = 'Manu';

user1.greet('Hi there - I am');
console.log(user1);
