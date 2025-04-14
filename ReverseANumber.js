let prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter the num = "));
console.log("The num is = ", num);
let rev = 0;
while (num != 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("The Reversed no is = ", rev);
