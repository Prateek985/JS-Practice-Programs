const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);

const newarr = [1, 2, ...arr];
console.log(newarr);

console.log(...newarr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array
const menu = [...restaurant.StarteMenu, ...restaurant.mainMenu];
console.log(menu);
