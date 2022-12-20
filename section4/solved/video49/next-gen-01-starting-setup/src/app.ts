

/***********************************/
// Example1: Global Variable
var result: number | undefined;
/******************************
 * Example 1: var result global scope
 * @param a 
 * @param b 
 * @returns 
 */
function add1(a: number, b: number) {
    // Example 1: result is available inside and outsde the function block
    result = a + b;
    return result;
}
// Note: result is available globally
console.log(`Example1: Global Result: ${result}`);
console.log(`Example1:Function Result Value: ${add1(1, 2)}`);
console.log(`Example1: After Function Call Global Result: ${result}`);

/***********************************/

/******************************
 * Example 2: var result Function Scope
 * @param a 
 * @param b 
 * @returns 
 */
// function add2(a: number, b: number) {
//     // result available only within the function block
//     var result: number | undefined = a + b;
//     return result;
// }

// // Note: result is not available outside of function
// // console.log(`Local Variable Result Not Available: ${result}`);
// console.log(`Example 2: Function Result Value: ${add2(1, 2)}`);
// // console.log(`After Function Call Local Variable Result Not Available: ${result}`);
/***********************************/

/******************************
 * Example 3: let  block  scope
 * @param a 
 * @param b 
 * @returns 
 */

// function add3(a: number, b: number) {
//     // Note: Available only within function block
//     let result: number | undefined = a + b;
//     return result;
// }
// // Note: Result is not availabe outside the function 
// // console.log(`Local Variable Result Not Available: ${result}`);
// console.log(`Example3:  Function Return Value ${add3(1, 2)}`);
// // console.log(`After Function Call Local Variable Result Not Available: ${result}`);
/***********************************/

/*******************************/
// Example 4: Block scope
//  const userName = "Tony";
//  let age = 130;
//  age = 129;

// if (age > 20) {
//     //  Note: let uses block scope, which is available only between the curly braces, in which it is defined and any nested blocks
//     const isOld1: boolean | undefined = true;
//     let isOld2: boolean | undefined = true;
//     var isOld3: boolean | undefined = true;

//     console.log("inside block scope using const: isOld:", isOld1);
//     console.log("inside block scope using const: isOld:", isOld2);
//     console.log("inside block/global scope using var: isOld:", isOld3)
// }

// // Note: isOld is available with the code block only
// // console.log("Outside block scope using const: isOld:", isOld1);
// // isOld1 = false;
// // console.log("Outside block scope using const: isOld:", isOld2);
// // isOld2 = false;

// console.log("Outside block scope using var: isOld:", isOld3);
// isOld3 = false;
// console.log("Potential Error: isOld3 value has been updated outside block scope: new isOld:", isOld3);

/*******************************/