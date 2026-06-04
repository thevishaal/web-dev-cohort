// forEach

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// ex
// console.log("Myforeach example");
// [2, 3, 4].myForEach((item) => {
//   if (item % 2 === 0) {
//     console.log(item);
//   }
// });

//map
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let callbackResult = callback(this[i], i, this);
    if (!callbackResult) continue;
    result.push(callbackResult);
  }
  return result;
};

//ex
// console.log("Mymap example");
// console.log([2, 3, 4].myMap((item) => item * 3));
// console.log([2, 3, 4].myMap((item) => item * 3 + 1));
// const arr = [
//   { name: "Vishal", money: 500 },
//   { name: "RajKumar", money: 1000 },
//   { name: "Jeete", money: 300 },
// ];
// console.log(
//   arr.myMap((obj) => {
//     if (obj.money < 500) {
//       return obj;
//     }
//   }),
// );

//Array ka har number doguna ho jayega
Array.prototype.mapTwo = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    let item = this[i];
    if (typeof this[i] !== "number")
      return `This method only allows for Array of numbers`;
    result.push(item * 2);
  }
  return result;
};

// console.log("mapTwo example");
// console.log([2, 3, 4].mapTwo());
// console.log([2, 3, 4, 3.2, "asdf"].mapTwo());

//reduce
Array.prototype.myReduce = function (callback, initialValue = undefined) {
  let acc = initialValue ?? this[0];

  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i);
  }
  return acc;
};

// console.log([1, 2, 3].myReduce((acc, item) => acc + item, 0));

// const arr = [
//   { name: "Vishal", money: 500 },
//   { name: "RajKumar", money: 1000 },
//   { name: "Jeete", money: 300 },
// ];
// console.log(
//   arr.myReduce((acc, item) => {
//     if (item.money < 500) {
//       acc[item.name] = item.money;
//     }
//     return acc;
//   }, {}),
// );
// console.log(
//   arr.myReduce((acc, item) => {
//     return acc + item.money;
//   }, 0),
// );

//starJoin
Array.prototype.starJoin = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    result += element;
    const nextElem = this[i + 1];
    if (!nextElem) {
      break;
    }
    result += "*";
  }
  return result;
};

// console.log([1, 2, 3].starJoin());
// console.log(["vishal", "rajkumar", "jeete"].starJoin());

//sort for numbers
Array.prototype.numberSort = function (order = "asc") {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (typeof element !== "number")
      return `This method works only Array of numbers`;

    let j = 0;
    while (j < result.length && result[j] < element) {
      j++;
    }
    result.splice(j, 0, element);
  }

  if (order === "desc") {
    const revResult = [];
    for (let e of result) {
      revResult.unshift(e);
    }
    return revResult;
  } else if (order === "asc") {
    return result;
  } else {
    return `Unknown parameter`;
  }
};

// console.log([10, 42, 52, 23, 6, 3].numberSort("desc"));

// flat
Array.prototype.myFlat = function (depth = 1) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (Array.isArray(element) && depth > 0) {
      const flatElement = element.myFlat(depth - 1);
      for (let j = 0; j < flatElement.length; j++) {
        result.push(flatElement[j]);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log([1, [2, 3], [4, [5, 6, [4, [5]]]]].myFlat(Infinity));
