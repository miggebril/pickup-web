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

function onLoginFail(response) {
	return {
		type: LOGIN_FAIL,
		isRunning: false,
		isAuthenticated: false,
		response
	}
}

export function login(credentials) {

	let request = {
		method: 'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: `Email=${credentials.email}&Password=${credentials.password}`
	}

	return dispatch => {

		dispatch(onLoginRequest);

		return fetch('http://localhost:8077/login', request)
			.then(response =>
				response.json().then(user => ({user, response}))
					).then(({user, response}) => {
						if (!response.ok) {
							dispatch(onLoginFail(user.message));
							return Promise.reject(user)
						} else {
							localStorage.setItem('token', user.token);
							localStorage.setItem('userId', user.id);

							dispatch(onLoginSuccess(user));
						}
					}).catch(err => console.log("Error on login action: ", err))
	}
}