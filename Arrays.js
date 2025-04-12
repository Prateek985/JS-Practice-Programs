const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michel", "Steven", "Peter"];

//console.log(friends[0]);
//console.log(friends[2]);

//Length = This returns the entire length of an array.
//console.log(friends.length - 1);

//console.log(friends[friends.length - 1]);

friends[2] = "Jay";
// console.log(friends);
// console.log(friends.length - 1);

const firstname = "jay";
const jonas = [firstname, "schmedtnamea", 2037 - 1991, "teacher", friends];
//console.log(jonas);
//console.log(jonas.length);

// Array methods

const friend = ["Michel", "Steven", "Peter"];
//Push Method = This method adds the list of values to the end of the array.
//friend.push("jay");
//console.log(friend);

//Unshift method = This method adds comma-separated list of values to the front of the array.
//friend.unshift("john");
//console.log(friend);

//Remove elements

//Pop Method = remove the last element in the array
//friend.pop();
//console.log(friend);

//Shift = This method removes the first value of the array.
//friend.shift();
//console.log(friend);

//console.log(friend.indexOf('Steven'));
//console.log(friend.indexOf('Bob'));

//console.log(friend.includes('Steven'));
//console.log(friend.includes('Bob'));
//console.log(friend.includes(23));

//Splice = This method finds the specified position (pos) and removes n number of items from the array.
// Arguments are passed in here.
//friend.splice(1, 2);
//console.log(friend);

//Slice: This method creates a copy of an array with selected elements.
var joker = friend.slice(0, 3);
//console.log(joker);

// Indexof: This method returns the first element that matches the search parameter after the specified index position.
// Defaults to index 0.
//var result = joker.indexOf("john");
//console.log(result);

//Join: This method returns the items in an array as a comma separated string.
//The separator argument can be used to change the comma to something else.

//var arrayString = friend.join("-");
//console.log(arrayString);

//Reverse: Literally, it’s the same as the name implies. This method will reverse the array for you.
joker.reverse();
console.log(joker);
