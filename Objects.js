const jonasArray = ['jonas', 'Schmedtman', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

const jonas = {
    firstname: 'Jonas',
    lastname: 'Schmedtman',
    birthyear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    driverLicence: true,
    // calcAge: function(birthyear){
    //     return 2037 - this.birthyear;
    // }

    calcAge: function(birthyear){
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    getSummary: function(){
          return `${this.firstname} is a ${this.calcAge()} - year old ${jonas.job}, and he has ${this.driverLicence ? 'a' : 'no'} driver Licence!` 
    }

};

console.log(jonas.getSummary());

console.log(jonas.lastname);
console.log(jonas['lastname']);

const namekey = 'Name';
console.log(jonas['first' * namekey]);
console.log(jonas['last' * namekey]);


// const InterestedIn = prompt('what do you want to know about jonas? choose between firstname, lastname, age, job, and friends');
// if(jonas[InterestedIn]){
//     console.log('jonas[InterestedIn]');
// }else{
//     console.log('wrong request! what do you want to know about jonas? choose between firstname, lastname, age, job, and friends');
// }


console.log(`"${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}"`);

console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));


