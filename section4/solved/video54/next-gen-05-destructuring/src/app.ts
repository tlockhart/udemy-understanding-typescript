// Example1: Array Destructuring
/***************************/
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log("HobbiesObject:", hobbies, "Hobbies1:", hobby1, "Hobbies2:", hobby2, "RemainingHobbies:", remainingHobbies);
/***************************************************/

// Example2: Object Destructuring:  
/***************************/
const person = {
  firstName: 'Max',
  age: 30
};

// Curly braces contain property names in the person object
// Note: Use the alias userName, when referring to firstName
const { firstName: userName, age } = person;
console.log("UserName:", userName, "Age:", age, "PersonObject:", person);