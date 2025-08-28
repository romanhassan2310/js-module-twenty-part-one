/**
 * upto 100 : --> 100 tk.
 * more than 101-200 : --> 90 tk.
 * more than 201 : --> 70 tk.
 */

function discountOffer (quantity){
    if(quantity <=100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <=200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}

const totalCost = discountOffer (5000);
console.log("The total now is:", totalCost);