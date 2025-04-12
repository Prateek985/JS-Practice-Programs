function cutpieces(fruit){
    return fruit * 4;
}


function fruitProcessor(apples, oranges){

    const applepiece =  cutpieces(apples);
    const Orangepiece =  cutpieces(oranges);
  console.log(apple, oranges);
  const juice = `Juice with ${applepiece} apples and ${Orangepiece} oranges,`;
  return juice;
}

console.log(fruitProcessor(5,3));

// const applejuice = fruitProcessor(5,8);
// console.log(applejuice);

// const appleOrangejuice = fruitProcessor(2,9);
// console.log(appleOrangejuice);

// // function declaration
// function calcAge1(birthyear){
//     return 2037 - birthyear;
// }

// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function calcAge1(birthyear){
//     return 2037 - birthyear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);


// //Arrow functions
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthyear, firstname) => {
//     const age3 = 2037 - birthyear;
//     const retirment = 65 - age3;
//     return `${firstname} retires in ${retirment} years`;
// }

// console.log(yearUntilRetirement(1991, jonas));