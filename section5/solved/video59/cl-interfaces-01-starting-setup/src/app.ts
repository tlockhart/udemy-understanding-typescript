class Department {
    // Instance variable: use the "this.name" to reference variables throughout class
    name: string;

    // Special function used to initialize instance variables with a value
    constructor(n: string) {
        this.name = n;
    }
}

// Instantiate, or create a new instance of the Department class
const accounting = new Department('Accounting');

// Print the accounting object
console.log(accounting);