const mobiles = [
    {brand: 'Samsung', price: 30000, camera: '48,mp', color: 'navy blue'},
    {brand: 'Xiaomi', price: 20000, camera: '48,mp', color: 'navy blue'},
    {brand: 'Techno', price: 16000, camera: '48,mp', color: 'navy blue'},
    {brand: 'iPhone', price: 130000, camera: '48,mp', color: 'navy blue'},
    {brand: 'Google', price: 40000, camera: '48,mp', color: 'navy blue'},
    {brand: 'Nokia', price: 35000, camera: '48,mp', color: 'navy blue'},
];

function getCheapestPhone (phones){
   let min = phones [0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log("Cheapest phone is:", cheap);


const phones = [
    {brand: 'Samsung', price: 50000, camera: '64mp', color: 'Sky blue' },
    {brand: 'Xiaomi', price: 40000, camera: '64mp', color: 'Sky blue' },
    {brand: 'iPhone', price: 150000, camera: '64mp', color: 'Sky blue' },
    {brand: 'Vivo', price: 30000, camera: '64mp', color: 'Sky blue' },
    {brand: 'Motorola', price: 35000, camera: '64mp', color: 'Sky blue' },
    
];

function getMobilePrice (phones){
    let max = phones [0];
    for(const phone of phones){
        if (phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
const value = getMobilePrice (phones);
console.log('---------------------------------');
console.log('The height price of the phone is:', value);