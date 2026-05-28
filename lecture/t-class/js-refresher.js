"use strict";

// Topic: Hello World
// console.log("Hello World!");

// Topic: Code Structure
// kebab-case file names. Use Semicolon
// Comments
// Interns should not touch this logic. [single line]
/*
  Line one
  Line two
  Line three
  [Multiline]
*/

// Topic: Strict Mode
// 2009 ES5 added new feature which breaks few things.
// Too keep old systems running - new features are turned off by default.
// "use strict" --> always use at top
// "no use strict"
// JS --> Class, Modules

// Topic: Variables
// steps --> create, store, use, modify
let myFavLang; // myfavlang , my-fav-lang
myFavLang = "JavaScript";
// console.log(myFavLang);

myFavLang = "TypeScript";
// console.log("After learning TS my fav is: ", myFavLang);

// Good Practice
// Use camelCase for variable names
// Rule for Identifiers

const G = 9.841; // m/s^2

// g = 'o ji' --> this will not work
// console.log(g);

// UPPERCASE Constants
const VDAY = "14 Feb";

const days = "days from VDay";

// console.log(Math.PI);

// Topic: Data Types
//// Numbers - integer , float
let myNum = 45.65;
// INFINITY, -INFINITY and NaN (Not A Number)
// console.log(1 / 0);
// console.log(6 / "not a number")
// console.log(NaN + 1);
// console.log(NaN ** 0);

//// BigInt
//  2^53 - 1 = 9007199254740991
// - (2^53 - 1) = -9007199254740990

let bigBalance = 900719925474099984559584958n;

//// String
let single = "I am single 🥀";
let double = "I am double 😏";
let backtick = `string interpolation`;

let naam = "ak";
// console.log(`My name is ${naam}.`);
// console.log(`2 + 2 is ${2 + 2}.`);

/// Boolean (true , false)
let isPassed = true;
let piyushIsSingle = false; // Piyush Blogger

// Null (empty, unknown)
let partner = null;

// Undefined (value not assigned)
let bodyCount;

let x = 12;
x = null;
// console.log(x);

// Symbol
// To create unique identifiers for objects.

// Object
const person = {
  name: "ak",
  age: 25,
  mobile: 9898,
  isMarried: false,
};

// typeof X return type
// console.log(typeof 12.4556);
// console.log(typeof 1289434895458n);
// console.log(typeof "anirudha");
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof Symbol("id"));
// console.log(typeof Math);

// Quirky
// console.log("Type of null:", typeof null);
// console.log(typeof console.log)

// Topic: Type Conversion
/// String Conversion
let choice = false;
let strChoice = String(choice);

/// Number Conversion
let strInput = "25";
let age = Number(strInput);
// console.log(age);

let myAge = Number("Twenty Five");
// console.log(myAge);

// console.log(Number(partner));

/// Boolean Conversion
// console.log(Boolean(0));
// Truthy , Falsy

// Topic: Operators
/* Terms
    Operators [+, - , / ,*]
    Operand - on which we apply operators [for eg. in a+b, a and b are operands]
    Unary - An operator is unary if it has a single operand. (-number)
    Binary - double operand [a - b]
    Ternary - short hand if-else (?)
*/

/// Arithmetic [+,-,*,/,%,**]
// % gives remainder it's known as modular operator
// console.log(81 ** (1 / 2));  // a^b

/// String Concatination
// console.log("ak" + "cool");
/// rule - Note that if any of the operands is a string, then the other one is converted to a string too.
// console.log(3 + "5"); // 35
// console.log(3 + "5" + 3); // 353
// console.log(3 + 3 + "5"); // 65

// Other arithmetic operators work only with numbers and always convert their operands to numbers.
// console.log(6 - '2') // 4

// topic: Operators Precedence
/// Refer MDN Table

/// Assignment Operators
let myLife = "chill";

// Modify in Place
let aura = 0;
// console.log((aura += 10));
// aura = aura + 10

// console.log((aura *= 10));
// aura = aura * 10

// Increment and Decrement
let counter = 0;
counter++; // 1
// console.log(counter);

counter--; // 1-1 = 0
// console.log(counter);

//// There are two ways to write [prefix and postfix]
let newCounter = 10;
// console.log(++newCounter);

// ++, --, prefix , suffix
// console.log(newCounter - 1);

// Bitwise Operators
// Visit MDN if needed

/// Comparisons
/// >, < , >=, <=, !=, ==, ===, !== ==
///// Strict, Lose

console.log(2 == "2"); // it compair value
console.log(2 === "2"); // it compair value + type

//
// console.log(userRole === 'ADMIN');

let a = 19;
if (a > 18) {
  console.log("adult");
} else {
  console.log("chotti bacchi");
}

while (condition) {}

// for (begin: condition: step) {}

// Declaration
function sum(a, b) {
  return a + b;
}

// Expression
const add = function (a, b) {
  return a + b;
};

// Arrow
const addition = (a, b) => a + b;

let isAniSingle = true;

if (isAniSingle) {
  console.log("He is Happy");
} else {
  console.log("kya hi bolu ab");
}
