var baseURL = "http://api.open-notify.org/astros.json"

// To make any AJAX Request we need...
  // URL
  // HTTP method
  // Data Type -- Defaults to JSON
  // Parameters
// Then we need to handle what it receives


function displayData(data){
  var html = `
    <h1>${data.number} people in space</h1>
    `;
    document.body.innerHTML = html;
  console.log(`There are ${data.number} people in space`);
}

document.body.innerHTML = "<h1> Loading";
// Start the request -- it'll be called 'response' in our .then event handler
fetch(baseURL, { method: "GET" })
  .then(function(response){
    return response.json(); // Turn the returned string into a json object -- otherwise it will just log stuff about whether the HTTP request logged successfully
    // This undoes JSON.stringify() which turned json into an object
  }) //THEN, pass the response to the .then event handler below as 'data'
  .then(function(data){
    displayData(data);
  });
