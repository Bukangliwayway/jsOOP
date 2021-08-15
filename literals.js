// Literals is just an introduction of object for OOP class. I think this is similar to struct that we use on C programming language. 
// As you ccan see from the code we just have a declared constant 'movie' that has 3 properties: title, publishyear, director, and a method (a function inside a struct or object) summary
// I use a backtick and ${} (or Jquery function) chuchu as return statement from the function 'Summary'.
// Backtick or (``) is useful in jquery. This recognizes and treats every element inside of it as either string or numbers 
// that ${} is basically a Jquery Function, uhm well it's outdated already but we still use it here. Dunno if there's another way of doing this

const movie = {
    title: 'nanimo',
    publishYear: 2020,
    director: 'mamamo',
    //Can't use arrow function here
    summary: function() {
        return `${this.title}, published on ${this.publishYear} directed by ${this.director}`
    }
}
console.log(movie.summary());