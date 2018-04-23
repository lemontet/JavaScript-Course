// https://gist.github.com/ga-wolf/cbf4b4ddc1bcebc16afb7aae3ad785f1

/*
Driving Age
Write a function that receives a userAge called canDrive
If the received age is less than 16, print "Sorry, you can't drive yet"
If the received age is equal to or over 16, print "Drive away!"
Bonus: If the user can't drive yet, tell them how many years they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
Bonus: Make a check to see if the user has their "L"s. E.g. If the user is over 16 and they have their "L"s
*/

console.clear()

function canDrive (userAge, hasLs){
  if (userAge < 16) {
    let yearsTillSpeedy = 16 - userAge;
    console.log(`Sorry, you can't drive yet. You have to wait ${yearsTillSpeedy}ish years till you can drive`);
  } else if (userAge >= 16 && hasLs){
    console.log('Drive away!');
  } else {
    console.log('You need to get your Ls, ya dangus');
  }
}

canDrive(15, false);

/*

The World Translator
Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "french" - log "Bonjour le monde" etc.)

*/

function translator (language){
  var languageToLowerCase = language.toLowerCase()
  var helloTranslation = {
    english: 'Hello',
    french: 'Bonjour',
    japanese: 'こんにちは',
    spanish: 'Hola'
  }
  console.log(helloTranslation[languageToLowerCase]);
}

translator('Japanese');


/*

The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

Takes 4 arguments: number of children, partner's name, geographic location, job title.
Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

function fortune (numKids, partnerName, location, job){
  console.log('You will be a ' + job + ' in ' + location + ', married to ' + partnerName + ' with ' + numKids + ' kids.');
}
fortune(4, 'Colonel Sanders', 'Kentucky', 'poultry breeder');

/*

The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:

Takes 2 arguments: birth year, current year.
Calculates the 2 possible ages based on those years.
Outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

*/

function ageCalculator (birthYear){
  var currentYear = (new Date()).getFullYear();
  console.log(currentYear);
  var possibleAge = currentYear - birthYear;
  console.log(`You are either ${possibleAge - 1} or ${possibleAge}`);
}

ageCalculator(1992);

/*

The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

Takes 2 arguments: age, amount per day.
Calculates the amount consumed for rest of the life (based on a constant max age).
Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.

*/

/* Already did rest of exercises, but can't find where? */

var users = [
  {
    email: "groucho@ga.co",
    password: "chicken",
    isAdmin: true
  },
  {
    email: "harpo@ga.co",
    password: "elephant",
    isAdmin: false
  },
  {
    email: "gummo@ga.co",
    password: "pinkFairyArmadillo",
    isAdmin: true
  },
  {
    email: "zeppo@ga.co",
    password: "dumboOctopus",
    isAdmin: false
  }
];

/*
Create a function that receives a user object, and prints out whether they are an admin or not.

Create a function that receives an ID (index), an email and a password. If the function was provided with an email and a password that matches up, log "You are logged in". Otherwise, log "Sorry, something went wrong".

*/

function isAdmin (email, password) {
  let userIndex;
  for (var i = 0; i < users.length; i+= 1) {
    if(email.toLowerCase() === users[i].email){
      userIndex = i;
    }
  }

  if(userIndex === undefined){
    return console.log('You don\'t have an account. Want to sign up?');
  }

  var authenticateEmail = email.toLowerCase() === users[userIndex].email
  var authenticatePassword = password.toLowerCase() === users[userIndex].password

  if(authenticateEmail && authenticatePassword){
    console.log('You are logged in');
  }

  if (authenticateEmail && !authenticatePassword) {
    console.log('Password incorrect');
  }
}

isAdmin('harpo@ddga.co', 'elephant');








