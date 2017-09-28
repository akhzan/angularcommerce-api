import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../../helpers/APIError';
import ProductImageSchema from './schema/image';
import ProductStockSchema from './schema/stock';

const ProductSchema = new mongoose.Schema({
	brand: {
		type: String
	},
	name: {
		type: String
    },
	categories: {
        type: [String]
    },
	colors: {
        type: [String]
    },
	images: {
        type: [ProductImageSchema]
    },
	price: {
        type: Number
    },
	stocks: [ProductStockSchema],
	discount: {
        type: Number,
        default: 0
    },
	createdAt: {
		type: Date,
		default: Date.now
	},
	createdBy: String,
	deleted: {
        type: Boolean,
        default: false
	}
});

ProductSchema.method({
});

ProductSchema.statics = {
	get(id) {
        return this.findById(id)
            .execAsync().then((product) => {
                if (product) {
                    return product;
                }
                const err = new APIError('No such product exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
	},
	list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .execAsync();
	}
};

export default mongoose.model('Product', ProductSchema);
