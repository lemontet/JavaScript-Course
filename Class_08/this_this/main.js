// Global Binding (Default)

console.log(this);

function sayHi(){
  console.log(this);
};

sayHi();

// Event Binding -- the 'this' keyword is set to whatever was interacted with (e.g. an image being clicked, the browser being scrolled, an input being typed in)

var duck = document.querySelector('img');
duck.style.height = '200px';
duck.addEventListener('click', function(){
  console.log(this);
});

  // Note that the keyword 'this' will refer to the element (i.e. DOM node) that was interacted with

function onImageclick () {
  console.log(this);
}

document.querySelector('.cage').addEventListener(
  'click',
  onImageclick
);

var input = document.querySelector('input');

function onKeyPress(){
  console.log(this.value);
}
input.addEventListener('keypress', onKeyPress)

// Implicit -- the method was called on _____

var person = {
  name: 'Serge',
  sayHello: function(){
    console.log('Say Hello ran', this);
  }
}
person.sayHello();


//Explicit Binding -- this refers to whatever you passed in

function sayHello(){
  console.log('anExplicit Say hello was run', this);
}
var groucho = {name: 'groucho'}
var harpo = {name: 'harpo'}
// Call with a context object
sayHello.call(groucho); // groucho === this
sayHello.call(harpo); // harpo === this
sayHello.call({name: 'Gummo'});
sayHello.apply(groucho); // groucho === this

var gill = {name: 'gill'};
var gazza = {name: 'gazza'};
var hazza = {name: 'hazza'};

var sayHelloGill = sayHello.bind(gill); // gill === this
sayHelloGill();


// New Binding -- a new empty object that is implicitly returned
// best to use pascal case for these guys
function Person(name, email, message){
  this.name = name;
  this.email = email;
  this.saySomething = function () {
    var messageSaid = `${this.name} says ${message}`
    console.log(messageSaid);
  };
  console.log(this.saySomething());
  console.log(this, name);
}

var p = new Person('Curdle', 'bill@billyboy.com', 'howdy, cats!');

function Beer (brand, capacity, drinkMessage){
  // this = {} is happening implicitly
  this.brand = brand;
  this.capacity = capacity;
  this.drink = function (){
    console.log(drinkMessage);
  };
  console.log(this);
  // return this is also happening implicitly
}

var vb = new Beer('VB', '350ml', 'Drink!'); // Call-site

vb.drink()


/*
Figuring out what 'this' is in order of precedent

1. Is the New keyword there?
2. Is there a .call() .apply() or .bind()? It'll be the argument
3. Is it a method?
4. Is it an object/element being interacted with?
5. IS it the window?

*/


