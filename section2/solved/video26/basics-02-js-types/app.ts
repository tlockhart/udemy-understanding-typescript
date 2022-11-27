function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult1(num: number): void {
  console.log("Result: " + num);
}

function printResult2(num: number): undefined{
  console.log("Result: " + num);
  return;
}

printResult1(add(5, 12));
console.log(printResult2(add(5, 12)));

// let someValue: undefined;
