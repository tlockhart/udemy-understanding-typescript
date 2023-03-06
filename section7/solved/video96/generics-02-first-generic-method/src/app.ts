// Example 1: Object Assign can only merge objects
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, 30);
// console.log(mergedObj);

// Example2: Type Contraints: Restrict the types that a Generic function excepts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, {age: 30});
console.log(mergedObj);