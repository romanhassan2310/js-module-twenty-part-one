function add(num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}


function calculator(a, b, operation){
    if(operation ==='add'){
        const result = add(a, b);
        return result;
    }
    else if ( operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide'){
        const result = divide (a, b);
        return result;
    }
    else{
        return "Only 'add', 'subtract', 'multiple', 'divide' Operation is allowed. "
    }
}
const result = calculator(7,5, 'add');
console.log('The result is:', result);
const result1 = calculator(7,5, 'subtract');
console.log('The result is:', result1);
const result2 = calculator(7,5, 'multiply');
console.log('The result is:', result2);
const result3 = calculator(7,5, 'divide');
console.log('The result is:', result3);