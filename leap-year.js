/**
 * simple logic:
 * year will be a leap year if the year is divisible by 4.
 */

function isLeapYear ( year){
    if(year %4 ===0){
        return true;
    }
    else{
        return false;
    }
}
const isLeapYear1 =isLeapYear(2052);
console.log(isLeapYear1);

/**
 * 1. those year  that is not divisible by 100 & if the year is divisible by 4:
      then it will be a leap year.
 * 2. if the year is divisible by 400, then it is a leap year.
 * 3. else it is not a leap year.    
 */

      function isLeapYear2 (year){
        if ( year % 100 !== 0 && year % 4 === 0){
            return true;
        }
       else if (year % 100 ===0 && year % 400 === 0){
            return true;
        }
        else{
            return false;
        }
      }
      const islipi = isLeapYear2(2100);
      const islipi1 = isLeapYear2(2400);
      const islipi2 = isLeapYear2(1900);
      const islipi3 = isLeapYear2(2052);
      console.log('--------------------');
      console.log(islipi, islipi1, islipi2, islipi3);