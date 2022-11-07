type Role = [number, string];
type Roles = Role[];

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string];
  roles: Roles;
};

const User1: Person ={
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  roles: [
    [1, 'user'],
    [2, 'author']
  ] 
};

const role: [number, string] = [3, 'admin' ]
User1.roles.push(role);
// User1.role[1] = 10;
// User1.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const role of User1.roles) {
  console.log("Role:", role);
}

// for (const hobby of User1.hobbies) {
//   console.log("Hobby:", hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! ERROR !!!
// }


