type Person = {
  name: string;
  age: number;
  hobbies: string[];
};

const User1: Person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(User1.name);

for (const hobby of User1.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
