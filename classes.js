// This one is a weenybit easy since I've already been familiar about this for like a whole damn year ago.
// We just applied everything but inside a class syntax guess this is to be more synchronized and uhm to create a structure or whatsoever just look at my codeeee
// Btw the static syntax that acts like a function means you cannot change it but you can call it using only the name of the class which the "Movie" in this code

class Movie {
  constructor(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
  }
  //Yepp I'm aware that these are bullshit prototype
  getTitle() {
    return this.title;
  }
  getYearPublished() {
    return this.year;
  }
  getGenre() {
    return this.genre;
  }
  updateTitle(title) {
    this.title = title;
  }
  updateYearPublished(year) {
    this.year = year;
  }
  updateGenre(genre) {
    this.genre = genre;
  }
  static reviewCompany() {
    return "Brought to you by Review Reads";
  }
}

//Instantiating Class

const movie1 = new Movie("Ang Buhay Mo", 2020, "Comedy");
console.log(
  `${movie1.getTitle()}, ${movie1.getYearPublished()} - ${movie1.getGenre()}.
  ${Movie.reviewCompany()}
`
);
