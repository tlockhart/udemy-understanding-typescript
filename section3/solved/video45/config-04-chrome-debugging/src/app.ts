let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return null;
}
function nestedFunction() {
  const status = "Executed nestedFunction"
  return status;
}

function clickHandler( message1: string) {
  console.log(`message1: ${message1}`);
  const inputValue = (<HTMLInputElement>document.getElementById("fname")).value;
  const message2 = `inputValue: ${inputValue}`;
  console.log(`message2: ${message2}`);
  const message3 = nestedFunction();
  console.log(`message3: ${message3}`);
}
// a comment
if (button) {
  /**********************
   BINDING: If the clickHandler is a method inside a class you would bind the handler to keyword "this", using clickHandler.bind(this.displayName, paramater);
  
   This refers to the object (button) that is calling the function
  
   Bind manually associates keyword "this" with the clickHandler that will be executed
  
   However, since there is no class, there is no need to bind that clickHandler to anything.  Therefore, you can bind the clickHander to null
  // Binding Explanation: https://www.youtube.com/watch?v=Pv9flm-80vM
  ***********************************************/
  button.addEventListener('click', clickHandler.bind(null, "Executing Click Handler"));
}
