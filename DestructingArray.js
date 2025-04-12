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

const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
// console.log(arr);

let [first, , second] = restaurant.categories;
console.log(first, second);

//Switching Varibles
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested destructing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

//Default Destructing
const [p = 1, q = 1, r = 1] = [8, 7];
console.log(p, q, r);
