var ordinals = ['zeroth', 'first', 'second', 'third', 'fourth'];
console.log(ordinals[0]);

// Print every ordinal in the array
// Define my loop:
// Starting point = 0
// Step - +1
// Ending point - Use the length of the array
for(var count = 0; count < ordinals.length; count += 1){
  console.log(ordinals[count]);
}


// Your top choices
// Create an array to hold your top five choices
// of something (dogs, books, presidents, whatever).
// If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like:
// "My #1 choice is blue."
// Bonus: Change it to log
// "My 1st choice,
// "My 2nd choice",
// "My 3rd choice",
// picking the right suffix for the number based on what it is.

var topFive = ['karaage', 'tamago', 'chashu', 'kaedama', 'nori'];

for(var i = 0; i < topFive.length; i += 1){
  var arrayValue = topFive[i];
  var grammar;
  if(i == 0){
    grammar = 'st';
  } else if (i == 1){
    grammar = 'nd';
  } else if (i == 1){
    grammar = 'rd';
  } else {
    grammar = 'th';
  }
  var order = i + 1;
  if(i == 0){
    console.log("My", order+grammar, "choice is", arrayValue);
  }
  if(i == 1){
    console.log("My", order+grammar, "choice is", arrayValue);
  }
  if(i == 2){
    console.log("My", order+grammar, "choice is", arrayValue);
  }
  if(i == 3){
    console.log("My", order+grammar, "choice is", arrayValue);
  }
  if(i == 4){
    console.log("My", order+grammar, "choice is", arrayValue);
  }
}
