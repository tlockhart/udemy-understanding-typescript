class Department {
  
  private employees: string[] = [];

/** Example1: Step1: shorthand declaration/initialization of instance variables
 * Note: This method only works if you are passing in values to the constructor
 *  private id: string;
 *  private name: string;
 */
  constructor(private id: string, public name: string, public newParam: string) {
    /** Example1: Step2: instance variable will be automatically initialized from the contructor 
     * Code below is unecessary
     * this.id = id;
     * this.name = n;
     */
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    console.log(`New Param: ${this.newParam}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("Employee Length:", this.employees.length);
    console.log("Employees Array:", this.employees);
    console.log("Employee Department:", this.name);
  }
}

// Example1: Instantiate a new instance of the Department object
const accounting = new Department('d1', 'Accounting', 'Test');
// const accounting = new Department('d1', 'Accounting');


accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

accounting.name = 'NEW DEPARMENT NAME';
accounting.printEmployeeInformation();