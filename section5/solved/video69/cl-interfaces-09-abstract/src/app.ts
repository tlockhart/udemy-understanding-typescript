//Example 2: Classes with abstract methods must be declared abstract
abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  /**
   * Example 1: Any variables (id, employees) that should be inherited by
   *  the subclass must be protected or public
   * @param id
   * @param name 
   */
  constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  /**
   * Example1: Abstract method signature forces any classes 
   * that inherit Department to implement a concrete describe
   * method
   */
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

   // Example1: Implementation of abstract method describe, per Department inheritance
  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  /**
   * Example1: Implementation of abstract method describe, 
   * per Department inheritance
   */
  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);

// Example1: Call AccountingDepartements implementation of describe
accounting.describe();
