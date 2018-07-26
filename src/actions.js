import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './constants/actionTypes';
import { CALL_API } from './middleware/api';

function onLoginRequest(credentials) {
	return {
		type: LOGIN_REQUEST,
		isRunning: true,
		isAuthenticated: false,
		credentials
	}
};

function onLoginSuccess(user) {
	return {
		type: LOGIN_SUCCESS,
		isRunning: false,
		isAuthenticated: true,
		token: user.token
	}
}

function onLoginFail(response) {
	return {
		type: LOGIN_FAIL,
		isRunning: false,
		isAuthenticated: false,
		response
	}
}

export function login(credentials) {
	console.log("Login request...");
	let creds = credentials.credentials;

	let body = {
		"Email" : creds.email,
		"Password" : creds.password
	};

	console.log("Credentials: ");
	console.log(creds);

	var request = {
		method: 'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: JSON.stringify(body)
	};

	console.log("Request: ");
	console.log(request);

	return dispatch => {
		console.log("Dispatching login request handler");

		dispatch(onLoginRequest(creds));

		return fetch('http://localhost:8077/login', request)
			.then(response =>
				response.json().then(user => ({user, response})))
			.then(({user, response}) => {
				console.log("User response value");
				console.log(user);
				console.log("Response value");
				console.log(response);

				if (!response.ok) {
					dispatch(onLoginFail(user.message));
					return Promise.reject(user);
				} else {
					localStorage.setItem('token', user.token);
					localStorage.setItem('userId', user.id);

					dispatch(onLoginSuccess(user));
				}
			}).catch(err => console.log("Error on login action: ", err))
	}
}