// Protect thine eyes!
document.body.style.backgroundColor = 'black';

function Plant(name, growthRate) {
  // this = {};
  this.isAlive = true;
  this.name = name;
  this.growthRate = growthRate;
  this.grow = function(){
    var msg = `This ${this.name} is growing ${this.growthRate}`;
    console.log('This plant is growing!');
  }
  // return this;
}

var plantOne = new Plant('Hoya Carnosa', 'Slowly');
var plantTwo = new Plant('Epipremnum Aureum', 'Quickly');

// Implicit return means it's return automatically

