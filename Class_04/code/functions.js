
// Function declaration
function doSomething (){
  console.log("This function was called");
}

// Function call (use the function identifier's name, then the parameters)
doSomething();

// Function Expression
var logSomething = function () {
    console.log("The logSomething function was called");
}
logSomething();

/* The main difference between a function declaration and a function
expression is HOISTING. You can call a function declaration before it was
defined. JS will drag your vars to the top of the scope and leave them
undefined. So, if you called it straight after, it will know it exists,
but it will say it's undefined. , AND it will drag your function declarations
to the top of the scope before it does anything else.

We will use function declarations, but function expressions are generally
used more often, though people are moving back toward function decalarations.
Remember: function declarations are HOISTED.
*/

// Square the number 5

function squareNumber () {
  console.log(Math.pow(5, 2));
}
squareNumber();

/* Create a Roll Virtual Dice Function
Optional: Receive a parameter to decide how many
sides the Dice actually has (e.g. a 12-side dice)
Math.floor will round down
Math.round will round up or down, whichever is closer
Math.ceil will round up
*/

function rollDice (sides) {
  var roll = Math.ceil(Math.random() * sides);
  console.log('You rolled ' + roll);
}
rollDice(6);
// To duplicate a line, CMD + SHIFT + D

function seeArguments (number, otherNumber) {
  console.log(arguments);
}
seeArguments(10, 4);

function greetPerson (name) {
  var message = 'Hello ' + name;
  console.log(message);
};
greetPerson('Penelope');

function addTogether (x, y) {
  var sum = x + y;
  console.log(sum);
}
addTogether(4, 6);

// Create a squareNumber Function
// Receive a piece of data to square
// Create your own math.pow Function

function squareTheNumber (base, exponent){
  var formula = 1;
  for(var i = 1; i <= exponent; i += 1){
    formula *= base;
  }
  console.log(formula);
};
squareTheNumber(2, 3);

function multiplyTogether (firstNum, secondNum) {
  console.log(firstNum * secondNum);
}
multiplyTogether(4, 5);

var firstNum = 10;
multiplyTogether(firstNum, 6);

// Create a greet greet person
// Receive a starting message (e.g. Hello)
// Receive a name
// Log out those two things combined

function greetOBot (greeting, name) {
  console.log(greeting, name);
}
greetOBot('Howdy', 'Kermit');

function changeTheme (themeChoice) {
  if (themeChoice === 'light'){
    console.log('Background white, text black');
  } else {
    console.log('Background black, text white');
  }
}
changeTheme('light');

// Show or hide menu
// Receive a boolean called isOpen
// if the  menu is open, log 'close menu'
// Otherwise, 'show menu'

function menuDisplayState (userOption) {
  if(userOption){
    console.log('Hide menu');
  } else {
    console.log('Show menu');
  }
}
menuDisplayState(true);