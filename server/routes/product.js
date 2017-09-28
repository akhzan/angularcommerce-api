import express from 'express';
import productCtrl from '../controllers/product';

const router = express.Router();	// eslint-disable-line new-cap

router.route('/')
	.get(productCtrl.list)

	.post(productCtrl.create);

router.param('productId', productCtrl.load);

export default router;
