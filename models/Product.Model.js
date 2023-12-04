const {Schema, model} = require('mongoose');

const ProductSchema = ({
    name: String,
    description: String,
    image: String,
    price: Number,
    category: {
        type: Schema.Types.ObjectId,
        ref: "category"
    }
});

const Product = model('Product', ProductSchema);

module.exports = Product;