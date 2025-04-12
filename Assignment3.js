let Dolphins,Koalas;
const DolphinsAvg = (96 + 108 + 89) / 3;//97.6
const KoalasAvg = (88 + 91 + 110) / 3;// 
console.log(DolphinsAvg, KoalasAvg);
if(DolphinsAvg > KoalasAvg){
    console.log('Dolphins wins Trophy');
}else if(DolphinsAvg < KoalasAvg){
    console.log('Koalas wins Trophy');
}else if(DolphinsAvg === KoalasAvg){
    console.log('Both wins The Trophy');
}else{
    console.log('no other person wins the Trophy');
}

// Function example needs to be covered
// Arrow function 
const calcAverag = (a, b, c) => a + b + c / 3 ;


const scoreDolphins = calcAverag(44, 23, 71);
const scoreKoalas = calcAverag(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins wins ${avgDolphins} Vs ${avgKoalas}`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Dolphins wins ${avgKoalas} Vs ${avgDolphins}`);
    }else{
        console.log('No team wins');
    }
} 

checkWinner(scoreDolphins, scoreKoalas);



