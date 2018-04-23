// https://gist.github.com/ga-wolf/10181616b156eee0ea2303ba08e3f075

/*
The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

*/

console.clear()

var booksToRead = [
  {
    title: 'Dreams from the Witches House',
    author: 'H.P. Lovecraft',
    read: false
  },
  {
    title: 'The Aleph and Other Stories',
    author: 'Jorge Luis Borges',
    read: false
  },
];

function read (book) {
  if(book === true){
    return 'Yep';
  } else {
    return 'Not yet'}
}

for (var i = 0; i < booksToRead.length; i+= 1) {


  console.log(`
    Title: ${booksToRead[i].title}
    Author: ${booksToRead[i].author}
    Read: ${read(booksToRead[i].read)}
  `);
}

/*
The Recipe Card

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
*/

var cheesecake = {
  title: 'Cheesecake',
  serves: 8,
  ingredients: [
    {
      quantity: 500,
      scale: 'grams',
      ingredient: 'cream cheese'
    },
    {
      quantity: 100,
      scale: 'millilitres',
      ingredient: 'maple syrup'
    },
    {
      quantity: 250,
      scale: 'millilitres',
      ingredient: 'thickened cream'
    },
    {
      quantity: 200,
      scale: 'grams',
      ingredient: 'packet biscuits'
    },
    {
      quantity: 200,
      scale: 'grams',
      ingredient: 'butter'
    }
  ],
  method: [
    'Prepare a tin to pour the biscuit base and cake batter into.',
    'Pulse butter and biscuits in a food processor. Pour into the cake tin and pat down till firm. Place in fridge',
    'Beat cream cheese, sugar and thickened cream together. Pour this over chilled biscuit base and put in fridge until set.'
  ]
}

var printIngredients = '';
var printMethod = '';
for (var i = 0; i < cheesecake.ingredients.length; i+= 1) {
  var thisIngredient = '\n' + ' ' + (cheesecake.ingredients[i].quantity  + ' ' + cheesecake.ingredients[i].scale + ' ' + cheesecake.ingredients[i].ingredient);
  printIngredients += thisIngredient
}

for (var i = 0; i < cheesecake.method.length; i++) {
  printMethod += cheesecake.method[i] + '\n' + '\n';

}

console.log(
  `${cheesecake.title}
  Serves: ${cheesecake.serves}
  Ingredients:
  ${printIngredients}
  Method:

  ${printMethod}
  `
);


/*

The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
Maybe the join method will be helpful here

*/

var favouriteMovie = {
  title: 'Spacejam',
  duration: 120,
  stars: ['Michael Jordan', 'Buggs Bunny'],
}

console.log(`
  ${favouriteMovie.title} goes for ${favouriteMovie.duration} minutes. Stars: ${favouriteMovie.stars.join(', ')}
`);

