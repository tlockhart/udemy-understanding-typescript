class Department {
  // Access Modifier: Restrict how class properties can be accessed outside the class
  public name: string;

  // employees can only be accessed via public methods outside the class (via the object instance)
  private employees: string[] = [];

  /** NOTE: Public properties are not secure.  They can be updated outside of the app.
   *  Variables are public by default, allowing direct access and modification
   *   name: string; 
   *  employees: string[] = [];
   * */

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Declare a new Department instance
const accounting = new Department('Accounting');

// Add employees
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// Example1: Security Risk:
// accounting.employees[2] = 'Anna';

accounting.describe();

accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();