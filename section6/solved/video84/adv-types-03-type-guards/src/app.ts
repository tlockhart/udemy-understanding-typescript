type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  /**
   * Example 1: Primitive Type Guards:  Use
   * "typeof" to check the type of primitive 
   * vars to make sure they are used correctly
   */
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  /**
   * Example2: Property Guard: 
   * Type Guard with "in" to check if 
   * privileges is a property on emp, instead 
   * of typeof, which returns "object", Since 
   * custum types are only known at runtime,
   * you can not use it for type checking
   */
  // if (typeof emp === "object") {
  // if (typeof emp === "Employee") {
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}
// Example 2: Call Print Elevated Employees
printEmployeeInformation(e1);
printEmployeeInformation({name: "Tony", startDate: new Date()});


class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  /**
   * Example3: Instance Type Guard:
   * When two classes have some similiarity
   * but some differences, we need to check
   * if the property exists with "in" 
   */
  // if ( 'loadCargo' in vehicle) {
  
  // Note: Instanceof can not be used with interfaces, only classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
