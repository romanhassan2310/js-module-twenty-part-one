/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const BedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + BedTotalWood;

    return totalWood;
}

const wood = woodQuantity(1, 0, 1);
console.log('Wood needed :', wood + ' cft.');



function getPrice ( shirtPrice, pantPrice, shoePrice){
    const perShirtPrice = shirtPrice * 500;
    const perPantPrice = pantPrice * 300;
    const perShoePrice = shoePrice * 900;

    totalPrice = perShirtPrice + perPantPrice + perShoePrice;

    return totalPrice;
}
const price = getPrice (4, 3, 1 );
console.log("The price is:",price + ' TK.');