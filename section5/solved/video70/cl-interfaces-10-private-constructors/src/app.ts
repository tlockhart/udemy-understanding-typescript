abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return { name: name };
  }

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

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  /**
   * Example1: Create a single static instance inside the parent 
   * class that will be returned by the getInstance Method
   */
  private static instance: AccountingDepartment;

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

  /**
   * Example2: Add the private modifier to the contructor of a class to
   * make it a singleton. Only one instance of the Accounting Departement 
   * class will be permitted
   */
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  /**
   * Example3: In order to call the single instance of 
   * the AccountDepartment class declare a static
   * method that returns the instance
   */
  static getInstance() {
    if (this.instance) {
    // if (AccountingDepartment.instance) {
      return this.instance;
    }

    // if no prior instance has been created make one
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

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

/** 
 * Example4a: You can not instantiate a class that has been 
 * declared as a singleton.  Instead you must call the static
 * getInstance method on the base class
 */
// const accounting = new AccountingDepartment('d2', []);

// Example 4b: Call the static getInstance method of the Accounting Department to get the singleton
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log("First Instance:", accounting, "= Second Instance: ", accounting2, ";isEqual:", accounting === accounting2);

