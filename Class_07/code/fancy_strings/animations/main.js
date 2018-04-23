var basicStr = `Hello World`;
console.log(basicStr);

var noEscape = `Jane's bag`;

var favNumber = 42;
var myFav = `My favourite number is ${favNumber}`
console.log(myFav);

var myMath = `4 * 2 = ${4 * 2}`;

var userName = 'Kookslams';
var postCount = 678;
var description = 'Curated kook slammage';

var htmlMarkup = `
  <h1>${userName}</h1>
  <p>${description}</p>
  <p>Post Count: ${postCount}</p>
  `;

document.body.innerHTML += htmlMarkup;