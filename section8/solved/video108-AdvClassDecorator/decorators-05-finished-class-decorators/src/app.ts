function Logger(logString: string) {
  // Step1: Log Logger Factory
  console.log('LOGGER FACTORY');
  /**
   * Step2: MISSING STEP: Call the WithTemplate and 
   * pass it the Person constructor, because of block scope
   */
  return function(constructor: Function) {
    // Step7: Log the Program Execution Returned
    console.log(logString);
    // Step8:  Log Logger Contructor
    console.log("Logger Constructor:", constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
 // Step 3: Logs Template Factory
  console.log('TEMPLATE FACTORY');
  
  return function(constructor: any) {
    // Step4: Log Rendering Template
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    // Step5: Create new Person instance
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
    // Step6: Return Execution to the Logger
  }
}

// Example 1: Nested Decorators execute from Top to Bottom 
@Logger('Program Execution Returned To Logger')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating a new Person instance...');
  }
}

// Step 9: Instantiate a new Person instance
const pers = new Person();
// Step10: Log the new Person Instance
console.log("New Person Instance:", pers);
