const roman = 56;
const hassan = 76;
if (roman > hassan){
    console.log('Roman will get the strawberry');
}
else{
    console.log("Hassan will eat the strawberry");
}

// inside a function.

function getMax (num1, num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(96,79);
const max2 = getMax (56, 99);
const ultimateMax = getMax(max1, max2);

console.log('max of two is:',ultimateMax);