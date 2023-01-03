class Department {
  private employees: string[] = [];

  /* Example1: readonly makes sure the variable can not be changed after initialization */
  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // Example1: id is readonly and can not be changed
    // this.id = 'd2';

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