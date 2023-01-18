// function merges two object and returns the single object.
// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

/** 
 *Example 1: TypeScript cannot tell if the type is a primitive or an object,
 * So explicitly extend from object
 */
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
// console.log(merge({name: "Tony"}, {age: 153}));
const mergedObj1 = merge({name: "Tony"}, {age: 153});
/**
 *  Example 2: Specifically tells typescript what types T is the (name 
 * and hobbies objects) and the Type for U (age object) (REDUNDANT)
 */
const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: "Tony", hobbies: ['Sports']}, {age: 30});
console.log("Age:", mergedObj1.age);

