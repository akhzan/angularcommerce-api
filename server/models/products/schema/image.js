import mongoose from 'mongoose';

const ProductImageSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	sequence: {
		type: Number,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

export default ProductImageSchema;
