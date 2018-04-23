"Hello";

console.log('Single quotes');
console.log("Jane's bag in double quotes");
console.log('Jane\'s bag single quotes escaped using our good friend, Mr. \\ string literal');
//Concatenation - CMD + /
console.log("full " + "name");

//Properties
console.log("Hello Spider is " + "Hello Spider".length + " characters");

//Methods
console.log("hello to upper case: " + "hello".toUpperCase());

//Predicate methods -- returns true or false
console.log("Predicate method -- hello startsWith h: " + "hello".startsWith("h"));
console.log("Hello".endsWith("o"));
console.log("Hello includes an l: " + "hello".includes("l"));

//Split method returns an array of the string, split by the argument given
console.log("I am a string".split(" "));

//Accessing Information -- adding an index number to access the value of a certain character
console.log("hello"[0]);
//Last character
console.log("hello"["hello".length - 1]);
console.log("Hello".charAt(2));
