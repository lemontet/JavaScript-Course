function dealingWithTime(){
  console.log('I ran');
}

//setInterval(dealingWithTime, 1000);

/*
SELECT and STORE the image as bill

CREATE a function called fadeBillAway
  GET the current opacity and store as currentOpacityAsString
  GET the current opacity as a number and store as currentOpacity
  CREATE newOpacity by subtracting 0.01 from currentOpacity
  UPDATE bill opacity to be newOpacity
  IF the currentOpacity is >= 0
    CALL fadeBillAway in 10ms

CALL fadeBillAway to start the animation
*/

var bill = document.querySelector('img');
function fadeBillAway(){
  var currentOpacityAsString = getComputedStyle(bill).opacity;
  var currentOpacity = parseFloat(currentOpacityAsString, 10);
  var newOpacity = currentOpacity -= 0.01;
  bill.style.opacity = newOpacity;
  if (currentOpacity >= 0){
    window.setTimeout(fadeBillAway, 10)
  }
  console.log('Bill was faded');
}

// Create a slight delay before fading bill
window.setTimeout(fadeBillAway, 1000);

var nick = document.querySelector('.nick');
nick.style.width = '100px';

// Get the current width
// Add 10 to it
// Update the width
// Keep doing this every 50ms

function makeNickWider() {
  var currentWidthAsString = getComputedStyle(nick).width;
  var currentWidth = parseInt(currentWidthAsString, 10);
  console.log(currentWidthAsString, currentWidth);
  var desiredWidth = currentWidth += 10;
  console.log(desiredWidth);
    if(desiredWidth <= 400){
    nick.style.width = desiredWidth + 'px';
    window.setTimeout(makeNickWider, 50);
  }
}

makeNickWider();