
// 5 truly & falsy values: 0, '', undefined, null, NaN;

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(0));

const money = 100;
if(money){
    console.log("Don't spend it all : )");
}else{
    console.log('you should get a job!');
}

let height = 0;
if(height){
    console.log('YAY! Height is DEFINED');
}else{
    console.log('Height is UNDEFINED');
}