const rest1 = {
  name: "Capri",
  numGuest: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR Logical Operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// AND Logical Operator
rest1.owner = rest1.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";

//OR Assignment Operator
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

//AND Assignment Operator
rest1.numGuest &&= 10;
rest2.numGuest &&= 10;

//Nullish Assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2);
