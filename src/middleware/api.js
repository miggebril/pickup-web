
const BASE_URL = 'http://localhost:8007/'

function callApi(endpoint, isAuthenticated) {

	let token = localStorage.getItem('token') || null;
	let request = {}

	if (isAuthenticated) {
		if (token) {
			request = {
				headers: { 'Authorization' : `Bearer ${token}` }
			}
		} else {
			throw new Error("No token found");
		}
	}

	return fetch(BASE_URL + endpoint, request)
		.then(response => response.json().then(result => ({ result, response})))
			.then(({ result, response }) => {
				if (!response.ok) {
					return Promise.reject(result);
				} else {
					return result;
				}
			}).catch(err => console.log(err));
};

export const CALL_API = Symbol('Call API');

export default store => next => action => {
	const apiHandler = action[CALL_API];

	if (typeof apiHandler === 'undefined') {
		return next(action);
	}

	let { endpoint, types, authenticated } = apiHandler;

	const [ handlerType, successType, errorType ] = types;

	return callApi(endpoint, authenticated).then(
		response =>
			next({response,
				  authenticated,
				  handlerType,
				  type: successType}),
		error => next({
			error: error.message || 'Error occurred.',
			type: errorType
		})
	);
}