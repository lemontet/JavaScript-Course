
/* Loops!

Define:
1. The start
2. The step (aka. increment)
3. The end

We can stop a loop by including a BREAK command
*/

for(var i = 0; i < 5; i += 1){
  console.log(i);
}

/* Arrays
They are:
- Ordered
- Zero-based
- Accessed by index
*/

// A constructor is like this..
var constructorArray = new Array;

// Or an array literal...
var items = ['wallet', 'glass', 'jug'];
var firstItem = items[0];
console.log(firstItem);
var lastItem = items[items.length - 1];
console.log(lastItem);

/* Objects
Are:
- Unordered
- Key-value pairs
- Accessed with a key
*/

var explorer = {
  firstName: 'Jacques',
  lastName: 'Cousteau'
}

var firstName = explorer.firstName;
console.log(firstName);

/* They are way more common when you're dealing with APIs
A relational database is kinda like an object.. so it can return stuff in */

var marxBrothers = [
  { email: 'groucho@ga.co' },
  { email: 'harpo@ga.co' },
  { email: 'chico@ga.co' }
];

for (var i = 0; i < marxBrothers.length; i+= 1){
  var currentBrother = marxBrothers[i];
  console.log(currentBrother.email);
}

