const userName = "Tony";

let age = 130;

age = 129;
// Example 2: Available globally
// var result;


function add(a: number, b: number) {
    // Example 1: Available only within the function block
    // var result;

    // Example 3: Available only with function block
    let result = a + b;
    return result;
}

// console.log(result);

if (age > 20) {
    // Example 4: Available only in the local block where it is defined and any nested blocks
    let isOld = true;
    console.log("isOld:", isOld)
}

// console.log(isOld);