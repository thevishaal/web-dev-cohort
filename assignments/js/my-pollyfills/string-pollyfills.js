//TitleCase

String.prototype.toTitleCase = function () {
  const arrOfString = this.split(" ");
  const result = [];
  for (let i = 0; i < arrOfString.length; i++) {
    const element = arrOfString[i].trim();
    const titleCaseString = element.charAt(0).toUpperCase() + element.slice(1);
    result.push(titleCaseString);
  }
  return result.join(" ");
};

console.log("vishal baghel".toTitleCase());

console.log("vishal".includes("alt"));

// dashCase

String.prototype.toDashCase = function () {
  const arrOfString = this.split(" ");
  const result = [];
  for (let i = 0; i < arrOfString.length; i++) {
    const element = arrOfString[i].trim();
    const dashCaseString = element.toLowerCase();
    result.push(dashCaseString);
  }
  return result.join("-");
};

console.log("Vishal Baghel".toDashCase());

// snakeCase
String.prototype.toSnakeCase = function () {
  const arrOfString = this.split(/\s+/);
  const result = [];
  for (const elem of arrOfString) {
    result.push(elem.toLowerCase());
  }
  return result.join("_");
};

console.log("my    Variable name".toSnakeCase());

// camelCase
String.prototype.toCamelCase = function () {
  const arrOfString = this.split(/\s+/);
  const result = [];
  result.push(arrOfString[0].toLowerCase());
  for (let i = 1; i < arrOfString.length; i++) {
    elem = arrOfString[i].toTitleCase();
    result.push(elem);
  }
  return result.join("");
};

console.log("Vishal baghel shakrauli".toCamelCase());

// hide String
String.prototype.hideStringFromStart = function (char, number, pattern) {
  const str = this;
  const arrOfString = [];
  if (Number.isNaN(number) || !Number.isInteger(number) || number <= 0) {
    return `Number shouldbe positive integer`;
  }
  const multiple = str.length / number;
  if (!Number.isInteger(multiple)) {
    return `Number should be factor of length of string.`;
  }
  let firstIndex = 0;
  let lastIndex = firstIndex + number;
  for (let i = 0; i < multiple; i++) {
    const subString = str.slice(firstIndex, lastIndex);
    arrOfString.push(subString);
    firstIndex + number;
  }
  const hiddenString = char.repeat(number);
  const lastElem = arrOfString.pop();
  const result = [];
  for (let k = 0; k < arrOfString.length; k++) {
    result.push(hiddenString);
  }
  result.push(lastElem);
  return result.join(pattern);
};

console.log("123456781234".hideStringFromStart("X", 4, "-"));
console.log("123456781234".hideStringFromStart("+", 3, "/"));
