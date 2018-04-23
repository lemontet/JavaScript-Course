
// OBJECTS
// Arrays are index-based. Objects are key-based!
// In objects we create key-value pairs

var person = { name: 'Bill' };
person.name;

var user = {
  firstName: 'Bill',
  lastName: 'Murray',
  email: 'bill@ga.co',
  blogPosts: [],
};

// Objects can have as many pieces of data as you want

console.log(user);

var movie = {
  title: 'Satantango',
  director: 'Bela Tarr',
  duration: 432,
};

// We can access a key's value by using dot notation
// OR square brackets with quotes
console.log(movie.title, movie["title"]);

// Reassigning object values
// 'go into the movie object
// find the 'duration' key
// reassign its value to 534'

movie.duration = 534;

// Adding keys and values
// If the key doesn't exist, you can create it

movie.language = 'Hungarian';

console.log(movie);

// object.hasOwnProperty("<keyname>")