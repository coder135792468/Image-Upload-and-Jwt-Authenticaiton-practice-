import jwt from 'jsonwebtoken';

const protect = async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.JWT_ACESS_TOKEN_SECRET);
			req.user = decoded;

			next();
		} catch (error) {
			console.log(`Error: ${error}`.red.underline.bold);
		}
	}
};

export { protect };
