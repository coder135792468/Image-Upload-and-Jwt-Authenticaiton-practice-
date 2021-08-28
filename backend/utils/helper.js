import jwt from 'jsonwebtoken';

const generateToken = (name) => {
	try {
		return jwt.sign({ name }, process.env.JWT_ACESS_TOKEN_SECRET);
	} catch (error) {
		console.log(error);
	}
};

export { generateToken };
