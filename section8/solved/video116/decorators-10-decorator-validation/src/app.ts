/**
 * Register class properties (title, price) and their validators 
 * in ValidatorConfig when the Course class is defined
 */

// ValidatorConfig Type Syntax: Course : { price: ["required"], title:["positive"]}
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}

/**
 * Important: Initially registeredValidators object is empty, but will be loaded
 *  by Postive and Required decorator in Course class declaration
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
    [propName]: [...(registeredValidators[classInstTarget.constructor.name]?.[propName] ?? []), "required"]
  };
}

function PositiveNumber(classInstTarget: any, propName: string) {
  // Register the className in registeredValidators
  registeredValidators[classInstTarget.constructor.name] = {
    // Important: Make sure you retain all existing validators and not overwrite
    ...registeredValidators[classInstTarget.constructor.name],
    [propName]: [...(registeredValidators[classInstTarget.constructor.name]?.[propName] ?? []), "positive"]
  };
}

/**
 * validate: Receives the course object, creates an
 * objValidatorConfig, which contains a list of
 * registeredValidators.  Loop through the 
 * registeredValidators {price: ["required"], title:["positive"]}
 * on the Course object and compare with 
 * the obj property (title, price) values.  
 * Determine if the values are exceptable.  
 */
function validate(obj: any) {

  // Error Components
  const titleError = document.getElementById("titleError") as HTMLInputElement;
  const priceError = document.getElementById("priceError") as HTMLInputElement;
  // Reset Previous Errors:
  titleError.textContent = "";
  priceError.textContent = "";

  console.log("ObjectInstance:", obj);
  /**
   * Step3: To retrieve the configuration for the object we are dealing with
   * first determine the name of the class (Course) this object is instantiated
   *  from. Get the object's name (Course) from the constructor property.
   * Then loop through the validatorConfig keys from the object and perform
   * your validations on the obj properties (title, course).
   * 
   * IMPORTANT: All Validators (Positive and Required) will be registered
   * when the instance variables (title, price) are declared and decorators added
   */
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  console.log("RegisteredValidator:", registeredValidators);
  console.log("Object Name:", obj.constructor.name);
  console.log("Course Object on RegisteredValidator:", objValidatorConfig);
  /**
   * Step4: If no decorators have been the instance variables
   * then, there are no properties to validate, so return true
   */
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
          const titleErrorAdded = objValidatorConfig[validatorProp][0];
          const titleInvalid = obj[validatorProp].length <= 0;
          console.log("Title InValid:", titleInvalid);
          if (titleInvalid) {
            titleError.textContent = `Title is ${titleErrorAdded}`;
          }
          else {
            titleError.textContent = "";
          }
          break;
        case "positive":
          // if the price prop is > 0 update isValid
          isValid = isValid && obj[validatorProp] > 0;
          const priceErrorAdded = objValidatorConfig[validatorProp][0];
          const priceValid = (!Number.isNaN(+obj[validatorProp])) &&  +obj[validatorProp] > 0;
          console.log("Price InValid:", !Number.isNaN(+obj[validatorProp]), +obj[validatorProp] > 0, priceValid);
          if (!priceValid) {
            priceError.textContent = `Price should be ${priceErrorAdded}`;
          }
          else {
            priceError.textContent = '';
          }
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
   * Step0: All instance variables  are loaded in the registeredValidator 
   * at class declaration.  If you do not add the decorator, 
   * the objValidatorConfig will be empty
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
    // alert("Invalid input, please try again.")
    return;
  }
  // clear if no problem found
  titleEl.value = "";
  priceEl.value = "";
  console.log(createdCourse);
})