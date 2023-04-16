/**
 * Exampld 2: Build a decorator that will autobind the this 
 * in the showMessage printer method to the printer object
 * it belongs to
 */
// Syntax: Autobind(target: any, methodName: string | Symbol | number, descriptor: PropertyDescriptor)
function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  // Step1: Get a reference to the showMessage method from the propertyDescriptor.value property
  const originalMethod = descriptor.value;

  // Step2: Setup another propertyDescriptor to be returned
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // Step3: Add a getter to setup the new logic before we execute the function
    get() {
      // Step4: Bind this ( the printer object is what the this refers to)
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  // Step5: Return the new propertyDescriptor to override the old propertyDescriptor
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  // Add AutoBind to the showMessage method to bind the this 
  @Autobind
  showMessage() {
    /**
     * When calling the showMessage in a 
     * Printer instance, we must bind the 
     * this, so this refers to the class instead
     */
    alert(this.message);
  }
}

const p = new Printer();
const button = document.querySelector('button')!;
/**
 * Example1: trigger show message on click,
 * bind p to the Printer class, instead of the 
 * button using bind property
 */
// button.addEventListener('click', p.showMessage.bind(p));
/**
 * Example2: trigger show message on click,
 * bind p to the Printer class, instead of the 
 * button using AutoBind Decorator
 */
button.addEventListener('click', p.showMessage);