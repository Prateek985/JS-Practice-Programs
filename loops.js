// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep}!`);
// }

const jonas = [
  "Jonas",
  "Schmedtman",
  1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// console.log('Example For Continue Statement');
// for(let i = 0; i < jonas.length; i++){
//  if(typeof jonas[i] !== 'string' ) continue
//     console.log(jonas[i]);
// }
// console.log('Example For Break Statement');
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number' ) break
//        console.log(jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`--------- Starting exercise ${exercise}`);

//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weight repetition ${rep} `);
//     }
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//      dice = Math.trunc(Math.random() * 6) + 1;
//    if(dice === 6){
//     console.log('Loop is going to end now');
//    }
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for(let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }

const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips, totals);
