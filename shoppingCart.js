const products = [
    {name: 'shirt', price: 1000, quantity: 2},
    {name: 'shampoo', price: 180, quantity: 3},
    {name: 'pant', price: 1200, quantity: 5},
    {name: 'bel', price: 500, quantity: 1},
];

function getShoppingCartTotal (products){
    let sum = 0;
    for ( const product of products){
        const thisProductCost = product.price *product.quantity;
        sum = sum + thisProductCost;
    }
    return sum;
}
const total = getShoppingCartTotal(products);
console.log("Total shopping cost is:", total +' TK.');
