// Constructor is basically a function that turns to an object once you add the 'new' syntax and set it to the variable.
// Its parameters become the property of the object, using the 'this' notation.
// It calls the property of the variable you're referring to and by substituting the parameters that was received on the function that is now a constructor. EX: this.title = title

function book(title, director, publishYear) {
  this.title = title;
  this.director = director;
  this.publishYear = publishYear;
  this.getSummary = function getSummary() {
    return `${this.title}, is published on ${this.publishYear} directed by ${this.director}`;
  };
}

const book1 = new book("nanimo", "mamamo", 2020);
console.log(book1.getSummary());
