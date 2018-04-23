// Store language
// If language is HTML or CSS
// Print "You are talking about a front end language"
// Otherwise
// Print out "It could be a back end language"

var language = "HTML"

if (language === "HTML" || language === "CSS"){
  console.log("You are talking about a front end language");
} else {
  console.log("You might be talking about a back end language");
}

var userNameExists = true;
var appropriatePassword = true;

if (userNameExists && appropriatePassword){
  console.log("Logging you in!");
} else {
  console.log("Sorry! Your credentials are wrong");
}

// Store userAccount
// If the user doesn't have an account
// Print "You can create an account"
// Otherwise
// Print "You already have an account"

var hasUserAccount = false;

if (!hasUserAccount === true){
  console.log("You can create an account");
}