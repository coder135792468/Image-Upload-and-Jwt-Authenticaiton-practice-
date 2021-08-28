import { generateToken } from '../utils/helper.js';

const login = (req, res) => {
	const { name } = req.body;
	res.json({
		token: generateToken(name.toString()),
	});
};

export { login };
