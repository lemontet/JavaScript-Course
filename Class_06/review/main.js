var h1 = document.querySelector('h1');
var headingText = h1.innerText;

function updateHeading(text){
  h1.innerText = text;
  console.log(text);
}

updateHeading('Updated with JS');

updateHeading('Update again');

var allLis = document.querySelectorAll('li');
console.log(allLis);

function updateItems(){
  for(var i = 0; i < allLis.length; i += 1){
  allLis[i].innerText = Math.random();
  console.log(allLis[i].innerText);
  }
}

updateItems();

var pTag = document.querySelector('p');
var aTag = document.querySelector('a');
console.log(aTag.getAttribute('href'));

