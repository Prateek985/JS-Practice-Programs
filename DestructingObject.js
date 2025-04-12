const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  StarterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.StarterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22.30",
  address: "Via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
//console.log(restaurantName, hours, tags);

const { menu = [], StarteMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating varibles
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
