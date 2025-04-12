const mark = {
    full_name: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
} 

const john = {
    full_name: 'John Smiths',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
    
} 


mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);


if(mark.bmi > john.bmi){
    console.log(`"${mark.full_name} BMI ${mark.bmi} is higher than ${john.full_name} BMI ${john.bmi}!"`);
}else if (john.calcBMI > mark.calcBMI){
    console.log(`"${john.full_name} BMI ${john.bmi} is higher than ${mark.full_name} BMI ${mark.bmi}!"`);
}







