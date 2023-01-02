class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // "this" keyword is a reference pointer to this instance of the Department Object
  // describe(this: Department) {
    describe() {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

// Since the describe method prints the name of the object, the accountingCopy object must have s a name property
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// const accountingCopy = {  describe: accounting.describe };

accountingCopy.describe();