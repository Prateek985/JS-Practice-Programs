const bills = new Array(53, 120, 295);

const calcTips = function(bill)
{
    return bill >= 50 && bill <= 300 ? bill * 0.15 :  bill * 0.20;        
}

const tips = [calcTips(bills[0]),calcTips(bills[1]),calcTips(bills[2])];

console.log(bills,tips);
