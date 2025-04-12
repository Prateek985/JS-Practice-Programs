const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  StarteMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 10,
      close: 21,
    },
    sat: {
      open: 11,
      close: 23,
    },
  },

  order: function (startIndex, mainIndex) {
    return [this.StarteMenu[startIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngridents, ...otherIngedrients) {
    console.log(mainIngridents);
    console.log(otherIngedrients);
  },
};

restaurant.orderPizza("mashroom", "onion", "olives", "spinach");

// Spread, because on right side of =(assignment operator)
const arr = [2, 3, ...[4, 5, 6]];

//Rest because on Left side of =(Assignment operator)
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);

const [Pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.StarteMenu,
];
// console.log(Pizza, Risotto, otherfood);

const { sat, ...Weekdays } = restaurant.openingHours;
console.log(sat, Weekdays);

const add = function (...numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 5, 8);
add(8, 7, 9, 5, 3, 6, 1, 5);
