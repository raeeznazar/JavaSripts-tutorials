let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

//Use an array method to remove the last string of the array secretMessage.
const remove = secretMessage.pop();

const lengthArr = secretMessage.length;
console.log(lengthArr);

//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
const add = secretMessage.push("to", "program");

console.log(secretMessage);

//Change the word easily to the word right by accessing the index and replacing it.
secretMessage[7] = "right";

console.log(secretMessage);
//Use an array method to remove the first string of the array.
const removefirst = secretMessage.shift();

console.log(removefirst);

//Use an array method to add the string Programming to the beginning of the array.
const Addfirst = secretMessage.unshift("Programming");

console.log(secretMessage);

//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,

const splice = secretMessage.splice(6, 5, "know,");

console.log(secretMessage);

//On one line, use console.log() and .join() to print the secret message as a sentence.

console.log(secretMessage.join(" "));
