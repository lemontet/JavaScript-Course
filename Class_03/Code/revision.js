// If the user's age > 18yo
// Log "Go purchase something"
// Else
// Log "Go to mylittlepony.com"

var minAge = 18;
var userAge = 12;
var isHacker = true;

if (userAge >= minAge || isHacker){
  console.log("Go purchase things!");
} else {
  console.log("Go to mylittlepony.com");
}

var userName = "Blade";
var userJob = "Landscape Gardener"


// If the user's name is Blade AND his job is Teacher
// Log out "that is a good choice"
// Else if the
if(userName === "Blade" && userJob === "Teacher"){
  console.log("Good career choice");
} else if(userName === "Blade" && userJob === "Landscape Gardener"){
  console.log("Not a great choice");
} else {
  console.log("Not sure");
}

