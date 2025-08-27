/**
 * array has some duplicate elements
 * []
 * 
 */

const biryaniKhor = ['roman', 'hassan', 'abul', 'babul', 
    'bablu', 'kablu', 'bablu', 'hassan', 'ablu'];

const numbers = [1, 3, 2, 1, 4, 3, 5, 6, 5, 4, 2];

function noDuplicate (array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
            
        }
        
    }

    return unique;
}
const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
const uniqueArray1 = noDuplicate(numbers);
console.log(uniqueArray1);