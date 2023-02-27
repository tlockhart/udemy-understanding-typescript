// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// // Example1:
// // interface ElevatedEmployee extends Employee, Admin {}

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: 'Max',
//   privileges: ['create-server'],
//   startDate: new Date()
// };

type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

/**
 *  Example2: TypeScript does not know
 * if the result is a number or a string,
 * therefore you can't called string methods
 * on the result
 */
const result = add("Tony", "Max");
result.split(' ');

