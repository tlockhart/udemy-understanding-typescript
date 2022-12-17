const userName = 'Max';
// userName = 'Maximilian';
let age = 130;

age = 129;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// Function with a default parameter
const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));

// Calling function with a default parameter
printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

console.log("ActiveHobbies:", activeHobbies);

const person = {
  name: "Tony",
  age: 130
};


const personShallowCopy = { ...person, gender: "male"};
const personReferencePointer = person;

console.log("PersonShallowCopy:", personShallowCopy);
console.log("PersonReference:", personReferencePointer);




