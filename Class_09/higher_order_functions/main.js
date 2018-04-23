// Protect thine eyes!
document.body.style.backgroundColor = 'black';

// Receiving functions as input

function thisRunsRegularly(){
  console.log('This happens every 1000ms');
}

// these are higher order functions because they receive a callback function

//setInterval(thisRunsRegularly, 1000);

// setTimeout(function(){
//   console.log('I was delayed by 2000ms');
// }, 2000)

// repeat
  // Create a function that receives a callback and runs it X amount of times

  function repeat (numTimes, cb, a){
    for(var i = 1; i <= numTimes; i += 1){
      cb(a);
    }
  }

  function myCallback(a){
    console.log('My callback was executed', a);

  }

  repeat(5, myCallback, 'Coins!');


  // forEach function that receives an array and a callback
  // that callback should be provided with:
  // item
  // index
  // entire collection

  function forEach(coll, iterator){
    for (var i = 0; i < coll.length; i += 1) {
      var item = coll[i];
      iterator(item, i, coll);
      console.log('an iteration ran for ', item);
    }
  }

  var letters = ['a', 'b', 'c', 'd'];

  function printLetter(currentItem, currentIndex, collection){
    console.log(currentItem, currentIndex, collection);
  }

forEach(['groucho', 'harpo', 'chico'], function(brothersName){
  console.log(`The current brother is ${brothersName}`);
});


function map(entireCollection, callbackFunction){
  var mappedArray = [];
  for(var i = 0; i < entireCollection.length; i += 1){
    var currentValue = entireCollection[i];
    var result = callbackFunction(currentValue);
    mappedArray.push(result);
  }
}

  // Return functions as Output

  function creator() {
    console.log('Creator was called');
    return function (){
      console.log('I am the returned function');
    };
  }

var returnedFunc = creator()
returnedFunc()

function createGreeting(greeting, name){
  return function(name){
    console.log(greeting, name);
  }
}

var hi = createGreeting('hi!');

hi('spud')

function createPokemonCharacter(name){
  return function(){
    console.log(`A wild ${name} appears!`);
  };
}

var createPikachu = createPokemonCharacter('Pikachu');
createPikachu();

var createJigglypuff = createPokemonCharacter('Jigglypuff');
createJigglypuff();
