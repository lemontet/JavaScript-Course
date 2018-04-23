var horsePre = document.querySelector('pre');
var horseLegs = '	    | | | |             || |  \n'
var windowHeight = window.innerHeight;

function moreLegsPlease () {
    horsePre.innerText += horseLegs;
    console.log("CLICK!");
}

// Lazy leg generation
if(windowHeight < 1200){
  for (var i = 0; i < 20; i += 1) {
    moreLegsPlease();
  }
}

window.addEventListener('scroll', moreLegsPlease);

// TODO: Detect window height and loop moreLegsPlease dynamically
// TODO: Fix CSS
// TODO: Add more horsie accessories