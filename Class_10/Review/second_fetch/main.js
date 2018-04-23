var baseURL = "https://randomuser.me/api";
// Over time you will specify most of these things outside the Fetch request
var parameters = "?results=50";
var url = baseURL + parameters;

var httpOptions = {
  method: "GET"
}

function turnJSONIntoObject(response){
  return response.json();
}

function handleData(data){
  //debugger;
  // debugger is going to add a break point and pause your code
  // Then you can write stuff in your console at that point (e.g. inside this function)
  document.body.innerHTML = "<h1>Users Loaded:</h1>"
  data.results.forEach(function(person){
    var html = `
      <p>${person.name.first} ${person.name.last} - ${person.email}</p>
    `;
    document.body.innerHTML += html
  })


  // var person = data.results[0];
  // // debugger
  // console.log(data);
  // var html = `
  //   <p>${person.name.first} ${person.name.last} - ${person.email}</p>
  // `;
  // document.body.innerHTML = html
}

function loading(){
  document.body.innerHTML = 'Loading...';
}

loading();

fetch(url, httpOptions)
  .then(turnJSONIntoObject)
  .then(handleData);

  // You only use .then when you're not sure how long a process is going to take -- asynchronous stuff only

// When we make our fetch request it should..
  // Waits for all the data to be returned (character by character)
  // Combines the data (turns it into a single piece of data, which is a string)
  // Turns the JSON into an object


// Passing parameters to the api
// https://randomuser.me/api/?results=5000
