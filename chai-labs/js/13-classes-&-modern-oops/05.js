/**
 * Create class `Shape` with method `describe()` returning 'A shape'. Create class `Circle` extending Shape. Override describe() to return 'A circle shape'. Create a circle and log circle.describe().
 */

// solution

// Create Shape class
class Shape {
  describe() {
    return "A shape";
  }
}
// Create Circle class extending Shape
class Circle extends Shape {
  describe() {
    return "A circle shape";
  }
}
// Create circle and log describe()
const circle = new Circle();
console.log(circle.describe());
