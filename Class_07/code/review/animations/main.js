
// Position Bill img in the top right-hand corner of the window
// Move Bill down to the bottom right-hand corner

var billImg = document.querySelector('img');
console.log(billImg);

billImg.style.position = 'fixed';
billImg.style.top = '0px';
billImg.style.right = '0px';

// Create a function to animate bill
  // Access the current top property
  // Add 10 to the current top property and set it to newTop
  // Update bill's top style to newTop
  // Then call the function again after 15ms

function animateBill (){
  // getComputedStyle(billImg)
  var topStr = getComputedStyle(billImg).top;
  var currentTop = parseInt(topStr, 10)
  var newTop = currentTop + 10;
  var heightStr = getComputedStyle(billImg).height;
  var currentHeight = parseInt(heightStr, 10);
  console.log("BILL'S FALLING");
  billImg.style.top = newTop + 'px';
  if(newTop + currentHeight > window.innerHeight){
    window.setTimeout(animateBill, 20);
  };
}

billImg.addEventListener('click', animateBill);