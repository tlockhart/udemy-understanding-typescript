// Example 1: Uncertain if the obj will have a property with a key
// function extractAndConvert(
//   obj: object,
//   key: string
// ) {
//   return 'Value: ' + obj[key];
// }

// extractAndConvert({}, 'name');

/**
 * Example 2: use keyof in generic desc to indicate the second 
 * param should be a key in the first
 */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}, ${key.toString()} is a property within the object` ;
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));
