const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  StarteMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (startIndex, mainIndex) {
    return [this.StarteMenu[startIndex], this.mainMenu[mainIndex]];
  },
};

// USE any data type, return any data type short-Circuting
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
//console.log(undefined || 0 || "" || 23 || "Hello" || null);

restaurant.numGuest = 23;
const guest2 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest2);

const guest3 = restaurant.numGuest || 50;
console.log(guest3);

console.log("---------AND----------");

console.log(0 && "Jonas");
console.log(7 && 5);
console.log(false && 0);
console.log(undefined && null);
console.log("Hello" && 23 && null);

console.log("---------Nullish----------");
// Nullish: null and undefined (Not 0 or '');
const guestCorrect = restaurant.numGuest ?? 50;
console.log(guestCorrect);
