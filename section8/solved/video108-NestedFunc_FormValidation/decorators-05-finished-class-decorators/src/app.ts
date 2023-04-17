// When importing, you must add the .js extension
// import { deepCopy } from "./deepCopy.js";

/***************************
 * Calling an Object from a Class
 **************************/
// type PersonConstructType = new(...args: any[])=>{targetName: string, employees: typeof employeesData, updateName: (updateName: string)=>{}};

 const employeesData = [
    {
      name: "Tony",
    },
    {
      name: "Sammy",
    },
  ];

class Person {
  targetName = "";
  employees = employeesData;
  constructor(targetName: string,  _employeeData: typeof employeesData, _newName = "") {
    this.targetName = targetName;
    console.log("Creating person object...");
  }

  updateName(updateName: string) {
    const employeeMatch = this.employees.find(
      (employee) => employee.name === this.targetName
    );
    if(employeeMatch){
      employeeMatch.name = updateName;
    }
  }
} // class

/**
 * (Maps to WithTemplate decorator) NameUpdaterDecorator function that receives Person Constructor, greeting,
 * and targetName from ControllerDecorator and calls the Person class
 */
// function NameUpdaterDecorator(personConstructor: PersonConstructType, nameUpdaterGreeting: string, targetName: string, _newName: string) {
//   console.log(nameUpdaterGreeting);
//   // Instantiate the person instance
//   const person = new personConstructor(targetName);
 
//   // Note: ShallowCopy will not work for objects with methods and nested props:
//   // const personCopy = {...person};

//   // Note: Must use a deep copy instead;
//   const personCopy = deepCopy(person);
//   console.log("Person2-OriginalEmployees:", personCopy.employees);
//   person.updateName(_newName);
//   console.log("Person2-NewEmployees:", person.employees);
//   return person;
// }

/**
 * (Maps to Logger decorator) ControllerDecorator function that passes Person Constructer, greeting,
 * and targetName to NameUpdaterDecorator function
 */
// function ControllerDecorator(personConstructor: PersonConstructType, controllerGreeting: string, targetName: string, newName: string) {
//   console.log(controllerGreeting);

//   // Return call to the NameUpdaterDecorator
//   return NameUpdaterDecorator(
//     personConstructor,
//     "Hello from the NameUpdaterDecorator",
//     targetName, 
//     newName
//   );
// }

//Example 1: Create a regular Person instance by instantiating a class
//Note: Decorators run at class instantiation
const personInstance1 = new Person("Tony", employeesData);
console.log("Person1-OriginalEmployee:", personInstance1.employees);

// //Example 2: Update the regular Person Object
// personInstance1.updateName("Anthony");
// console.log("Person1-UpdatedEmployees:", personInstance1.employees);

// // Example3: Create a person instance withIn the ControllerDecorator that can be manipulated
// ControllerDecorator(Person as PersonConstructType, "Hello from the ControllerDecorator", "Tony", "Anthony");
