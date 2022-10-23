const _button = document.querySelector("button");
const _input1 = document.getElementById("num1")! as HTMLInputElement;
const _input2 = document.getElementById("num2")! as HTMLInputElement;

function addNums(num1: number, num2: number):number {
  return num1 + num2;
}

_button.addEventListener("click", function() {
  console.log(addNums(+_input1.value, +_input2.value));
});
