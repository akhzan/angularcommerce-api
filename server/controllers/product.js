import Product from '../models/products/product';

function load(req, res, next, id) {
	Product.get(id).then((product) => {
		req.product = product;// eslint-disable-line no-param-reassign
		return next();
	}).error((e) => next(e));
}

function list(req, res, next) {
	const { limit = 50, skip = 0 } = req.query;
	Product.list({ limit, skip }).then((users) => res.json(users))
        .error((e) => next(e));
}

function create(req, res, next) {
	const product = new Product({
	brand: req.body.brand,
	name: req.body.name,
	categories: req.body.categories,
	colors: req.body.colors,
	images: req.body.images,
	price: req.body.price,
	stocks: req.body.stocks,
	discount: req.body.discount,
	createdAt: req.body.createdAt,
	createdBy: req.body.createdBy,
        deleted: req.body.deleted,
	});

	product.saveAsync()
        .then((savedProduct) => res.json(savedProduct))
        .error((e) => next(e));
}

export default { load, create, list };
