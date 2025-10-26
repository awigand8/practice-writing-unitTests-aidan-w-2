const cart = [];

function addItem(cart, item, quantity) {
    if (typeof quantity !== "number" || quantity < 0)
    throw new Error("Quantity must be positive");

    cart.push({ item, quantity });
}

function removeItem(cart, item) {
    const index = cart.findIndex(entry => entry.item === item);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function getTotalItems(cart) {
    return cart.reduce((total, entry) => total + entry.quantity, 0);
}
    
module.exports = {addItem, removeItem, getTotalItems};