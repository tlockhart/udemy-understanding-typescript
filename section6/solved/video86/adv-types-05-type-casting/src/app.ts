// const paragraph = document.querySelector('p');
// const paragraph = document.getElementById('message-output');
// const userInputElement = document.getElementById('user-input')!;

// Example1: TypeCast Option 1: Angle Brackets
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// Example2: TypeCast Option 2: As TypeCasting option
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// Example3: TypeCasting with typechecking:
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}