/*
Which number's bigger?
Write an if statement that tests two numbers
(numOne and numTwo), and prints the biggest number
*/

var numberA = '18';
var numberB = 'fifteen';
var message = 'The bigger number: ';
if(numberA > numberB){
  console.log(message + numberA);
} else if (numberA == numberB){
  console.log('They are the same number: ' + numberA);
} else {
  console.log(message + numberB);
}

// QUESTION! When we pass the number as a string, this doesn't work properly. e.g. 'four' > 'fifteen' and 'thirteen' > 15. Why?

/*
Driving Age
Store the user age
If age is less than 16, print "Sorry, you can't drive yet"
If the age is equal to or over 16, print "Drive away!"
Bonus: If the user can't drive yet, tell them how many years
they will have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
Bonus: Make a check to see if the user has their "L"s.
E.g. If the user is over 16 and they have their "L"s
*/

var userAge = 15;
var drivingAge = 16;
var ageDiff = drivingAge - userAge;
if(userAge < drivingAge){
  console.log('Sorry, you can\'t drive yet! ' + ageDiff + (ageDiff > 1 ? ' years' : ' year') + ' until you can be a speedracer');
} else {
  console.log('Drive away!');
}

/*
The World Translator
Write an if statement that writes Hello World in
different languages (i.e. if the language is english,
write Hello World, if the language is French write
something romantic)
*/

var userLanguage = 'Chinese';
var messageTranslations = {
		'Chinese': "你好世界",
		'Dutch': "Hallo wereld",
		'English': "Hello world",
		'French': "Bonjour monde",
		'German': "Hallo Welt",
		'Greek': "γειά σου κόσμος",
		'Italian': "Ciao mondo",
		'Japanese': "こんにちは世界",
		'Korean': "여보세요 세계",
		'Portuguese': "Olá mundo",
		'Russian': "Здравствулте мир",
		'Spanish': "Hola mundo"
	};
console.log(messageTranslations[userLanguage]);


/*
Sydney Suburbs
Create a program that stores a user's suburb.
Depending on the answer, print an appropriate response
of your choosing (e.g. maybe what team they might support,
what activities the user might engage in etc.)
*/

var userSuburb = 'The Rocks';
var suburbs = {
  'The Rocks': 'When did you settle?',
  'Darlinghurst': 'Hope you like coca-cola',
  'CBD': 'Crowdsurfing every day',
  'Manly': 'Poke bowls, anyone?',
  'Haymarket': 'Sichuan noodles or ramen?'
}
var message;
if(suburbs[userSuburb] == undefined){
  message = 'Haven\'t heard of that one yet'
} else {
  message = suburbs[userSuburb];
}
console.log(message);

/*
The Grade Assigner
Write an if statement that gives users a score
(A, B, C, D, or F) based on the test results
*/

var gradeAchieved = 'A';
var gradesPossible = {
  'A': 'That\'s as good as it gets!',
  'B': 'You done good, kid',
  'C': 'Just 20% more and you\'ll get a B!',
  'D': 'We need to jumpstart this kid',
  'F': 'You gotta spend less time on the internet'
}
var gradeMessage;
if(gradesPossible[gradeAchieved] == undefined){
  gradeMessage = 'That\'s not a valid grade!'
} else {
  gradeMessage = gradesPossible[gradeAchieved];
}
console.log(gradeMessage);

/*
Air Conditioning
Store the current temperature, whether the A/C
is functional, and what the desired temperature is.
If the airconditioner is functional and the current
temperature is above the the desired temperature...
print "Turn on the A/C Please"
If the airconditioner is non-functional and the current
temperature is above the the desired temperature...
print "Fix the A/C now! It's hot!"
If the airconditioner is non-functional and the current
temperature is below the the desired temperature...
print "Fix the A/C whenever you have the chance... It's cool..."
*/

