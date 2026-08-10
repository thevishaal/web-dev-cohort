/**
 * Create class `Vehicle` with constructor taking `brand`. Create class `Car` extending Vehicle with constructor taking `brand` and `model`. Call super(brand) in Car constructor, then set this.model. Create a car with brand 'Toyota' and model 'Camry'. Log car.brand and car.model on separate lines.
 */

// solution

// Create Vehicle class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}
// Create Car class extending Vehicle
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}
// Create car and log properties
const car = new Car("Toyota", "Camry");
console.log(car.brand);
console.log(car.model);
