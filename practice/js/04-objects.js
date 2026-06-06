const obj = {
  name: "Jeete",
  age: 22,
  hobbies: ["coding", "gaming", "travelling"],
  address: {
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
  },
  greet: function () {
    console.log(`Hello, my name is ${obj.name} and I am ${obj.age} years old.`);
  },
};

// console.log(obj.name); // Accessing property using dot notation
// console.log(obj["age"]); // Accessing property using bracket notation
// obj.greet(); // Calling the method of the object

// 1. Object.keys() :- It returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const keys = Object.keys(obj);
// console.log(keys); // [ 'name', 'age', 'hobbies', 'address', 'greet' ]

// 2. Object.values() :- It returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
const values = Object.values(obj);
// console.log(values); // [ 'Jeete', 22, [ 'coding', 'gaming', 'travelling' ], { city: 'Agra', state: 'Uttar Pradesh', country: 'India' }, [Function: greet] ]

// 3. Object.entries() :- It returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
const entries = Object.entries(obj);

// console.log(entries); // [ [ 'name', 'Jeete' ], [ 'age', 22 ], [ 'hobbies', [ 'coding', 'gaming', 'travelling' ] ], [ 'address', { city: 'Agra', state: 'Uttar Pradesh', country: 'India' } ], [ 'greet', [Function: greet] ] ]

// 4. Object.assign() :- It is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const returnedTarget = Object.assign(target, source);
// console.log(target); // { a: 1, b: 3, c: 4 }
// console.log(returnedTarget); // { a: 1, b: 3, c: 4 }

// 5. Object.freeze() :- It freezes an object. A frozen object can no longer be modified: new properties cannot be added, existing properties cannot be removed or changed. It returns the frozen object.

const frozenObj = Object.freeze({ name: "Jeete", age: 22 });
// frozenObj.name = "John"; // This will not change the name property
// console.log(frozenObj); // { name: 'Jeete', age: 22 }

// 6. Object.seal() :- It seals an object. A sealed object can no longer be changed: new properties cannot be added, existing properties cannot be removed, but existing properties can still be modified. It returns the sealed object.

const sealedObj = Object.seal({ name: "Jeete", age: 22 });
// sealedObj.name = "John"; // This will change the name property
//
// console.log(sealedObj); // { name: 'John', age: 22 }

//  7. Object.hasOwnProperty() :- It returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const hasName = obj.hasOwnProperty("name");

// console.log(hasName); // true

// this keyword in objects :- The 'this' keyword refers to the current object that the code is being executed in. In the context of an object method, 'this' refers to the object itself.

const person = {
  name: "Jeete",
  age: 22,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

// person.greet(); // Output: Hello, my name is Jeete and I am 22 years old.

// new keyword in objects :- The 'new' keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function. It creates a new object, sets the 'this' keyword to point to that object, and executes the constructor function.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  };
}

const person1 = new Person("Raj", 23);
const person2 = new Person("John", 30);

// new keyword 4 thing karta hai :-
// 1. creates a new empty object
// 2. sets the 'this' keyword to point to that object
// 3. executes the constructor function
// 4. returns the newly created object

// person1.greet(); // Output: Hello, my name is Raj and I am 23 years old.
// person2.greet(); // Output: Hello, my name is John and I am 30 years old.

// bind() method in objects :- The 'bind()' method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const person3 = {
  name: "Abhi",
  age: 25,
};

function greet() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const boundGreet = greet.bind(person3);
// boundGreet(); // Output: Hello, my name is Abhi and I am 25 years old.

// call() method in objects :- The 'call()' method calls a function with a given 'this' value and arguments provided individually.

const person4 = {
  name: "Simran",
  age: 28,
};

greet.call(person4); // Output: Hello, my name is Simran and I am 28 years old.

// apply() method in objects :- The 'apply()' method calls a function with a given 'this' value, and arguments provided as an array (or an array-like object).

const person5 = {
  name: "Amit",
  age: 27,
};

greet.apply(person5); // Output: Hello, my name is Amit and I am 27 years old.

// call, apply, bind => function borrowing
