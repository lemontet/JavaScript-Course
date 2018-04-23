/*
Driving Age
Write a function that receives a userAge called canDrive
If the received age is less than 16, print "Sorry, you can't drive yet"
If the received age is equal to or over 16, print "Drive away!"
Bonus: If the user can't drive yet, tell them how many years they will
have to wait. E.g. "Sorry, you have 4 years to wait until you can drive"
Bonus: Make a check to see if the user has their "L"s.
E.g. If the user is over 16 and they have their "L"s
*/

function drivingAge (userAge){
  var drivingAge = 16;
  var ageDiff = drivingAge - userAge;
  if(userAge < drivingAge){
    console.log('Sorry, you can\'t drive yet! ' + ageDiff + (ageDiff > 1 ? ' years' : ' year') + ' until you can be a speedracer');
  } else {
    console.log('Drive away!');
  }
}
drivingAge(15);

/*
The World Translator
Write a function called translator that receives a language
(e.g. "fr", "eng" etc.). Log out the translated version
(e.g. if the language is "eng" - log "Hello World",
if the language is "french" - log "Bonjour le monde" etc.)
*/

function translator (userLanguage){
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
}
translator('Japanese');

/*
The Fortune Teller
Write a function named tellFortune that:

Takes 4 arguments:
number of children,
partner's name,
geographic location,
job title.
Outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.

*/

function fortune (numKids, partnerName, location, job){
  console.log('You will be a ' + job + ' in ' + location + ', married to ' + partnerName + ' with ' + numKids + ' kids.');
}
fortune(4, 'Colonel Sanders', 'Kentucky', 'poultry breeder');
