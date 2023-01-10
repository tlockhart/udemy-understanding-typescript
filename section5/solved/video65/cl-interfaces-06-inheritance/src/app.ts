class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(`${this.name}: Number of Employees: ${this.employees.length}`);
    console.log(`${this.name}: Employees Array: ${this.employees}`);
  }
}

/** 
 * Example 1: Inheritance: The ITDeparment class inherits 
 * all the properties and methods of the Department class.
 *  NOTE: Classes can only inherit from one class.
*/
class ITDepartment extends Department {
  // admins: string[];
  constructor(id: string, public admins: string[]) {
    /**
     * Example 2: super: All subclasses that inherit from a parent 
     * class must call the parents constructor, using the keyword
     * super first, in the subclass's constructor.  All arguments passed 
     * to super will be passed into the parent classes constructor.
     */
    super(id, 'IT');

    // Note: "this" can only be called after calling super
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  /**
   * Example 3: addReport - New method only 
   * available in AccountingDepartment instances.
   * @param text
   */
  addReport(text: string) {
    this.reports.push(text);
  }

  /**
   * Example 4: printReports - New method only
   *  available in AccountingDepartment instances.
   */
   printReports() {
    console.log("Accounting:", this.reports);
  }
}

/**
 * Example1: The instantiated it instance of  
 * the ITDepartment inherits the employees  
 * property, and describe, addEmployee, and 
 * printEmployeeInformation methods from
 * the Department class.
 **/
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'IT2';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Tony');
accounting.printReports();