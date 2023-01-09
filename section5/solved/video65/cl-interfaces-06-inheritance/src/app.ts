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
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/* Example 1: Inheritance: Add Department properties to ITDepartement */
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    /* Note: When you inherit the base class, always call the super method first in the constructor
      Note: Forward id, and "IT" to the constructor of the Department class */
    super(id, 'IT');

    // Note: "this" can only be called after calling super
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// Instantiated a new instance of the ITDepartment
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Tony');
accounting.printReports();