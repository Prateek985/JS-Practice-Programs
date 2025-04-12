// const billAmount = 275;
// const tip = 250;
// const tipTotal = tip/100;



const billAmountValu = 275; billAmountValu >= 50 || billAmountValu <= 300 ?  tipDiscount = 15/100*2
: finalPaidValue = billAmountValue + tipDiscount; console.log(`The bill was ${billAmountValue}, the tip was ${tipDiscount}, and the total value ${finalPaidValue}`);

let billAmountValue = 275;
if(billAmountValue >= 50 || billAmountValue <= 300){
    const tipDiscount = 15/100*2;
    finalPaidValue = billAmountValue + tipDiscount;
    console.log(`The bill was ${billAmountValue}, the tip was ${tipDiscount}, and the total value ${finalPaidValue}`);
}else if(billAmountValue >= 300 || billAmountValue <= 500){
    const tipDiscount = 20/100*2;
    finalPaidValue = billAmountValue + tipDiscount;
    console.log(`The bill was ${billAmountValue}, the tip was ${tipDiscount}, and the total value ${finalPaidValue}`);
}else if(billAmountValue <= 10 || billAmountValue <= 0) {
    console.log(`The bill was ${billAmountValue}, Please Enter the correct Bill Amount`);
}

