const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the size of the array = "));
let arr = [];

for (let i = 0; i < n; i++) {
  let element = parseInt(prompt(`Enter element ${i + 1} = `));
  arr.push(element);
}
console.log("The array is = ", arr);

let reversearr = [...arr].reverse();
console.log("The Reverse array is = ", reversearr);
