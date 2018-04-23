function getUsers(){
  var users = ["Bill", "Jill", "Gill"];
  return new Promise(function (resolve, reject){
    // resolve(users)
    reject("Could not get the users")
  });
  }

getUsers().then(function(users){
  console.log(users);
}).catch(function(errorMessage){
  console.error(errorMessage);
})

// You can use console.log or console.error or console.console.warn
// You can style stuff in your browser console!

