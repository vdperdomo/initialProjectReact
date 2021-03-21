import axios from 'axios';

const headers = {};

const instance = axios.create({
	baseURL: process.env.REACT_APP_API,
	headers
});


instance.interceptors.request.use(
	async config => {
		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

/* instance.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		return Promise.reject(error);
	}
); */

export default instance;
