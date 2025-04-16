const prompt = require("prompt-sync")();
let str = prompt("Enter the String = ");
let words = str.split(" ");
let reverseString = "";

for (let s of words) {
  let reverseword = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverseword = reverseword + s.charAt(i);
  }
  reverseString = reverseString + reverseword + " ";
}
console.log("The Reversed String word is = ", reverseString);
