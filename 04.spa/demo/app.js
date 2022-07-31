import { sum, product } from './module.js';
import { sum as secondSum } from './second.js';
import Person, { sayHello } from './Person.js';

console.log(sum(3, 5));
console.log(product(4, 2));
console.log(secondSum(2, 2, 3));

export { data as transferedData } from './module.js';

const myPerson = new Person('peter', 28);
console.log(myPerson);
sayHello(myPerson);