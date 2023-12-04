const {Schema, model} = require('mongoose');

const CartSchema = new Schema({

});

const Cart = model("Cart", CartSchema);

module.exports = Cart;