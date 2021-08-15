//Inheritance makes you inherit or share with the properties the other object has. Ut is useful when you want to create another object that has the same property on the other object
// Here it the code we used the "call" and the "object create". Well I'm still not sure about them but as it works, I think the "call" refers to a function that uses the existing constructor and the "object create" is about creating new object that copies the parameter you substituted. 
// You might ask why set the bookversion as the constructor in the last comment below. Well I have no reason why but if you venture the object variable you'll see the the constructor under the prototype uses the inherited object. Guess I have to get back here and clear this shit later

function movie(title, director, publishYear) {
  this.title = title;
  this.director = director;
  this.publishYear = publishYear;
}
movie.prototype.getSummary = function () {
  return `${this.title}, is published on ${this.publishYear} directed by ${this.director}`;
};

//Constructor bookVersion
function bookVersion(title, director, publishYear, author) {
  movie.call(this, title, director, publishYear);
  this.author = author;
}

//Inherit Movie Prototypes
bookVersion.prototype = Object.create(movie.prototype);

//Instantiate bookVersion
const book1 = new bookVersion("nanimo", "mamamo", 2020, 'papamo');

// Use bookVersion as the constructor
bookVersion.prototype.constructor = bookVersion;
console.log(book1);


