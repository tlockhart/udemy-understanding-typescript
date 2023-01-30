/**
 *  Example 1: Discriminating Types:
 * Add one common property in all 
 * interfaces that describes the object.
 * This allows you to use the property
 * to determine what methods and props
 * can be called on the object
 */
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  // Example 1: Use Discriminating Union
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
}
// moveAnimal({type: 'bird', runningSpeed: 10});
moveAnimal({type: 'bird', flyingSpeed: 10});