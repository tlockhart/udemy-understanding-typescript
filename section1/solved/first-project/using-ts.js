var _button = document.querySelector("button");
var _input1 = document.getElementById("num1");
var _input2 = document.getElementById("num2");
function addNums(num1, num2) {
    return num1 + num2;
}
_button.addEventListener("click", function () {
    console.log(addNums(+_input1.value, +_input2.value));
});
