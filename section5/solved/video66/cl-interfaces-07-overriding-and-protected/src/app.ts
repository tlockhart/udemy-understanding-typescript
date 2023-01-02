// Describes the structure of an object that is required to be implemented in a class.  
// You can not use unions in interfaces, unions are only for type definitions.
interface ModifierInterface {
  /* Index Signature: Solves modifer issue above, Used 
     when you don't know  all the names that will be used 
    on the propert:*/
  [key: string]: any;
}

// Department interface inherits the properties in Modifer Interface.
// NOTE: No call the ModifierInterface is neccessary with interfaces
interface DepartmentInterface extends ModifierInterface {
  admins?: string[];

  // Note: JavaScript only have public modifiers
  // employees: string[],
  //  id: string,

  name: string;
  describe?: (departmentEx: DepartmentInterface) => void;
  addEmployee?: (name: string) => void;
  printEmployeeInformation?: () => void;
}

class Department implements DepartmentInterface {
  /*private classes are only available from inside the class, 
  not classes that inherit from it*/
  // private readonly id: string;

  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department): void {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  printEmployeeInformation(): void {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
  // ITDepartement inherits props of Department so we must call Department constructor
  super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReports();
accounting.printEmployeeInformation();

const sampleDepartment: DepartmentInterface = {
  admins: ['CreativeTech'],
  employees: ['Tony', 'Julie'],
  id: 'd2',
  name: 'Creative Technology',
  describe: () => {
    return sampleDepartment.name;
  },
  addEmployee: (newEmployee) => {
    sampleDepartment.employees.push(newEmployee);
    return sampleDepartment.employees
  },
  // printEmployeeInformation: ct.printEmployeeInformation()!,
  // brandNewProperty: null,
}!

console.log(`SampleDepartment: ${sampleDepartment.name}; 
Accounting: ${accounting.name}; 
Describe: ${sampleDepartment && sampleDepartment?.addEmployee && sampleDepartment.addEmployee?.('Tod')}; 
Name: ${sampleDepartment && sampleDepartment?.describe && sampleDepartment.describe?.(sampleDepartment)}`);


function printEmployeeInformation() {
  throw new Error("Function not implemented.");
}
