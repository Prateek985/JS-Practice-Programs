const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//create 1 player array for each team (varibles 'player 1' and 'player 2')
//the first player in any player array is the goal keeper and the other are field keeper. for Bayern Munich(team 1)
// create one varible ('gk') with the goalkeeper's name, and one array ('fieldplayers') with all the remaining 10 field
// player.

let Player1 = [
  "Neuer",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
  "Lewandowski",
];
let gk1 = Player1[0];
let fieldplayers1 = Player1.slice(1);
console.log("Goalkeeper:", gk1);
console.log("Field Players:", fieldplayers1);

let Player2 = [
  "Burki",
  "Schulz",
  "Hummels",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze",
];
let gk2 = Player2[0];
let fieldplayers2 = Player2.slice(1);
console.log("Goalkeeper:", gk2);
console.log("Field Players:", fieldplayers2);
