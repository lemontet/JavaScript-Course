
// Print every number from 0 to 10
for(var i = 0; i <= 10; i += 1){
  console.log(i);
}

// Print every number from 4 to -16
for(var i = 4; i > -17; i -= 1){
  console.log(i);
}

// Print every fifth number from 8 to 41
for(var i = 8; i <= 41; i += 5){
  console.log(i);
}

for(var i = 1; i <= 100; i += 1){
  console.log(i);
  if(i %3 == 0){
    console.log('Fizz');
  }
  if(i %5 == 0){
    console.log('Buzz');
  }
  if(i %15 == 0){
    console.log('Fizzbuzz!');
  }
}

/* The even/odd reporter
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd,
and report that to the screen (e.g. "2 is even").
*/

for(var i = 0; i <= 20; i += 1){
  if(i %2 == 0){
    console.log(i + ' is even');
  } else {
    console.log(i);
  }
}

/*
Multiplication Tables
Write a for loop that will iterate from 0 to 10.
For each iteration of the for loop, it will multiply the
number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every
multiplier from 1 to 10 (100 results total).
*/

for(var i = 0; i <= 10; i += 1){
  for(var a = 0; a <= 10; a += 1){
    var formula;
    formula = i * a;
    console.log(i + ' * ' + a + ' = ' + formula);
  }
}

/*
The Grade Assigner
Check the results of assignGrade function from the conditionals
exercise for every value from 60 to 100 - so your log should show
"For 89, you got a B. For 90, you got an A.", etc.
*/



/*
Golf
Using the condition you made before in the conditionals exercise,
log out the nickname of every score from 1 to 8 on a par 5 hole

Bonus: Use a nested for loop to run the same piece of code,
but with par changing from 3 to 5

// NOOO GOLF

*/

/*
The Rest
Make the rest of the programs you made in the conditional
exercises use loops in some way (if possible)
*/

/*
99 Bottles of Beer
Write a script that prints the lyrics to "99 Bottles of Beer on the Wall"
in the terminal. If you're unfamiliar with the song, you can find the lyrics here.

Make sure your program can handle both singular and plural cases
(i.e. both "100 bottles of beer" and "1 bottle of beer").
*/


