const jisan = 156;
const shakib = 89;
const tamin = 79;
if (jisan > shakib && jisan > tamin){
    console.log('Jisan is the ultimate boss');

}
else if( shakib > tamin && shakib > jisan){
    console.log('Shakib is always king');
}
else{
    console.log('Tamin  is small hero');
}


// function task

function  maxOfThree ( num1, num2, num3){
    if (num1> num2 && num1 > num3){
        return num1;
    }
    else if( num2 > num3 && num2 > num1){
        return num2;
    }
    else{
        return num3;
    }

}
const three = maxOfThree(45,67,140);
console.log('The max number is:',three);


const max = Math.max(23,56,1,78,33);
console.log('Max is using Math.max:', max);
