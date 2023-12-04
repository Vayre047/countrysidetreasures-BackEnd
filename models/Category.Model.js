const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    name: String,
    description: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

const Category = model("Category", CategorySchema);
module.exports = Category;