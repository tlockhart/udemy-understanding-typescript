// unknown type is used when we don't know the type the user will enter:
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// You must use typechecking to assign a variable declared as unknown to a variable with a fixed type
if (typeof userInput === 'string') {
  userName = userInput;
  console.log("UserName:", userName);
}