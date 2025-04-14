let prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the num = ")); // Convert input to number
console.log("The num is = ", num);

let rev = 0;

while (num !== 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10); // Use Math.floor to get integer part
}

console.log("The Reversed no is = ", rev);
