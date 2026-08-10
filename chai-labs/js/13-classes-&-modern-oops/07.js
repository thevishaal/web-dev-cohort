/**
 * Create a class `Rectangle` with constructor taking `width` and `height`. Add a getter `area` that returns width * height. Create a rectangle with width 5 and height 10. Log rectangle.area (accessed as property, not method).
 */

// solution

// Create Rectangle class with getter
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}
// Create rectangle and log area
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area);
