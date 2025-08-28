const heights2 = [167, 190, 120, 165, 137];

function lowestNumber (numbers){
    let low = numbers[0];
    for(const number of numbers){
        if(number < low ){
            low = number;
        }
    }
    return low;
}
const result = lowestNumber(heights2);
console.log(result);