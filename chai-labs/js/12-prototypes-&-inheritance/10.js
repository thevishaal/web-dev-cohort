/**
 * Create constructor `Shape` with method `describe()` in its prototype that returns 'A shape'. Create constructor `Circle` that inherits from Shape. Override `describe()` in Circle.prototype to return 'A circle'. Create a circle and log circle.describe().
 */

// solution

// Create Shape constructor
function Shape() {}
// Add describe to Shape.prototype
Shape.prototype.describe = function () {
  return "A shape";
};
// Create Circle constructor
function Circle() {
  Shape.call(this);
}
// Set up inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// Override describe in Circle.prototype
Circle.prototype.describe = function () {
  return "A circle";
};
// Create circle and log describe()
const circle = new Circle();

console.log(circle.describe());
