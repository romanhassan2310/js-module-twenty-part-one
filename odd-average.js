/**
 * function takes an array as parameter
 * give me the average of the odd numbers in  the array
 */

/**
 * 1.put odd numbers in an array.
 */



function oddAverage(numbers){
    const odds =[];
    for (const number of numbers){
        if (number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }  
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}
const numbers=[13, 58, 65, 27, 22, 7, 105];
const avg = oddAverage(numbers);
console.log('Average of the odd numbers is:',avg);
console.log('--------------------------');



function isEvenNumber (numbers1){
    const evens =[];
    for(const number of numbers1){
        if (number % 2 === 0){
            evens.push(number);
        }
    }
    let sum = 0;
    for (const number of evens){
        sum = sum + number;
    }
    const count = evens.length;
    console.log('Sum of the number is:',sum +' ,' ,'Count of the number is:' , count);
    const avg1 = sum / count;
    return avg1;

}
const numbers1 =[23, 11, 22, 56, 78, 48];
const avg1 =isEvenNumber(numbers1)
console.log("Average of the even number is:", avg1);



