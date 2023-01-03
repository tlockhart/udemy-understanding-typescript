/********************************************
 * Example1: 
 * Implement Multiple Departments using Simple Objects:
***********************************************/
// The first instance of a Department called Accounting1
const accounting1 = {
  name: "Accounting1",
  describe: () => {
    return `Department: ${accounting1.name}`;
  },
}

// The second instance of a Department called Payroll1
const payroll1 = {
  name: "Payroll1",
  describe: () => {
    return `Department: ${payroll1.name}`;
  },
}

console.log(`${accounting1.describe()}`);
console.log(`${payroll1.describe()}`);
/***************************/
// Example2: Classes
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  /** THIS EXAMPLE: "this" keyword is a reference pointer to the current  
   * Department class.  The describe method does not take an actual 
   * instance of the parameter, as it is understood that the describe method will
   * be executed on the current instance of the class.  However, the object must 
   * have the same structure as the class, or else execution will result in an 
   * undefined error.  In order, to receive a logical error, we must pass the 'this' 
   * keyword for TypeScript to peform type checking.
    */
  describe(this: Department) { 
    // describe() {
    console.log('Department: ' + this.name);
  }
}

// Instantiate a new instance of the Department class
const accounting2 = new Department('Accounting2');

// Printing the name
accounting2.describe();

/**
 * INHERITANCE EXAMPLE: The author is attempting to display the concept of inheritance:
 * We are passing the describe method from the accounting2 object to the  
 * payroll2 object's describe property,  Since the describe method prints the 
 * name of the object that called it, the paroll2 object's name property is printed.
 */
const payroll2 = { name: 'Payroll2', describe: accounting2.describe };

//  Call the passed describe method from accounting, but use the data from the calling instance
payroll2.describe();

/** Recommended Approach: 
 * Step1: Instantiate a new insance.  
*  Step2: Then call the method from the mew instance
*/ 
// Step1: Instantiate a new instance
const payroll3 = new Department('Payroll3');
// Step2: Call the method from the new instance
payroll3.describe();
