
console.log("WHILE Loops!");
// The WHILE Loop has...
// A Start
// An End
// A Step

var count = 9;

while(count <= 10){
  console.log(count);
  count ++;
}

// Count from 5 to 1
// Print "Lift Off!"

var cycle = 3;

while(cycle > 0){
  console.log(cycle);
  cycle -= 1; // Syntactic sugar! This line can also be written as:
              // cycle -- OR cycle = cycle - 1
              // Jack prefers -= 1 because it's more flexible
              // i.e. you can change it easily to another number later
}
console.log("Lift Off!");

// Jack is not a fan of the WHILE loop because the step is separate and
// not guaranteed. You have to remember to add it. If you don't, you
// might infinite Loop. Therefore, a better option is...

console.log("FOR Loops!");

// Count from 0 to 5

for(var i = 0; i <= 5; i+= 1){
  console.log(i);
}

// Count from 10 to 4
// Print every 2 numbers

for(var number = 10; number >= 4; number -= 1){
  if(number %2 == 0){
    console.log(number);
  }
}

// BREAK stops Loops
// It's often used for searching information
// Count from 1 to 100
// If we see 8, stop the loop

for(var foo = 1; foo <= 10; foo += 1){
  if(foo == 8){
    break;
  }
  console.log(foo);
}
