import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const ProductSchema = new mongoose.Schema({
	brand: {
		type: String,
		required: true
    },
    name: {
		type: String,
		required: true
    },
    imageUrls: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
	mobileNumber: {
		type: String,
		required: true,
		match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
	},
	createdAt: {
		type: Date,
		default: Date.now
    },
    createdBy: {
		type: String
    },
    deleted: {
        type: Boolean,
        default: false
	}
});

ProductSchema.method({
});

ProductSchema.statics = {};

export default mongoose.model('Product', ProductSchema);