/**
 * Register class properties (title, price) and their validators 
 * in ValidatorConfig when the Course class is defined
 */
//validater blueprint
// Validator Type Syntax: Course : { price: ["required"], title:["positive"]}
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}
 
/**
 * Important: Initially registeredValidators object is empty, but will be loaded
 *  by Postive and Required decorator on Course class declaration
 */
// Syntax: {validatorsConfig,}
const registeredValidators: ValidatorConfig = {};

//Import: Adds a validator to the registeredValidators object
function Required(classInstTarget: any, propName: string) {
  /**
   * Register the class Name (Course) in
   * registeredValidators object, by the name prop
   * Note: class instance passed in as prop
   */
  registeredValidators[classInstTarget.constructor.name] = {
     // Important: Make sure you retain all existing validators and not overwrite
     ...registeredValidators[classInstTarget.constructor.name],
    [propName]: [...(registeredValidators[classInstTarget.constructor.name]?.[propName] ?? []),"required"]
  };
}

function PositiveNumber(classInstTarget: any, propName: string) {
  // Register the className in registeredValidators
  registeredValidators[classInstTarget.constructor.name] = {
    // Important: Make sure you retain all existing validators and not overwrite
    ...registeredValidators[classInstTarget.constructor.name],
    [propName]: [...(registeredValidators[classInstTarget.constructor.name]?.[propName] ?? []),"positive"]
  };
}

/**
 * Should loop through all registeredValidators,
 * And validator the title and price properties
 */
function validate(obj: any) {
  console.log("ObjectInstance:", obj);
  /**
   * Step3: To retrieve the configuration for the object we are dealling with
   * first determine the name of the class (Course) this object is instantiated
   *  from. Get the object's name (Course) from the constructor property.
   * Then get the validatorConfig we set up for that object, by using the
   * name as the key.
   * IMPORTANT: All Registers have been added Initally by the Required
   * Decorator
   */
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  console.log("RegisteredValidator:", registeredValidators);
  console.log("Object Name:", obj.constructor.name);
  console.log("Course Object on RegisteredValidator:", objValidatorConfig);
  // Step4: if there is no objValidator Config the object is valid
  if (!objValidatorConfig) {
    return true;
  } 
  /**
   * Make sure we check both title and price validator
   * properties, by setting isValid to false if one is not valid
   */
  let isValid = true;

    // console.log("ObjValidatorConfig:", objValidatorConfig);
    // If we do find the class name, loop through the registeredValidator keys
    for (const validatorProp in objValidatorConfig) {
      console.log("ValidatorProp", validatorProp);
      // Validate the title and price properties for each validator key (Course)
      for (const validator of objValidatorConfig[validatorProp]) {
        switch (validator) {
          case "required":
            // if the title prop has a none empty update isValid
            isValid = isValid && !!obj[validatorProp]; // make a boolean
            break;
          case "positive":
            // if the price prop is > 0 update isValid
            isValid = isValid && obj[validatorProp] > 0;
            break;
        }
      }
    }
    // Step5: If we complete the for loop all properties are valid
    console.log("Object is valid:", isValid)
    return isValid;
}

class Course {
  /**
   * Step0: All instance variables  are loaded to registeredValidator 
   * at class declaration
   */
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

/**
 * Example1: Create a course instance from input data 
 * Register the instance variables (title, price) in a registeredValidators
 * object and validate the data with a validator function
 */
const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;
// Step1: Create course instance from input
  const createdCourse = new Course(title, price);
  // Step2: Pass course instance to the validate function
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again.")
    return;
  }
  console.log(createdCourse);
})