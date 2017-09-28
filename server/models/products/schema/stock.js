import mongoose from 'mongoose';

const ProductStockSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	size: {
		type: Number,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	}
});

export default ProductStockSchema;
