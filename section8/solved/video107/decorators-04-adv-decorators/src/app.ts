function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
/**
 * Example 1: Create a Decorator Factory that 
 * renders template  to the dom whenever the  
 * component gets instantiated
 */
function WithTemplate(template: string, hookId: string) {
  /**
   * anonymous function which is actually a 
   * decorator which adds a header template  to a div
   **/
  return function(constructor: any) {
    // return function (_: function){}
    const hookEl = document.getElementById(hookId);
    /* all the target class constructor and pass 
   class properties to a template to be rendered
   */
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
