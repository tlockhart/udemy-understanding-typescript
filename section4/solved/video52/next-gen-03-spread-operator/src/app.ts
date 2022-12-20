// Example 1: Concatenating values to a list with the Spread Operator:
/*******************************************************/
const activeHobbies = ['Hiking'];
const newHobbies = ['Sports', 'Cooking'];

// activeHobbies.push(newHobbies[0], newHobbies[1]);
activeHobbies.push(...newHobbies);
console.log("ActiveHobbies:", activeHobbies);
/*******************************************************/

// Example 2: Object Reference Pointers verses Shallow Copy using the Spread Operator:
/***********************************/
const person = {
  name: "Tony",
  age: 130,
  species: "Alien"
};
console.log("OriginalPerson:", person);

const personShallowCopy = { ...person, gender: "male"};
console.log("PersonShallowCopy:", personShallowCopy);

const personReferencePointer = person;
console.log("PersonReferencePointer:", personReferencePointer);

personReferencePointer.species= "Human";
console.log("NewPerson", person);

// const nestedObj = {
//   name: "Tony",
//   location: {
//     state: "Georgia",
//     city: "Atlanta",
//   }
// };
/*******************************************************/
