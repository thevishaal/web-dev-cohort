/**
 * Create a constructor `Book` that sets `this.title = 'Novel'`. Add `pages: 200` to Book.prototype. Create a book instance. Use hasOwnProperty to check if book has own property 'title'. Store result in `hasTitleOwn` and log it.
 */

// solution

// Create Book constructor
function Book() {
  this.title = "Novel";
}
// Add pages to prototype
Book.prototype.pages = 200;
// Create book instance
const book = new Book();
// Check own property
const hasTitleOwn = book.hasOwnProperty("title");
// Log result
console.log(hasTitleOwn);
