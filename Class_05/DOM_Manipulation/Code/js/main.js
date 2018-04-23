// document.querySelector( "CSS SELECTOR");
// Traverse the DOM and return the -first- DOM node that passes a given CSS selector

var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var li = document.querySelector('li');

console.log(h1, p, li);

// IF we query a nonexistent element, we'll get null
var video = document.querySelector('video');
console.log(video);

// document.querySelectorAll('CSS SELECTOR');
// Returns all DOM nodes that match a CSS selector

var images = document.querySelectorAll('img');
var listItemsAll = document.querySelectorAll('li');

console.log(images);
console.log(listItemsAll);

var blah = document.querySelectorAll('nothing');
console.log(blah);


/*
var imagesAll = document.querySelectorAll('img');
var nav = document.querySelector("nav.navigation");
var logo = document.querySelector("a.logo img");
var pressLogos = document.querySelector("div.press-logos");
var h1 = document.querySelector("h1 span");
// This one's an SVG
var circle = document.querySelector("circle");

*/

// DOM Traversal

var list = document.querySelector('ul')

var children = list.children;
var parent = list.parent;
var siblings = list.parentNode.children; // but note this will include your target node too

// node.getAttribute("ATTRIBUTE NAME");
// Return the current attribute value

var firstImage = document.querySelector("img");
var src = firstImage.getAttribute("src");
var alt = firstImage.getAttribute("alt");
console.log(src, alt);



// Find the a tag
// Log out the href attribute

var anchor = document.querySelector('a');
var href = anchor.getAttribute('href')
console.log(href);


// node.setAttribute('ATTRIBUTE NAME', 'DESIRED ATTRIBUTE VALUE');

/*
  Select the first image
  Change the src attribute to http://placepuppy.net/300/300
  Change the alt attribute to 'A picture of a puppy'
  Add the title attribute and set it to 'A puppy'
*/

var firstImage = document.querySelector('img');
firstImage.setAttribute('src', 'http://placepuppy.net/300/304')
firstImage.setAttribute('alt', 'A picture of a puppy')
firstImage.setAttribute('title', 'A puppy')


var aTag = document.querySelector('a');
aTag.setAttribute('href', 'http://askjeeves.com');
aTag.innerText = 'Ask Jeeves';

// Accessing the current HTML
// node.innerText OR node.innerHTML

var h1 = document.querySelector('h1');
console.log(h1.innerText);

var ul = document.querySelector('ul');
console.log(ul.innerHTML);

var pTag = document.querySelector('p');
pTag.innerText = 'Updated with JS';

var body = document.body;
body.innerHTML += '<h2> Added with JS </h2>';


// Getting USer input

//var input = document.input.value --- this is wrong lol

// Accessing current styles

var h1 = document.querySelector('h1');
var headingStyles = getComputedStyle(h1);
var width = headingStyles.widthl
var fontSize = headingStyles.fontSize;


var aTag = document.querySelector("a")
var styles = getComputedStyle(aTag);
//style.fontSize; -- wrong


// get the tags text decoration, border and colour

var h1 = document.querySelector('h1');
var h1Styles = getComputedStyle(h1);
var h1Textoration = h1Styles.textDecoration;
var h1Textoration = h1Styles.border;
var h1Textoration = h1Styles.color;

h1.style;

h1.style.color = 'hotpink';


// Set CSS styles with JS
// node.style.fontSize = ...

var h1 = document.querySelector('h1');
h1.style.textDecoration = 'underline';
h1.style.color = 'red';
h1.style.fontFamily = 'monospace';

var a = document.querySelector('a');
a.style.textDecoration = 'none';
a.style.color = 'red';
a.style.fontFamily = 'monospace';


// Creating DOM nodes

var newParagraph = document.createElement('p');
newParagraph.innerText = 'Created using JS';
newParagraph.style.textTransform = 'uppercase';
newParagraph.style.color = 'chartreuse';

document.body.appendChild(newParagraph);

// Events with JS
// - Event Type (e.g. click, hover, scroll)
// - Event target (a DOM node)
// - Callback Function (a function)

var eventType = 'click';
var button = document.querySelector('button');

function buttonClicked () {
  console.log('The button was clicked');
  // update colour #1d1d16
}








// var body = document.querySelector('body')
// undefined
// body.classList.contains('ace-page-popup')


// node.classList.contains('popup')

// zzzzzzzzzzzzzzzz

