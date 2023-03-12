/**
 * DataStorage Class
 */
// class DataStorage<T extends string | number | boolean> {
  // Note: The remove function in class is  
  //prone to error unless an object ref is passed in
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

// Example1: Create an instance of the DataStorage class that contains an array of strings
const textStorage = new DataStorage<string>();
textStorage.addItem('Tony');
textStorage.addItem('Max');
textStorage.removeItem('Tony');
console.log(textStorage.getItems());

// Example2: Create an instance of the DataStorage class that contains an array of  numbers
const numberStorage = new DataStorage<number>();
numberStorage.addItem(130);
numberStorage.addItem(45);
numberStorage.removeItem(130);
console.log(numberStorage.getItems());

/**
 * Example3: Create an instane of the DataStorage  
 * class that contains an array of objects
 */
const objStorage = new DataStorage<object>();
const tonyObj = {name: 'Tony'};
objStorage.addItem(tonyObj);
objStorage.addItem({name: 'Max'});
// You must pass in the ref location to be removed instead of a brand new object
objStorage.removeItem(tonyObj);
console.log(objStorage.getItems());