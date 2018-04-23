var body = document.querySelector('body');
body.style.backgroundColor = '#222222'
body.style.color = '#00FFFF';
var img = document.querySelector('img');
img.style.height = '100px'

var todos = ['Todo 1', 'Todo 2', 'Eat mango chicken'];

var listItems = todos.reduce(function(currentHTML, todo){
  return currentHTML + `<li>${todo}</li>`;

}, '');

var unorderedList = `<ul>${listItems}</ul>`;
console.log(unorderedList);