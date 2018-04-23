/*
The Fortune Teller
Store the following into variables:
1. number of children
2. partner's name
3. geographic location
4. job title
Output your fortune to the screen:
"You will be a X in Y, and married to Z with N kids."
*/

// More than 7 kids is probably too much..
var numberOfChildren = Math.floor(Math.random() * Math.floor(7));
var partnersName = 'Patrice';
var geographicLocation = 'Wintervale';
var jobTitle = 'Feather Expert';

var fortune =
  'You will be a ' +
  jobTitle +
  ' in ' +
  geographicLocation +
  ', and married to ' +
  partnersName +
  ' with ' +
  numberOfChildren +
  ' kids.'

console.log(fortune);


/*
The Age Calculator
Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var birthDate = new Date();
birthDate.setFullYear(1991, 10, 10);
var birthYear = birthDate.getFullYear();
var postBirthdayAge = currentYear - birthYear;
var preBirthdayAge = postBirthdayAge - 1;
var age = preBirthdayAge;
if (
  birthDate.getMonth() >= currentDate.getMonth()
  &&
  birthDate.getDay() >= currentDate.getDay()){
  age = postBirthdayAge
};
// if current month and date > birthday, then take postBirthdayAge
// else, take preBirthdayAge



console.log('You are ' + age + ' years old.');


/*
The Lifetime Supply Calculator
Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
Bonus: Get the current year using JavaScript!
*/
var currentAge = 26;
var ageOfDeath = 95;
var yearsLeft = ageOfDeath - currentAge;
// I did year cause it made more sense
var haircutsPerYear = 2.5;
var lifetimeHaircutSupply = currentYear;

console.log('You will need ' + yearsLeft + ' haircuts to last you until the ripe old age of ' + ageOfDeath);

/* !!Question!! Why does assigning setFullYear to a variable return a bunch of numbers?

var date = new Date();
var setDate = date.setFullYear(2010, 3, 8);
=> 1270713032812
Is that the number of miliseconds between the orginal date and set date?


/*
The Geometrizer
Calculate properties of a circle, using the definitions here.
Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 3;
var pi = Math.PI;
var circumference = radius * 2 * pi;
var radiusSquared = Math.pow(radius, 2);
var area = pi * radiusSquared;

console.log('The circumference is ' + circumference.toFixed(2) + 'cm');
console.log('The area is ' + area.toFixed(2) + 'cm^2');


/*
The Temperature Converter
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var celsiusTemp = 160;
var fahrenheitTemp = 350;
var fahrenheitToCelsius = (fahrenheitTemp - 32) * 5 / 9;
var celsiusToFarenheit = celsiusTemp * 9 / 5 + 32
console.log(fahrenheitToCelsius.toFixed(2));
console.log(celsiusToFarenheit);