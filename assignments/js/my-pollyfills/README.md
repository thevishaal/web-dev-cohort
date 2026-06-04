# Polyfills ✨

## Introduction

This is a collection of my custom polyfills. I have manually implemented JavaScript's built-in array and string methods to understand how these methods work internally.

---

## Array Methods

### 1. **myForEach()**

```javascript
Array.prototype.myForEach = function (callback) { ... }
```

**Description:** This method executes the provided callback function once for each element in the array. It is a complete polyfill of forEach. The callback receives three parameters: current element, index, and the entire array.

**Usage:**

```javascript
[2, 3, 4].myForEach((item) => console.log(item));
```

---

### 2. **myMap()**

```javascript
Array.prototype.myMap = function (callback) { ... }
```

**Description:** This method applies a callback function to every element in the array and returns a new array. It works just like the Map method.

**Usage:**

```javascript
[2, 3, 4].myMap((item) => item * 3); // [6, 9, 12]
```

---

### 3. **mapTwo()**

```javascript
Array.prototype.mapTwo = function () { ... }
```

**Description:** This is a specialized method that doubles all numbers in an array (multiplies by 2). It only works with number arrays. If the array contains any non-number values, it returns an error message.

**Usage:**

```javascript
[2, 3, 4].mapTwo(); // [4, 6, 8]
[2, 3, 4, "text"].mapTwo(); // "This method only allows for Array of numbers"
```

---

### 4. **myReduce()**

```javascript
Array.prototype.myReduce = function (callback, initialValue = undefined) { ... }
```

**Description:** This method reduces an array to a single value. It uses an accumulator pattern. The callback function receives 3 parameters: accumulator, current element, and index. You can provide an optional initialValue.

**Usage:**

```javascript
[1, 2, 3].myReduce((acc, item) => acc + item, 0); // 6
```

---

### 5. **starJoin()**

```javascript
Array.prototype.starJoin = function () { ... }
```

**Description:** This method joins all elements of an array into a string with a star (`*`) symbol between them. It's a variation of the join method.

**Usage:**

```javascript
[1, 2, 3].starJoin(); // "1*2*3"
["vishal", "rajkumar", "jeete"].starJoin(); // "vishal*rajkumar*jeete"
```

---

### 6. **numberSort()**

```javascript
Array.prototype.numberSort = function (order = "asc") { ... }
```

**Description:** This method sorts only number arrays. It uses the insertion sort algorithm and sorts in ascending or descending order. The default order is "asc" (ascending). Pass "desc" in the order parameter to get descending order.

**Usage:**

```javascript
[10, 42, 52, 23, 6, 3].numberSort("asc"); // [3, 6, 10, 23, 42, 52]
[10, 42, 52, 23, 6, 3].numberSort("desc"); // [52, 42, 23, 10, 6, 3]
```

---

## String Methods

### 1. **toTitleCase()**

```javascript
String.prototype.toTitleCase = function () { ... }
```

**Description:** Converts a string to title case where the first letter of each word is capitalized.

**Usage:**

```javascript
"vishal baghel".toTitleCase(); // "Vishal Baghel"
"hello world".toTitleCase(); // "Hello World"
```

---

### 2. **toDashCase()**

```javascript
String.prototype.toDashCase = function () { ... }
```

**Description:** Converts a string to dash-case (kebab-case) by converting to lowercase and joining words with hyphens.

**Usage:**

```javascript
"Vishal Baghel".toDashCase(); // "vishal-baghel"
"hello world test".toDashCase(); // "hello-world-test"
```

---

### 3. **toSnakeCase()**

```javascript
String.prototype.toSnakeCase = function () { ... }
```

**Description:** Converts a string to snake_case by converting to lowercase and joining words with underscores. Handles multiple spaces.

**Usage:**

```javascript
"my    Variable name".toSnakeCase(); // "my_variable_name"
"Hello World Test".toSnakeCase(); // "hello_world_test"
```

---

### 4. **toCamelCase()**

```javascript
String.prototype.toCamelCase = function () { ... }
```

**Description:** Converts a string to camelCase where the first word is lowercase and subsequent words start with a capital letter.

**Usage:**

```javascript
"Vishal baghel shakrauli".toCamelCase(); // "vishalBaghelShakrauli"
"hello world test".toCamelCase(); // "helloWorldTest"
```

---

### 5. **hideStringFromStart()**

```javascript
String.prototype.hideStringFromStart = function (char, number, pattern) { ... }
```

**Description:** Hides parts of a string by replacing them with a specified character, maintaining the last segment visible. Requires the number parameter to be a positive integer that is a factor of the string length.

**Parameters:**

- `char`: Character to use for hiding (e.g., "X", "+")
- `number`: Number of characters per segment (must be a factor of string length)
- `pattern`: Pattern to join the segments (e.g., "-", "/")

**Usage:**

```javascript
"123456781234".hideStringFromStart("X", 4, "-"); // "XXXX-XXXX-1234"
"123456781234".hideStringFromStart("+", 3, "/"); // "+++/+++/+++/+++/1234"
```

---

## 🌟 If You Like It!

If you liked this repository, please give it a **Star** ⭐. Your support motivates me to write better code!

---

**Happy Coding!** 💻
