const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the size of the array = "));
let arr = [];

for (let i = 0; i < n; i++) {
  let element = parseInt(prompt(`Enter element ${i + 1} = `));
  arr.push(element);
}

let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}
if (duplicates.length > 0) {
  console.log("Duplicate elements is = :", duplicates);
} else {
  console.log("No duplicates elements found");
}
