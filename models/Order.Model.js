const {Schema, model} = require('mongoose');

const OrderSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref:  'User'
	},
	payment: {
		type: Schema.Types.ObjectId,
		ref:  'Payment'
	},
	total: Number,
	items: [Number]
});

const Order = model('Order', OrderSchema);

module.exports = Order;