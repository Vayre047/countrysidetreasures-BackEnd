const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
	title: String,
	description: String,
	reviews: {
		type: Schema.Types.ObjectId,
		ref:  'User'
	}
});

const Review = model('Review', ReviewSchema);
module.exports = Review;