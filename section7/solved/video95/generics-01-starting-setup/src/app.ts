// // Example 1: Function merges two objects and returns an array objects.
// function merge(objA: object, objB: object) {
//     // merges a series of objects into an object array and returns the results
//     return Object.assign(objA, objB);
// }
// const results = merge({name: "Tony"},{age: 89});
// console.log(results);
// // Example 2: We cannot access specific properties from the results of the merge function
// const mergedObj = results;
// const age = mergedObj.age;


/** 
 *Example 3: Function Inputs dictate the 
 * actual parameter types at runtime, which
 * allows TypeScript to infer the function's
 * return type.
 * Requirement: Explicitly extend from object
 */
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// console.log(merge({name: "Tony"}, {age: 153}));
// const mergedObj1 = merge({name: "Tony"}, {age: 153});

/**
 *  Example 4: Identify the parameter types T (name 
 * and hobbies objects) and U (age object) is redundant
 */
// const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: "Tony", hobbies: ['Bingo']}, {age: 89});
// console.log("Age:", mergedObj2.age);

