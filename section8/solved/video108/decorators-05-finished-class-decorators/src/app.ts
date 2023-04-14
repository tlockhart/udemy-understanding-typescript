const employeesData = [
  {
    name: "Tony",
  },
  {
    name: "Sammy",
  },
];
function Controller(controllerGreeting: string, targetName: string, employeesData: { name: string }[]) {
  console.log(controllerGreeting);
  
  // Constructor is passed from the Person Class:
  return function (constructor: typeof Person) {
    /*******************************
     * Example 1: Original employeesData
    ********************************/
    const person = new constructor(targetName, employeesData);
    console.log("Controller: Original Employees:", person.employees);
    // person.updateName("Anthony", "Bobby");
    // console.log("Person New Name1:", person, person.employees);
    /***************************/
    // Return a class with a constructor 
    return class extends Person {
      constructor(targetName: string, employeesData: { name: string }[], newName: string = "") {
        super(targetName, employeesData, newName,);
      }
    };
  };
}

function NameUpdater(nameUpdaterGreeting: string, targetName: string, newName: string, employeesData: { name: string }[]) {
  console.log(nameUpdaterGreeting);
  
  // The constructor is auto passed in from the Controller return stmt
  return function (constructor: typeof Person) {
    /**
     * Override updateName method in person 
     * constructor passed from Controller
     * Note: updateName method must have the  
     * same signature as the Person class.
     */
    constructor.prototype.updateName = function (_targetName: string, _newName: string) {
      // console.log("Employees:", employeesData);
      const employeeMatch = employeesData.find(
        (employee: { name: string }) => employee.name === targetName
      );
      if (employeeMatch) {
        employeeMatch.name = newName;
      } else {
        console.log(`Could not find employee with name '${targetName}'`);
      }
    }; // constructor overide

    /*************************************
     * Example 2: Updated employeesData
     * ************************************/
    const person = new constructor(targetName, employeesData, newName);
    person.updateName(targetName, newName);
    console.log("NameUpdater: Update Employees:", person.employees)
  };
}

// @WithTemplate('<h1>My Person Object</h1>', 'app')

// Multiple Decorators Class: 
@Controller("Hello from Controller:", "Tony", employeesData)
@NameUpdater("Hello from NameUpdater:", "Tony", "Anthony", employeesData)
class Person {
  targetName = "";
  employees: { name: string }[] = employeesData;
  constructor(targetName: string, _employeesData: { name: string }[], _newName = "") {
    this.targetName = targetName;
    console.log("Person Constructor: Creating person object...");
  }

  updateName(updateName: string, targetName: string) {
    const employeeMatch = this.employees.find(
      (employee) => employee?.name === targetName
    )!;
    employeeMatch.name = updateName;
    console.log("Person New Name:", this.employees)
  }
}
/***************************************
 * Example3: Decorator Execution is completely 
 * seperate from class instantiation
 ****************************************/
// const pers1 = new Person("Tony", employeesData);
// console.log("Pers1:", pers1); 
