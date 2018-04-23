document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/37/8d/50/378d50cdb1a83f17079007ea41eb4cb3.jpg')"
var element = document.getElementById('cookie');
element.style.height = '60%';
element.style.left = '0px';
element.style.bottom = '5%';

var newLeft = 0;
var interval = setInterval(moveRight, 30);

function moveRight(){
  newLeft += 10;
  element.style.left = newLeft + 'px';
  var elementPosition = newLeft + parseFloat(getComputedStyle(element).width);
  if(elementPosition > window.innerWidth){
    clearInterval(interval);
    element.style.transform = 'scaleX(-1)';
    console.log('Turn around!!!');
    interval = setInterval(moveLeft, 30)
  };
}

function moveLeft(){
  newLeft -= 10;
  element.style.left = newLeft + 'px';
  if(element.style.left === '0px'){
    clearInterval(interval);
    element.style.transform = '';
    interval = setInterval(moveRight, 30);
    console.log('Run again, cookie!');
  }
}