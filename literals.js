const movie = {
    title: 'nanimo',
    publishYear: 2020,
    director: 'mamamo',
    //Can't use arrow function here
    shortInfo: function() {
        return `${this.title}, published on ${this.publishYear} directed by ${this.director}`
    }
}
console.log(movie.shortInfo());