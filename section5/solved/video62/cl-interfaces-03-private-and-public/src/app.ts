class Department {
  // Access Modifier: Restrict how class properties can be accessed outside the class
  public name: string;
  // employees can only be accessed via public methods outside the class
  private employees: string[] = [];

  // Variables are public by default, allowing direct access and modification
  // name: string; 
  // employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    // validation etc
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

accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();