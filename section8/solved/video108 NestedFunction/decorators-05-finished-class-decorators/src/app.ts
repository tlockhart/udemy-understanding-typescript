/***************************
 * Calling an Object from a Class
 **************************/
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
  constructor(targetName,  employeeData, newName = "") {
    this.targetName = targetName;
    console.log("Creating person object...");
  }

  updateName(updateName) {
    const employeeMatch = this.employees.find(
      (employee) => employee.name === this.targetName
    );
    employeeMatch.name = updateName;
  }
}

/**
 * (Maps to Logger decorator) controller function that passes Person Constructer, greeting,
 * and targetName to nameUpdater function
 */
function controller(personConstructor, controllerGreeting, targetName, newName) {
  console.log(controllerGreeting);
  return nameUpdater(
    personConstructor,
    "Hello from the nameUpdater",
    targetName, newName
  );
}
type PersonConstructType = new(...args: any[])=>{targetName: string, employees: typeof employeesData, updateName: (updateName: string)=>{}};

/**
 * (Maps to WithTemplate decorator) nameUpdater function that receives Person Constructor, greeting,
 * and targetName from controller and calls the Person class
 */
function nameUpdater(personConstructor: PersonConstructType, nameUpdaterGreeting: string, targetName: string, newName: string) {
  console.log(nameUpdaterGreeting);
  const person = new personConstructor(targetName);
  console.log("Person2OriginalName:", person.employees);
  person.updateName(newName);
  return person;
}

// // Example 1: Create a person instance by instantiating a class
// const personInstance1 = new Person("Tony", employeesData);
// console.log("Person1Name:", personInstance1.employees);
// personInstance1.updateName("Anthony");
// console.log("Person1Name:", personInstance1.employees);

// // Example2: Create a person instance that can be manipulated within a function
// const personInstance2 = controller(Person, "Hello from the controller", "Tony", employeesData, "Anthony");
// console.log("Person2NewName:", personInstance2.employees);
