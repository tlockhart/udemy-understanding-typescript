class Department {
    name: string;

    // function used to inialize instance variables
    constructor(n: string) {
        this.name = n;
    }
}

// instantiate a new Department
const accounting = new Department('Accounting');
// Print the accounting object
console.log(accounting);