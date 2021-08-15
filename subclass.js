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
  static reviewCompany() {
    return "Brought to you by Review Reads";
  }
  summary() {
  return `${this.getTitle()}, ${this.getYearPublished()} - ${this.getGenre()}.
  ${Movie.reviewCompany()}`;
    }
}

//The Subclass
class reviewSection extends Movie {
    constructor(title, year, genre, ratings){
        super(title, year, genre);
        this.ratings = ratings;
    }
}

//Instantiating Class
const review1 = new reviewSection("Buhay Mo", 2021, "Comedy", 6.9);
console.log(review1.summary());
