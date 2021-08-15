//Prototype is just declaring another property outside the constructor or the object itself. That's it. 
// As you can see we have declared at line 23 the movie.prototype.getSummary or the name of the constructor plus the syntax prototype and the name of the method or the property you want to add.
// Prototype properties are not saved in the object itseld but rather in the proto section of the construction.
//Prototyping is useful when you want to add a property on a specific object but not to every objects.
//Also it is useful when you want to revise the property from a made object
// EX: In this code we just want to movie1 to have the summary and not the other movies so we can use the prototype of it and declare inside of it the element you want to add inside to prototpye  

//Movie Constructor
function movie(title, director, publishYear) {
  this.title = title;
  this.director = director;
  this.publishYear = publishYear;
}

//Prototypes

movie.prototype.getAge = function(){
    // const years = new Date().getFullYear() - this.publishYear;
    // return `This is ${years} old`;
    return `This is ${new Date().getFullYear() - this.publishYear} years old`;
};

movie.prototype.getSummary = function() {
  return `${this.title}, is published on ${this.publishYear} directed by ${this.director}`;
};

movie.prototype.reviseYear = function(revise){
    this.publishYear = revise;
}

//Instantiate Movie
const movie1 = new movie("nanimo", "mamamo", 2020);
console.log(movie1.getAge());
