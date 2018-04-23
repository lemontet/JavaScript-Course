/*
Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
Bonus #4: Pretty much go nuts or whatever.
*/


// First, let's get rid of that blinding white backgroundColor
var body = document.querySelector('body');
body.style.backgroundColor = '#111111';

// Make cookie smaller
var cookie = document.querySelector('img');
cookie.style.height = '40%';
cookie.style.left = '0px';


// vars for function


var newCookieLeft = 0;
var currentWidth;



// function setTimeout (imgLeft, imgWidth, function{
//  if(newCookieLeft + currentWidth < window.innerWidth){
//  window.setTimeout(cookieRunRight, 30);
//   };
// };

function cookieRunRight () {
  var widthStr = getComputedStyle(cookie).width;
  currentWidth = parseInt(widthStr, 10);
  var imgLeftStr = cookie.style.left;
  var imgLeftInt = parseInt(imgLeftStr, 10);
  newCookieLeft = imgLeftInt + 10;
  cookie.style.left = newCookieLeft + 'px';

  if(newCookieLeft + currentWidth < window.innerWidth){
    window.setTimeout(cookieRunRight, 30);
  };

  console.log(newCookieLeft + currentWidth, window.innerWidth);
  if(newCookieLeft + currentWidth == window.innerWidth){
    cookie.style.transform = 'scaleX(-1)';
    console.log('run left is finished');
    cookieRunLeft();
  }
};



function cookieRunLeft () {
  console.log('run right now');
  var cookieLeftStr = cookie.style.left;
  var cookieRightInt = parseInt(cookieLeftStr, 10);
  var newCookieRight = cookieRightInt - 10;

  cookie.style.left = newCookieRight + 'px';

  var widthStr = getComputedStyle(cookie).width;
  var currentWidth = parseInt(widthStr, 10);
  console.log(newCookieRight + currentWidth, window.innerWidth);

  if(cookie.style.left){
    window.setTimeout(cookieRunLeft, 30);
    console.log('set the timeout');
  }
  if (cookie.style.left == '0px') {
    window.setTimeout
    cookie.style.transform = '';
    cookieRunRight()
  }
}

cookieRunRight();

// flip cookie
