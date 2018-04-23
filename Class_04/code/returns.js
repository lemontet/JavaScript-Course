// The return statement allows us to save a result for later use
function square (x) {
  var result = x * x;
  return result;
}

var squareOfFour = square(4);
console.log(squareOfFour);

var squareOfTwelve = square(12);
console.log(squareOfTwelve);

console.log(square(16) + square(12));

var userOne = {
  password: 'chicken'
}

var userTwo = {
  password: 'zebra'
}

// Predicate function -- one that always returns a boolean value
function isPasswordChicken(user){
  if(user.password === 'chicken'){
    return true;
  } else {
    return false;
  }
}
console.log(isPasswordChicken(userOne));


var users = [
  { username: 'Platos backyard', admin: true },
  { username: 'Snail', admin: true },
  { username: 'Mr Teeny', admin: false }
]

function isAdmin (userList){
  for (var i = 0; i < userList.length; i += 1) {
    if(userList[i].admin == true){
      console.log(userList[i].username + ' is an Admin!')
    } else {
      console.log(userList[i].username + ' is not an Admin..');
    }
  }
}
isAdmin(users);

function cube (num) {
  return Math.pow(num, 3);
}
console.log(cube(3));

// Some languages have an implicit return, which is where the Function
// returns the last line. JS doesn't do that, though arrow functions work
// a little differently

function double(num) {
  return num * 2;
}

console.log(double(4));


var result = cube(double(5));
console.log(result);

function delayed () {
  console.log('I was delayed');
}

setTimeout(delayed, 1000);

var person = {
  firstName: 'Jeff',
  sayHi: function () {
    console.log('Jeff says Hi!');
  }
}

person.sayHi();