var airconState = 'working';
var currentTemp = 22;
var desiredTemp = 21;
var airconStateMessage;
var airconTempMessage;
if(airconState == 'working'){
  airconStateMessage = 'Aircon\'s working. ';
} else {
  airconStateMessage = 'Aircon\s not functional, might want to get that fixed. ';
}
if(currentTemp == desiredTemp){
  airconTempMessage = 'Temp is already where you want it though.'
} else if (currentTemp < desiredTemp){
  airconTempMessage = 'It\'s cool in here already!'
} else {
  airconTempMessage = 'Crank it!';
}
console.log(airconStateMessage + airconTempMessage);


/*
Write a program that stores a user age and
outputs a message based on that age

Age	Message
>= 35	'You can vote AND hold any place in government!'
>= 25	'You can vote AND run for the Senate!'
>= 18	'You can vote!'
ELSE	'You can't vote yet'

*/

var voterAge = 35;
var voterMessage = 'You can\'t vote!'
if(voterAge >= 18 && voterAge <25){
  voterMessage = 'You can vote!'
} else if(voterAge >= 25 && voterAge < 35){
  voterMessage = 'You can vote AND run for the Senate'
} else if (voterAge >= 35){
  voterMessage = 'You can vote AND hold any place in government'
} else if (voterAge > 90){
  voterMessage = 'You may be eligible to opt out of voting'
}
console.log(voterMessage);

/*
Golf
Write an if statement that gives a user the
nickname of their score, based on par.

Score	Nickname
1	"Hole in one"
<= par - 2	"Eagle"
par - 1	"Birdie
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Not sure"
*/

var golferScore = 3;
var golfMessage = 'This scenario is not handled'
if(golferScore == 1){
  golfMessage = 'Hole in one';
} else {
  golfMessage = 'I am going to be honest here.. I don\'t know much about golf and think I just fell asleep :(('
}
console.log(golfMessage);

/*
Serge Says
Store a user message
Print 'Sure.' if you ask a question (e.g. the message ends in ?).
Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).
Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).
Print 'Whatever.' to anything else.
Bonus: If the message is all spaces, also print "Fine. Be that way!"
*/

var userMessage = '        ';
var computerMessage = 'Whatever';
if (userMessage.includes('?')){
  computerMessage = 'Sure.';
} else if (userMessage.trim().length == 0){
  computerMessage = 'Fine. Be that way!'
} else if (userMessage === userMessage.toUpperCase()){
  computerMessage = 'Woah, chill out!';
}
console.log(computerMessage);

/*
The Pluralizer
Write an if statement that works with a noun and a number.
Make the noun plural if necessary!! Make this as accurate as possible
(e.g. use the rules described here: http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/)
*/

var noun = 'cow';
var number = '14';
if (number > 1){
  noun += 's';
} else if (noun.substr(noun.length - 1) == 's' && number == 1){
  noun = noun.slice(0, -1);
}
var pluraliser = number + ' ' + noun;
console.log(pluraliser);


/*
The Rest
Implement a Rock, Paper, Scissors single game
Implement a Rock, Paper, Scissors best of three game
Anything else you can think of!
*/

// Get player's move
// Generate a randomcomputer move
// Define the tie movies
// Define the winning moves
// Print out the right message for the relevant moves

var playerMove = 'rock';
var rpsMessage = 'This scenario is not handled';
var possibleMoves = ['rock', 'scissors', 'paper'];
var computerMove = possibleMoves[Math.floor(Math.random()*3)];
if(playerMove == computerMove){
  rpsMessage = 'It\'s a tie!';
} else if (
  (playerMove == 'rock' && computerMove == 'scissors')
  ||
  (playerMove == 'scissors' && computerMove == 'paper')
  ||
  (playerMove == 'paper' && computerMove == 'rock')
  ){
  rpsMessage = 'You win. Suck it, computer!';
} else {
  rpsMessage = 'Wuh oh! Computer kicked your butt with ' + computerMove;
}
console.log(rpsMessage);

