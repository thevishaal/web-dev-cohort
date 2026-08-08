/**
 * Create an object `grandparent` with property `surname: 'Smith'`. Create an object `parent` with Object.create(grandparent) and add property `job: 'Engineer'`. Create an object `child` with Object.create(parent) and add property `age: 10`. Log child.surname, child.job, and child.age on separate lines.
 */

// solution

// Create grandparent
const grandparent = {
  surname: "Smith",
};
// Create parent
const parent = Object.create(grandparent);
parent.job = "Engineer";
// Create child
const child = Object.create(parent);
child.age = 10;
// Log properties
console.log(child.surname);
console.log(child.job);
console.log(child.age);
