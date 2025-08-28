    const products =[
        laptop = 35000,
        tablet = 15000,
        mobile = 20000,
    ]


function calculateElectronicBudget(products){
    
    let sum = 0;
    for (const product of products){
        sum = product;
        sum = laptop + tablet + mobile;
    }

    return sum;
}
const totolMoney = calculateElectronicBudget(products);
console.log("Total:", totolMoney);