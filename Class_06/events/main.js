// 4 Things for every event
  // Select the target element
  // Definte the event event type
  // Create the callback function
  // Create your event listener
var button = document.querySelector('button');
var eventType = 'click';
function newImage () {

}

function onbuttonClick (){
  setInterval(newImage(), 3000)
}

button.addEventListener(eventType, onbuttonClick);

// Every time the user moves their mopuse over Bill
// Log out that the mouse moved
// Add a border

var bill = document.querySelector('img');
var type = 'mousemove';
function mouseyBill (){
  console.log('Mouse moved!');
}
// bill.addEventListener(type, mouseyBill);

var doubleclick = 'doubleclick';
function doubleBill (){
  console.log('Double click!');
}
bill.addEventListener(doubleclick, doubleBill);

var contextMenu = 'contextmenu';
function contextBill (){
  console.log('Context!');
}
bill.addEventListener(contextMenu, contextBill);

// Every time the browser is resized
// Log out the current browser width

window.addEventListener('resize', function(){
  var message = 'The browser\'s width is ' + window.innerWidth;
  console.log(message);
})

// Create an image, set the src to nick cage, add it to the page
// Add an event listener and log 'nick was clicked'

var cage = document.createElement('img');
cage.setAttribute('src', 'http://placecage.com/300/200');
document.body.appendChild(cage);

function nickWasClicked() {
  console.log('Nick was clicked');
}

cage.addEventListener('click', nickWasClicked);


var createAccountButton = document.querySelector('.create');
var typeOfEvent = 'click';
function createAccount () {
  var emailInput = document.querySelector('#email');
  var usernameInput = document.querySelector('#username');
  var email = emailInput.value;
  var username = usernameInput.value;
  var message = email + ' ' + username;
  console.log(message);
}
createAccountButton.addEventListener(typeOfEvent, createAccount)

// KEYLOGGING
var targetInput = document.querySelector('.type');
function onKeyPress (event) {
  var p = document.createElement('p');
  p.innerText = 'You typed: ' + event.key;
  document.body.appendChild(p);
  console.log(event);
}
targetInput.addEventListener('keypress', onKeyPress)


window.addEventListener('mousemove', function(e){
  //console.log(e);
  //Can use this to make image follow your cursor around
  var xCoord = e.clientX;
  var yCoord = e.clientY;
  var imageToMove = document.querySelector('.move');
  imageToMove.style.left = xCoord + 'px';
  imageToMove.style.top = yCoord + 'px';
  console.log(xCoord, yCoord);
})