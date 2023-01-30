// Example 1a: Intersection Between Object Types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

// Example 2: Intersection Between Two Union Types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

let account: Universal = 12345;
// let account2: Universal = "12345";
console.log( `Account Number: ${account}`);
/************************************
 * Example 1b: Interfaces
 *************************************/
interface Admin2 {
    name: string;
    privileges: string[];
};

interface Employee2 {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee2 = Admin2 & Employee2;
interface ElevatedEmployee2 extends Admin2, Employee2 {}

const e2: ElevatedEmployee2 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}
