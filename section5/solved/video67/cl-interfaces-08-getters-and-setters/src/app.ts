class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

  // Example1: Getters must return a value.  mostRecentReport  returns the last report
  get mostRecentReport() {
    if (this.lastReport) {
      // Getters must return something
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  /**
   * Example2: Setters must be passed a value.  mostRecentReport 
   * sets the value of the lastReport instance variable. 
   */
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
    console.log("Print Reports:", this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);

/**
 * Example2: Call a setter as if you are setting a property on a class instance.
 * The value you are assigning will be passed to the mostRecentReport method 
 * as an argument 
 */
accounting.mostRecentReport = 'Year End Report';

// Note: Must add a report before calling mos RecentReport
accounting.addReport('Last Report Set...');

// Example1: Call a mostRecentReport as a property of the accounting AcountantDepartment  instance
console.log("Get Last  Report:", accounting.mostRecentReport);

// accounting.printReports();
