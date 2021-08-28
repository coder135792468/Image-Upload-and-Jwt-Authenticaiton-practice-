const API_KEY = '50eaa2fcc52f4e9603f728c3eccebe23';
const endpoints = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

let data;
window.onload = () => {
	const input = document.getElementById('uploadFile');
	const preview = document.getElementById('preview');
	input.addEventListener('change', async (e) => {
		data = e.target.files[0];
		const url = new FileReader();

		url.readAsDataURL(data);
		url.addEventListener('load', () => {
			preview.innerHTML = `<img src=${url.result} alt="Couldn't Load"/>`;
		});
		console.log(url);
	});

	const button = document.getElementById('upload');
	button.addEventListener('click', async () => {
		const formData = new FormData();
		formData.append('image', data);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const image = await axios.post(endpoints, formData, config);

		console.log(image.data.data.display_url);
	});
};
