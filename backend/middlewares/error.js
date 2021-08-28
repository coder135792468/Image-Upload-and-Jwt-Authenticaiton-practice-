const notFound = (req, res, next) => {
	const error = new Error(`Not Found -${req.originUrl}`);
	res.status(404);
	next(error);
};
const errorHandler = (err, req, res, next) => {
	res.status(res.statusCode === 200 ? 500 : res.statusCode);

	res.json({
		message: err.message,
	});
};

export { notFound, errorHandler };