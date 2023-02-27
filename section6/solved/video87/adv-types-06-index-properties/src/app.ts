/**
 * Example1: ErrorContainer contains one or more properties, 
 * where the name is a generic string and the value is also a string,
 */
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};