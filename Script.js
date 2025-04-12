// let country = 'India';
// let continent = 'Asia';
// let population = '1.5';

// console.log(country);
// console.log(continent);
// console.log(population);

// let flag = true;
// console.log(typeof true);
// console.log(typeof flag);
// console.log(typeof 23);
// console.log(typeof 'prateek');

// varible and constant

//if we declare the age varible with let then we can change the value of the varible   
// let age= 1991;
// age = 1995;

// //if we declare the birthyear varible with const then we can not able to change the value of the varible
// const birthyear = 1994;
// birthyear = 1748;

const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMarks / (heightMarks * heightMarks);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
if(BMIMark >= BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}else{
    console.log(`John's BMI ${BMIJohn} is higher than John's ${BMIMark}!`);
}






