import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './constants/actionTypes';

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

function onLoginFail(message) {
	return {
		type: LOGIN_FAIL,
		isRunning: false,
		isAuthenticated: false,
		message
	}
}

export function login(credentials) {
	console.log("Login request...");
	let creds = credentials.credentials;

	console.log("Credentials: ");
	console.log(creds);

	var request = {
		method: 'POST',
		headers: {  },
		body: JSON.stringify({Email: creds.email, Password: creds.password})
	};

	console.log("Request: ");
	console.log(request);

	return dispatch => {
		console.log("Dispatching login request handler");

		dispatch(onLoginRequest(creds));

		return fetch('http://localhost:8077/login', request)
			.then(response =>
				response.text().then(user => ({user, response})))
			.then(({user, response}) => {
				const body = JSON.parse(user);
				console.log("User response value");
				console.log(user);
				console.log("Parsed response");
				console.log(body);
				console.log("Response value");
				console.log(response);

				if (!response.ok) {
					console.log("Response NOT OK: " + user);
					dispatch(onLoginFail(user));
					return Promise.reject(user);
				} else {
					localStorage.setItem('token', body.Token);
					localStorage.setItem('email', body.Email);

					dispatch(onLoginSuccess(user));
				}
			}).catch(err => console.log("Error on login: ", err))
	}
}