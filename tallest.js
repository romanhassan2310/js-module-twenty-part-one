const heights = [65, 66, 68, 72, 70, 160];

function getMax (numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
           max = number;
        }
    // console.log(number);
    }
    return max;
}

const max = getMax(heights);
console.log('The Max Value is:', max);


// homework: min number.


const minNumber=[145, 76, 56, 87, 330, 150];


function minGetValue (values){
    let min = values[0];
    for(const num of values){
        if(min > num ){
            min = num;
        }
    }
    return min;
}
const min = minGetValue(minNumber);
console.log('The min value is :',min);
