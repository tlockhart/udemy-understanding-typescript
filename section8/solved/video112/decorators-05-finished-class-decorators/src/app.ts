function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  // Example1: Return a constructor that return an extended constructor
  /**
   * Note1: Let TypeScript know this is a constructor function 
   * (a function we can call with the new keyword to generate a new object)
   * Note2: The type params of the new constructor must match the signature
   * of the Person constructor, so we can instantiate it.  Using ..args allows
   * us to pass in any parameters and still match the Person constructor signature.
   * Note3: The type params of the new constructor must match the signature of the 
   * extended originalConstructor signature
   * Note4: Let TypeScript know the Person Object being produced will have a name
   * property, which can be access via this.name
   * Note5: Add a _ to args, so TypeScript know args is not being used as
   * a variable name
   * /
   
   /** 
    * Example2: IMPORTANT:  The constructor function returned by withTemplate 
   * will replace our originalConstructor function, so when we instantiate the
   *  Person class it will run the new extended constructor, instead.  Therefore, 
   * if we remove the instantiation of the Person class the withTemplate
   * Decorator function will not get returned, therefore Max will not display in 
   * the DOM.
   */
  return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
    /**
     * NOTE7: Create new constructor with additional logic,
     * that extends the class constructor,  which will run when the 
     * Person class is instantiated.
     */
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          // Use this to access the originalConstructor, not instance p
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

// Multiple Decorators: 
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

/**
 * Example3: Since the withTemplate runs during Person instantiation
 * if you comment is out withTemplate will not display Max
 * in the DOM.
 */
const pers = new Person();
console.log(pers);
