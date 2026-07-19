/**
 * Create an array named `users` with objects: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]. Use find() to get the user with id 2 and store it in `foundUser`. Log the foundUser.
 */

// solution

// Create your users array
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
// Use find to get user with id 2
const foundUser = users.find((user) => user.id === 2);
// Log the found user
console.log(foundUser);
