var price = 98;
function cost(qty){
    show();
    return price * qty;
}

function show(){
    price = 100;
    console.log(`
        Original price $${price}.
        Discount price $${price -2}.
    `);
}

module.exports = {
    cost
}