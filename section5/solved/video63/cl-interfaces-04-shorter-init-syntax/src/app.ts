class Department {
  
  private employees: string[] = [];

/** Example1: Step1: shorthand declaration/initialization of instance variables, 
 * in the constructor parameters, instead or rewriting them
 *  private id: string;
 *  private name: string;
 */
  constructor(private id: string, public name: string) {
    /** Example1: Step2: instance variable will be automatically initialized from the contructor 
     * Code below is unecessary
     * this.id = id;
     * this.name = n;
     */
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();