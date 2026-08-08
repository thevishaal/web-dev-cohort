/**
 * Create an object `vehicle` with method `drive()` that returns 'Driving'. Use Object.create(vehicle) to create a `car` object. Add a property `wheels: 4` to car. Log car.wheels and car.drive() on separate lines.
 */

// solution
// Create vehicle object
const vehicle = {
  drive() {
    return "Driving";
  },
};
// Create car with vehicle as prototype
const car = Object.create(vehicle);
// Add wheels property
car.wheels = 4;
// Log properties
console.log(car.wheels);
console.log(car.drive());
