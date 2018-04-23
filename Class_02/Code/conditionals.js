// if (CONDITION){
//   CODE TO EXECUTE
// };

if (3 === 3){
  console.log("Maths makes sense");
}

var favMovie = "Mr Creepy Hands";

if (favMovie == "Satantango"){
  console.log("I think that is a good choice");
} else {
  console.log("Maybe pick something else");
}

var playerOneMove = "Scissors";

// If playerOneMove is Scissors
// Print out "Player one played Scissors"

if (playerOneMove === "Scissors"){
  console.log("Player one played scissors");
}

// Store a computerNumber
// Store a userGuess
// IF computerNumber < userGuess
// Print out "The number is lower"

var computerNumber = 10;
var userGuess = 15;

if (computerNumber < userGuess){
  console.log("The number is lower");
}

// if( CONDITION ){
//   CODE TO EXECUTE IF TRUE;
// } else {
//   CODE TO EXECUTE IF FALSE;
// }

// Store a user number
// If the user number is greater than 0
// Print out "It's a positive number
// Otherwise
// Print out "It's a negative number"

var userNumber = 7;

if (userNumber > 0){
  console.log("It's a positive number!");
} else {
  console.log("It's a negative number");
}

// Store the userCourse
// If the userCourse is JSD
// Print "You're learning JavaScript"
// Else,
// Print "We don't know what you're learning"

var userCourse = "Tree Trimming";

if(userCourse == "JSD"){
  console.log("You're learning JavaScript");
} else {
  console.log("We don't know what you're learning :(");
}

var vehicle = "Car"

if (vehicle == "Car"){
  console.log("You are in a car");
} else if (vehicle == "spacetruck") {
  console.log("You are outta this world!");
} else {
  console.log("You must be riding something else");
}