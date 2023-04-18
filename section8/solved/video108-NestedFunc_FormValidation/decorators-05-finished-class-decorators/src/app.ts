// When importing, you must add the .js extension
// import { deepCopy } from "./deepCopy.js";

/***************************
 * Calling an Object from a Class
 **************************/
// type PersonConstructType = new (...args: any[]) => { targetName: string, employees: typeof employeesData, updateName: (updateName: string) => {} };

const employeesData = [
  {
    name: "Tony",
  },
  {
    name: "Sammy",
  },
];
/**
 * Person: The purpose of this class is to search for
 *  a target name and update it with a new name.
 */
class Person {
  targetName = "";
  employees = employeesData;
  constructor(targetName: string, _employeeData: typeof employeesData, _newName = "") {
    this.targetName = targetName;
    console.log("Creating a new Person instance...");
  }
  // Perform name search and update name to new Name
  updateName(updateName: string) {
    const employeeMatch = this.employees.find(
      (employee) => employee.name === this.targetName
    );
    if (employeeMatch) {
      employeeMatch.name = updateName;
    }
  }
} // class

/**
 * (Maps to WithTemplate decorator) NameUpdaterDecorator function that receives Person Constructor, greeting,
 * and targetName from ControllerDecorator and calls the Person class
 */
// function NameUpdaterDecorator(
//   personConstructor: PersonConstructType,
//   nameUpdaterGreeting: string,
//   targetName: string,
//   _newName: string
// ) {
//   //Step3: Log the nameUpdaterGreeting
//   console.log(nameUpdaterGreeting);
//   // Step4: Instantiate the person instance
//   const person = new personConstructor(targetName);

//   // Example4: ShallowCopy - Only copies top-level obj. properties, 
//   // but any nested objects or ARRAYS are still referenced by 
//   // the original object, not copied.
//   // **REMEMEBER TO COMMENT THE DEEPCLONE IMPORT
//   // const personCopy = {...person};

//   // Step4: Clone original person with deep copy (building a new house with different address):
//   const personCopy = deepCopy(person);

//   // Step5: Log the original employee data
//   console.log("NameUpdater: Person2-OriginalEmployees:", personCopy.employees);
//   // Step6: Update the targetName with the newName
//   person.updateName(_newName);
//   // Step7: Log the new employee data
//   console.log("NameUpdater:Person2-NewEmployees:", person.employees);
//   // Step8: Return to ControllerDecorator
//   return;
// }

/**
 * (Maps to Logger decorator) ControllerDecorator function
 * receives Person Constructer, greeting, and targetName, which 
 * is passed as argements to the NameUpdaterDecorator function
 */
// function ControllerDecorator(
//   personConstructor: PersonConstructType,
//   controllerGreeting: string,
//   targetName: string,
//   newName: string
// ) {
//   // Step1: Output controllerGreeting
//   console.log(controllerGreeting);

//   // Step2: Call to the NameUpdaterDecorator
//     NameUpdaterDecorator(
//       personConstructor,
//       "Hello from the NameUpdaterDecorator",
//       targetName,
//       newName
//     );
//     // Step9: Return string 
//    return "ControllerDecorator: Finished Execution"; 
// }

// //Example 1: Create a regular Person instance by instantiating a class
// //Note: Decorators run at class instantiation
const personInstance1 = new Person("Tony", employeesData);
console.log("Person1-OriginalEmployee:", personInstance1.employees);

// //Example 2: Update the regular Person Object
// personInstance1.updateName("Anthony");
// console.log("Person1-UpdatedEmployees:", personInstance1.employees);

// Example3: Create a person instance withIn the ControllerDecorator that can be manipulated
//** REMEMBER uncomment DEEPCOPY Import and PersonConstructType */
// Step10: Log Conroller Decorator Finished:
// console.log(ControllerDecorator(Person as PersonConstructType, "Hello from the ControllerDecorator", "Tony", "Anthony"));
