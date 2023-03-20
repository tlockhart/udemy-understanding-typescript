/**
 * Example1: Setter Decorator
 */
 function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log("Target2:", target);
  console.log("Name2:", name);
  console.log("Descriptor2:", descriptor);
}

/**
 * Method Decorator
 * @param target - instance method prototype of object (constructor)
 * @param name - name of the method
 * @param descriptor - method descriptor
 */
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log("Target3:", target);
  console.log("Name3:", name);
  console.log("Descriptor3:", descriptor);
}

/**
 * Parameter Decorator
 * target - instance method prototype of object (constructor)
 * name - name of the method in which we use the paramenter
 * position - The argument position
 */
 function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log("Target4:", target);
  console.log("Name4:", name);
  console.log("Position4:", position);
}

class Product {
  // @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    // getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);