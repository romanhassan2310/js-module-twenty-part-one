 /**
  * first 100: ---> 100 tk
  * second 101 to 200: ---> 90 tk.
  * third above 200: ---> 70 tk.
  */

 function layeredDiscountOffer(quantity){
    const first100Price = 100;
    const  second100Price = 90;
    const thirdAbovePrice = 70;

    if(quantity <= 100){
       const total = quantity * first100Price;
       return total;
    }
    else if (quantity <=200){
        const first100Price = 100 * first100Price;
        const remaining = quantity - 100;
        const remainingTotal = remaining * second100Price;
        const total = remainingTotal + first100Price;
        return total;
    }
    else{
        const firstTotal = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remaining = quantity - 200;
        const remainingTotal = remaining * thirdAbovePrice;
        const total = firstTotal + second100Total + remainingTotal;
        return total;
    }
 }
 const layer = layeredDiscountOffer(900);
 console.log('Totol layered Discount Offer price is :', layer +' TK.');