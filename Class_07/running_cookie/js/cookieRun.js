var element = document.getElementById('cookie')
console.log(element);

element.style.height = '50%';
element.style.left = '0px';

var newLeft = 0;
var maxWidth = window.innerWidth;
console.log(element.style.width);
var newRight = maxWidth;
var intervalRight = setInterval(moveRight, 100);
var intervalLeft = setInterval(moveLeft, 100);
var count = 0;



var moveRight = function(elementId){
  console.log('helo');
  newLeft += 10;
  element.style.left = newLeft + 'px';
  if(parseInt(element.style.left) >= maxWidth){
    element.style.transform = 'scaleX(-1)';
    //clearInterval(intervalRight);
  }
  console.log('Move right!');
};

var moveLeft = function(elementId){
  newLeft = elementeft - 10;
  element.style.left = newLeft + 'px';
  if(element.style.left === '0px'){
    element.style.transform = '';
    //clearInterval(intervalLeft);
  }
  console.log('Move left!');
};

var counter = 0;
var upInterval = setInterval(countFunction, 100)
function countFunction(){
  counter++;
  console.log(counter);
  if(counter >= 5){
  clearInterval(upInterval);
  upInterval = setInterval(countDown, 100)
  }
}

function countDown(){
  counter --;
  console.log(counter);
  if(counter === 0){
    console.log('Where am i?');
    clearInterval(upInterval);
    upInterval = setInterval(countFunction, 100)
  }
}

// Get the current left
// Create an interval var which runs the first function
// Declare first function and add a clearInterval at the end
// Run the other function
// Store the other function in a var
//
