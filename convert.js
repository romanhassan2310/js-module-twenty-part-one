//   12 inch 1 feet .

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}


// 65
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch %  12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;

}


  
const romanHeight=inchToFeet(65);
// console.log(romanHeight.toFixed(2));
const romanHeight2 = inchToFeet2(64);
console.log(romanHeight2);