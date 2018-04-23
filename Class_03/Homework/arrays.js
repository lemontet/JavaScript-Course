// https://gist.github.com/ga-wolf/4f200a907382aa53dc9e794d1ee18b3c

// Starting with an empty array called rainbowColors:



var rainbowColors = [];

// Add "orange" to the end of the array

rainbowColors.push('orange');

// Add "red" to the start of the array

rainbowColors.unshift('red');

// Add "yellow" to the end

rainbowColors.push('yellow');

// Add "green", "blue", "indigo", and "violet" to the end of the array using one method

rainbowColors.push('green', 'blue', 'indigo', 'violet');

// Log out the length of the array

console.log(rainbowColors.length);

// Log out the second item

console.log(rainbowColors[1]);

// Log out the last item (make this flexible/dynamic!)

console.log(rainbowColors[rainbowColors.length - 1]);

// Log out the index of the string "blue"

console.log(rainbowColors.indexOf('blue'));

// Bonus: Find out the difference between .slice and .splice

//Slice() returns a copy of a portion of an array into a new array object selected. The original array will not be modified. No argument will return a full copy of the the array. A single index number will return a copy of index values up to the index specified. Two indexes will return the value of the first index, and all index values up till one before the end index (i.e. the end index value is not included).

// This would print a copy of index values 2 to 4
console.log(rainbowColors.slice(2,5));

//Splice() adds/removes items to/from an array, and returns the removed item(s). It takes:
// 1. start: A starting index (i.e. where it should make the change)
// 2. (Optional) deleteCount, which is a number indicating how many items to remove (e.g. 3 = delete three, starting from start). If it's 0 or a negative number, that indicates no items should be removed, in which case you specify at least one new element as the third argument to add.
// 3. items: Elements to add to the array, from the start index onward. If you don't specify any elements, splice will only remove elements from the array

// This would delete every index item from 1 onward from the original array and return it printed on screen
//console.log(rainbowColors.splice(1));

// This would add more colours at index 2 and return an empty array:
console.log(rainbowColors.splice(2, 0, 'gold', 'pink'));

// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)

var twoColors = rainbowColors.slice(1,3)
console.log(twoColors);

// Starting with this array, remove the duplicates destructively using slice or splice (whichever one is appropriate)

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5]
nums.splice(3,3);
console.log(nums);

// Bonus: Work with arrays of arrays
// Starting with this array

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out"

console.log(arrOfArrs[0][0]);

// Print "third" by using a dynamic index

console.log(arrOfArrs[1][2]);

// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third

  for (var i = 0; i < arrOfArrs.length + 1; i+= 1) {
    console.log(arrOfArrs[1][i]);
  };

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
// */

var noodles = ['Ramen', 'Pho', 'Bun Cha', 'Dan Dan', 'Laksa'];

for (var i = 0; i < noodles.length; i+= 1) {
  console.log(`My #${i + 1} choice is ${noodles[i]}`);
}


var body = document.querySelector('body');
body.innerHTML = rainbowColors;
