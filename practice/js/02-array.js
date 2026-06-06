// console.log(0.1 + 0.2 === 3);
// console.log(0.1 + 0.2); //0.30000000000000004

function numberAreEqual(num1, num2) {
  return Math.abs(num1 - num2) < Number.EPSILON;
}

// console.log(numberAreEqual(0.1 + 0.2, 0.3));

const oldWay = Array(5);
// console.log(oldWay); //[ <5 empty items> ]

const newWay = Array.of(5);
// console.log(newWay); //[ 5 ]

// const oldWay2 = Array(1, 2, 3);
// console.log(oldWay2); //[ 1, 2, 3 ]
// const newWay2 = Array.of(1, 2, 3);
// console.log(newWay2); //[ 1, 2, 3 ]

// console.log(Array.from("Hello")); //[ 'H', 'e', 'l', 'l', 'o' ]

// console.log(Array.from([1, 2, 3], (x) => x * 2)); //[ 2, 4, 6 ]

// no duplicate values in a Set
const mySet = new Set([1, 2, 3, 3, 4]); // Set(4) { 1, 2, 3, 4 }
// console.log(Array.from(mySet));

const myMap = new Map([
  ["a", 1],
  ["b", 2],
]);
// console.log(Array.from(myMap)); // [ [ 'a', 1 ], [ 'b', 2 ] ]

// console.log(Array.from({ length: 5 }, (_, i) => i)); // [ 0, 1, 2, 3, 4 ]

// console.log(new Array(5).fill(0));
// console.log(Array.from({ length: 5 }).fill(false));

const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.at(-1)); // it allows you to give a negative index to access elements from the end of the array.

// 1. Concat :- It is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
// console.log(mergedArray); // [ 1, 2, 3, 4, 5, 6 ]

// 2. entries :- It returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array3 = ["a", "b", "c"];
const iterator = array3.entries();
// console.log(iterator.next().value); // [ 0, 'a' ]
// console.log(iterator.next().value); // [ 1, 'b' ]
// console.log(iterator.next().value); // [ 2, 'c' ]

// 3. every :- It tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const array4 = [1, 2, 3, 4];
const allEven = array4.every((num) => num % 2 === 0);
// console.log(allEven); // false

// 4. fill :- It fills all the elements of an array from a start index to an end index with a static value. It returns the modified array.
const array5 = [1, 2, 3, 4];
array5.fill(0, 1, 3);
// console.log(array5); // [ 1, 0, 0, 4 ]

// 5. filter :- It creates a new array with all elements that pass the test implemented by the provided function.
const array6 = [1, 2, 3, 4];
const evenNumbers = array6.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // [ 2, 4 ]

// 6. find :- It returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array7 = [1, 2, 3, 4];
const found = array7.find((num) => num > 2);
// console.log(found); // 3

// 7. findIndex :- It returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const array8 = [1, 2, 3, 4];
const foundIndex = array8.findIndex((num) => num > 2);
// console.log(foundIndex); // 2

// 8. flat :- It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const array9 = [1, [2, [3, 4]], 5];
const flattened = array9.flat(2);
// console.log(flattened); // [ 1, 2, 3, 4, 5 ]

// 9. flatMap :- It first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
const array10 = [1, 2, 3];
const flatMapped = array10.flatMap((num) => [num, num * 2]);
// console.log(flatMapped); // [ 1, 2, 2, 4, 3, 6 ]

// 10. forEach :- It executes a provided function once for each array element.
const array11 = [1, 2, 3];
array11.forEach((num) => console.log(num * 2)); // 2 4 6

// 11. from :- It creates a new, shallow-copied Array instance from an array-like or iterable object.
const array12 = Array.from("Hello");
// console.log(array12); // [ 'H', 'e', 'l', 'l', 'o' ]

// 12. includes :- It determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array13 = [1, 2, 3];
const includesTwo = array13.includes(2);
// console.log(includesTwo); // true

// 13. indexOf :- It returns the first index at which a given element can be found in the array, or -1 if it is not present.
const array14 = [1, 2, 3];
const indexOfTwo = array14.indexOf(2);
// console.log(indexOfTwo); // 1

// 14. join :- It creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
const array15 = ["Hello", "World"];
const joined = array15.join(" ");
// console.log(joined); // Hello World

// 15. keys :- It returns a new Array Iterator object that contains the keys for each index in the array.
const array16 = ["a", "b", "c"];
const keysIterator = array16.keys();
// console.log(keysIterator.next().value); // 0
// console.log(keysIterator.next().value); // 1
// console.log(keysIterator.next().value); // 2

// 16. lastIndexOf :- It returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const array17 = [1, 2, 3, 2];
const lastIndexOfTwo = array17.lastIndexOf(2);
// console.log(lastIndexOfTwo); // 3

// 17. map :- It creates a new array populated with the results of calling a provided function on every element in the calling array.
const array18 = [1, 2, 3];
const mapped = array18.map((num) => num * 2);
// console.log(mapped); // [ 2, 4, 6 ]

// 18. pop :- It removes the last element from an array and returns that element. This method changes the length of the array.
const array19 = [1, 2, 3];
const popped = array19.pop();
// console.log(popped); // 3
// console.log(array19); // [ 1, 2 ]

// 19. push :- It adds one or more elements to the end of an array and returns the new length of the array.
const array20 = [1, 2, 3];
const newLength = array20.push(4);
// console.log(newLength); // 4
// console.log(array20); // [ 1, 2, 3, 4 ]

// 20. reduce :- It executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array21 = [1, 2, 3, 4];
const sum = array21.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
// console.log(sum); // 10
