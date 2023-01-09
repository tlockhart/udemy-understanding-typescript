class Department {
  static fiscalYear = 2023;

  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // Example2: Fiscal Year can not be access with this
    // console.log("Fiscal Year:", this.fiscalYear);
    console.log("Constructor: Fiscal Year:", Department.fiscalYear);
  }

  // Example1: Static method that can be accessed directly from the class, not an instance
  static createEmployee(name: string) {
    return {name: name};
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    //Example 3: You can access a static property from a Nonstatic method
    console.log("Fiscal Year from Nonstatic Method:", Department.fiscalYear);
    //  console.log("Fiscal Year:", this.fiscalYear);
  }

  // Can't use a this reference inside a static method
  static returnFiscalYear() {
    //Example 4: You can access a static property from a Static method
    console.log("Fiscal Year from Static Method:", Department.fiscalYear);
    //  console.log("Fiscal Year:", this.fiscalYear);
  }

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
    // Class extends Department, so you must call the Department contructor
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      // Getters must return something
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

// Example1: Calling a static method
const employee1 = Department.createEmployee("Tony");
console.log("Static Properties: Employee:", employee1, "; Fiscal Year:", Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// Exampl2: Can access fiscalYear from nonstatic method
it.describe();
// Exampl3: Can not use this inside a static method, but can access a static property, via className
ITDepartment.returnFiscalYear();

it.name = 'NEW NAME';
it.printEmployeeInformation();
