const {Schema, model} = require('mongoose');

const PaymentSchema = new Schema({
	status: {type: String, enum: ['Approved', 'On Going', 'Denied']},
	amount: Number,
	method: String, 
	order: {
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}
});

const Payment = model('Payment', PaymentSchema);

module.exports = Payment;