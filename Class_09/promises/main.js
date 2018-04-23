// Protect thine eyes!
document.body.style.backgroundColor = 'grey';

// A promise is an eventual result

// Creating Promises
// this starts with a constructor function
// which you must pass an executor function (i.e. the thing that starts the API request or sends the email)
// The exectuor function receives 2 callback functions automatically
  // a resolve function
  // a reject function


var myPromise = new Promise(function(resolve, reject){
  resolve('This task has finished running')
});

myPromise.then(function(){
  console.log('The promise was fulfilled');
});

function createPromise(){
  return new Promise(function(resolve, reject){
    resolve('The promise was fulfilled')
  });
}

createPromise().then(function(successMessage){
  console.log(successMessage);
})

function delay (timeInMs){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('I waited some amount of time for you');
    }, timeInMs);
  });
}

delay(1000).then(function(data){
  console.log(data);
})

function makeAPIRequest(){
  return new Promise(function(resolve, reject){
    window.setTimeout(function(){
      if(true){
        resolve('We got the data back for you');
      } else {
        reject('We didn\t get your data, sorry')
      }
    }, Math.random() * 3000);
  });
}

makeAPIRequest().then(function(message){
  console.log(message);
})

function giveEmployeePhone(){
  return new Promise(function (resolve, reject){
    var generous = true;
    if (generous === true){
      resolve('Here is your phone');
    } else {
      reject('Sorry, we didn\t get you a phone');
    }
  });
}

// giveEmployeePhone().then(function(message){
//   console.log(message);
// })

// giveEmployeePhone()
//   .then(function(message){
//     console.log(message);
//   })
//   .then(function(message){
//     console.log(message);
//   })

function getAllUsers(){
  var brothers = ['Groucho', 'Harpo', 'Chico'];
  return new Promise(function(resolve, reject){
    if(Math.random() <= 0.5){
      setTimeout(function(){
        resolve(brothers);
      }, 1000)
    } else {
      reject('Sorry, the API request failed')
    }
  });
}

function displayUsers(users){
  document.body.innerHTML = users;
}

function handleError(error){
  document.body.innerHTML = error;
}

document.body.innerHTML = 'Loading...'

getAllUsers()
  .then(displayUsers)
  .catch(handleError);

navigator.getBattery().then(function(data){
  var message = `Your battery is at ${data.level * 100}%`;
  console.log(message);
})