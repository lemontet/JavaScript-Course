// Arrays
// - Ordered
// - Access data with an index (a number)
// - The index is zero-based

// Creating Arrays using an array literal

var emptyArr = [];
var randomNumbers = [12, 53, 54, 33, 4];

// Using an array constructor
// Note that browsers deal with this differently

var bigGuy = new Array(100);

var weirdInstruments = [
  "Badgermin", // index 0
  "The Great Stalacpipe Organ", // index 1
  "Stylophone", // index 2
  "Ondes Martenot", // index 3
  "Sharpischord", // index 4
  "Hydraulophone", // index 5
  "Pyrophone" // index 6
];

var weirdArray = [null, undefined, true, "", 10, [], {}];

// Accessing elements
// - Always use an index that starts at 0
// - Must be -1 length
// Some languages do negative indices, but JS doesn't (yet!)

weirdInstruments[0];

// Reassigning elements

weirdInstruments[0] = "Roli Seaboard";
console.log(weirdInstruments[0]);
// You can technically assign values 'out of bounds'
weirdInstruments[17] = "out of bounds!"
console.log(weirdInstruments.length);

weirdInstruments[3] = "Makey Makey Banana Piano";
console.log(weirdInstruments[3]);

// Properties and methods

    // Changing elements within the array

var myArray = ["a", "b", "c"];
// PUSH adds a value to the end of the array and returns the array length
console.log(myArray.push("d"));
// POP removes the last item in the array and return that value
console.log(myArray.pop());
// SHIFT removes the first item
console.log(myArray.shift("a"));
// UNSHIFT adds an item to the start
console.log(myArray.unshift("A!"));

// Finding elements

var emails = [
  'groucho',
  'harpo',
  'gummo',
  'zeppo'
];

// If the value exists, it will return a boolean
// This means includes is a PREDICATE METHOD ;)
console.log(emails.includes('harpo'));
// indexOf will get you the index number of a value
// If the value does not exist, it will return -1
console.log(emails.indexOf('chico')); // => 1

// => this is a hashrocket. It just means the return value of something should be whatever comes after it

