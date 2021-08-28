import CryptoJS from 'crypto-js';

let posts = [
	{
		name: 'Coder',
		message:
			'U2FsdGVkX1+X56tbkwzm8Ou/QCmOfrMDIAXZ1ePe38NE8bKkcH/xKh0PT66eNXWRxP4mcKJ1uQ4R17ENyajSmqzDdZHsATPSIYt7+LBu5+g=',
		avatar: 'image/monkey.png',
	},
	{
		name: 'Rose',
		message:
			'U2FsdGVkX18ojtI0QhZjoRzXctW6mlXubmojwg2VPNmZugD/OS+atcNYOltI4JwXoACz2oURgCOrVuaep7aEMQ==',
		avatar: 'image/angel.png',
	},
];

const getPosts = (req, res) => {
	let post = posts
		.filter((post) => post.name.toLowerCase() === req.user.name.toLowerCase())
		.map((post) => {
			return {
				...post,
				message: CryptoJS.AES.decrypt(
					post.message,
					process.env.MESSAGE_SECRET_KEY
				).toString(CryptoJS.enc.Utf8),
			};
		});

	res.json(post);
};

const addPosts = (req, res) => {
	const { message, avatar } = req.body;

	const myMessage = CryptoJS.AES.encrypt(
		message,
		process.env.MESSAGE_SECRET_KEY
	).toString();

	posts = [
		...posts,
		{
			name: req.user.name,
			message: myMessage,
			avatar,
		},
	];

	res.json(posts);
};

const getAllPosts = (req, res) => {
	res.json(
		posts.map((post) => {
			return {
				...post,
				message: CryptoJS.AES.decrypt(
					post.message,
					process.env.MESSAGE_SECRET_KEY
				).toString(CryptoJS.enc.Utf8),
			};
		})
	);
};

export { getPosts, addPosts, getAllPosts };
