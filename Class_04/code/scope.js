var somethingGlobal = 'GLOBAL';

function createInnerScope () {
  var somethingLocal = 'LOCAL';
}

createInnerScope();

console.log(somethingLocal);
console.log(somethingGlobal);