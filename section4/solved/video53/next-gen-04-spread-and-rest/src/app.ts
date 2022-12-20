// Except a list of argument and add them to an array
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// Pass values
const addedNumbers = add(5, 10, 2, 3.7);
console.log("AddNumbers:", addedNumbers);