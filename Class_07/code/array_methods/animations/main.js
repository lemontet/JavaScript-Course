var letters = ['a', 'b', 'c', 'd'];

letters.forEach(function(letter, index, entireArray){
  var message = `
    Current Letter: ${letter}.
    Index: ${index}.
    Entire Array: ${entireArray}.
  `;
  console.log(message);
});

var numbers = [1223, 334, 343, 254, 343];
//JS just knows to return the current elem, the index, then the whole array
function displayNum(currentNum, i){
  var html = `
  <p>Current number: ${currentNum}
    Index number: ${i}
  </p>`;
  document.body.InnerText += html;
}

numbers.forEach(displayNum)

var nums = [3, 5, 6, 8, 29, 53, 36];

// var odds = nums.forEach(function(num){
//   console.log(num);
// });

var odds = nums.filter(function(num){
  return num % 2 === 1;
});

console.log(odds);


var marxBrothers = [
  { name: 'Groucho', admin: true },
  { name: 'Harpo', admin: false },
  { name: 'Gummo', admin: false }
];

var admins = marxBrothers.filter(function(brother) {
  return brother.admin === true;
})

console.log(admins);

var words = ['Banana', 'Mango', 'Custard Apple', 'CHICKEN', 'APPLE PIE', 'Ya dangus'];

function isWordUpperCase(word){
  return word === word.toUpperCase();
}

var allUpperCasedWords = words.filter(function(isWordUpperCase){
})

console.log(allUpperCasedWords);



//  Map - transforming every element in a collection into something else {

var letters = ['a', 'b', 'c', 'd', 'e'];

upperCasedLetters = letters.map(function(letter){
  return letter.toUpperCase();
});
console.log(upperCasedLetters);


var nums = [1, 2, 3, 4, 5];

multiFive = nums.map(function(number){
  return number * 5
});

console.log(multiFive);


// var todos = [
//   'Watch Satantango',
//   'Go to a plant sale',
//   'Stay silent',
//   'Buy chicken'
// ];
//
// todos.map(function(item, index){
//   return `<li>#${index + 1}: ${item}</li>`
// }).forEach(function(markup){
//   document.body.innerHTML += markup;
// })

// Reduce -- Take a collection of data and turn it into a single piece of information
// Often called 'inject' because it's trying to inject/add an operation between the index items in the collection
// Common for finding averages

var myNumbers = [1, 2, 3, 4, 5, 6];

var sum = myNumbers.reduce(function(total, currentItem){
  return total + currentItem
}, 0);

console.log(sum);

var testScores = [76, 92, 98, 43, 100];

var averageScore = testScores.reduce(function(total, currentItem){
  var message = `
    Current Total: ${total}
    Current Score: ${currentItem}
    Next Current Total: ${total + currentItem}
  `
  console.log(message);
  return total + currentItem
}, 0) / testScores.length;

console.log(averageScore);


var todos = [
  'Watch Satantango',
  'Go to a plant sale',
  'Stay silent',
  'Buy chicken'
];

var allHTML = todos.reduce(function(totalHTML, todo){
  return totalHTML + `<li>${todo}</li>`
}, "")

document.body.innerHTML += `<ul>${allHTML}</ul>`;
console.log(allHTML);








