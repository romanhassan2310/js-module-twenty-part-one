const products = [
    {name: 'shirt', price: 1000},
    {name: 'shampoo', price: 180},
    {name: 'pant', price: 1200},
    {name: 'bel', price: 500},
];

function getShoppingPrices (products){
    let sum = 0;
    for(const product of products){
        sum = sum + product. price;
    }
    return sum;
}
const total = getShoppingPrices(products);
console.log('The total products of price is:', total + ' TK.');