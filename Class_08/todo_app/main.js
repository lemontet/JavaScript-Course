// In our app we want to separate presentation and data/logic
// We will use a constructor to......
// our app will have a property called this.todos = []
// It will have the ability to add todos

function TodoApp (){
  // this = {}
  this.todos = []; // this = {todos: []}
  this.addTodo = function (todo){
    this.todos.push(todo);
    this.render();
  };
  this.render = function (){
    var todoMarkup = this.todos.reduce(function(totalHTML, todo){
    return totalHTML + `<li>${todo}</li>`;
  }, '');
  var target = document.querySelector('.todos');
  target.innerHTML = `<ul>${todoMarkup}</ul>`
  }
}

var myTodoApp = new TodoApp();
myTodoApp.addTodo("Eat mango chicken");
myTodoApp.addTodo("Watch the meg trailer");
myTodoApp.addTodo("Evangelise nybbles");

myTodoApp.render();

var button = document.querySelector('button');

button.addEventListener('click', function(){
  var input = document.querySelector('input');
  var newTodo = input.value;
  if(newTodo === ''){
    alert('You need to add something!');
  } else {
    myTodoApp.addTodo(newTodo);
  }
})

