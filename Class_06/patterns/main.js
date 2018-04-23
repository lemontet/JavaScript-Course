// Select
var h1 = document.querySelector('h1');

// Manipulate
h1.innerText = 'Updated with JS';
h1.style.color = 'hotpink';
h1.style.textDecoration = 'underline';
h1.style.fontSize = '28px';

// Admire...
function adLorem(){
  // Create - create a paragraph DOM node
  var pTag = document.createElement('p');
  // Manipulate - Update the text, change styles, etc,
  // We want to Manipulate as much as possible before injecting into the page so the browser doesn't have to keep redrawing the page
  pTag.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  pTag.style.color = 'rebeccapurple';
  pTag.style.textDecoration = 'line-through';
  // Inject - Add it to the page
  document.body.appendChild(pTag);
}

for(var i = 1; i <= 1; i += 1){
  adLorem();
}

var rand = Math.floor(Math.random() * 500);

function addImg(){
  var imgTag = document.createElement('img');
  imgTag.src = 'https://picsum.photos/' + rand + '/' + rand + '/?random';
  document.body.appendChild(imgTag);
  // setInterval(function randomiseImgSize(){
  //   imgTag.style.width = rand + 'px';
  //   imgTag.style.height = rand + 'px';
  // }, 3000);
}
var addImgButton = document.querySelector('button');
addImgButton.addEventListener('click', addImg());

