import { LOGIN_REQUEST, GAME_INFO_REQUEST, LOGIN_SUCCESS, GAME_INFO_SUCCESS, LOGIN_FAIL, GAME_INFO_FAIL } from './constants/actionTypes';

function onLoginRequest(credentials) {
	return {
		type: LOGIN_REQUEST,
		isRunning: true,
		isAuthenticated: false,
		credentials
	}
};

function onGameRequest(credentials) {
	return {
		type: GAME_INFO_REQUEST,
		isRunning: true,
		isAuthenticated: true,
		credentials
	}
}

function onGameInfoRequest(id) {
	return {
		type: GAME_INFO_REQUEST,
		isRunning: true,
		isAuthenticated: true,
		id
	}
}

function onLoginSuccess(user) {
	return {
		type: LOGIN_SUCCESS,
		isRunning: false,
		isAuthenticated: true,
		token: user.token
	}
}

function onGameSuccess(game) {
	return {
		type: GAME_INFO_SUCCESS,
		isRunning: false,
		isAuthenticated: true,
		game
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

function onGameFail(message) {
	return {
		type: GAME_INFO_FAIL,
		isRunning: false,
		isAuthenticated: true,
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

					dispatch(onLoginSuccess(body));
				}
			}).catch(err => console.log("Error on login: ", err))
	}
};

export function getGameFeed(creds) {
	console.log("Requesting feed...");

	let endpoint = 'http://localhost:8077/games';
	let request = {
		method : 'GET',
		headers : { },
		body : { }
	};

	console.log("Request:");
	console.log(request);

	return dispatch => {
		console.log("Dispatching request for game feed");

		dispatch(onGameRequest(creds));
		return fetch(endpoint, request)
			.then(response => 
				response.text().then(game => ({game, response})))
			.then(({game, response}) => {
				const body = JSON.parse(game);
				console.log("Game response value");
				console.log(game);
				console.log("Parsed response");
				console.log(body);
				console.log("Response value");
				console.log(response);

				if (!response.ok) {
					console.log("Response NOT OK");
					dispatch(onGameFail(game));
					return Promise.reject(game);
				} else {
					dispatch(onGameSuccess(body));
				}
			}).catch(err => console.log("Error on game feed request: ", err))
	}
};

export function getGame(id) {

	console.log("Game ID: ");
	console.log(id);

	let endpoint = 'http://localhost:8077/games/gameId?:gameId=' + id;

	var request = {
		method: 'GET',
		headers: {  },
		body: {  }
	};

	console.log("URL: ");
	console.log(endpoint);

	return dispatch => {
		console.log("Dispatching game request handler");

		dispatch(onGameInfoRequest(id));

		return fetch(endpoint, request)
			.then(response =>
				response.text().then(game => ({game, response})))
			.then(({game, response}) => {
				const body = JSON.parse(game);
				console.log("Game response value");
				console.log(game);
				console.log("Parsed response");
				console.log(body);
				console.log("Response value");
				console.log(response);

				if (!response.ok) {
					console.log("Response NOT OK: " + game);
					dispatch(onGameFail(game));
					return Promise.reject(game);
				} else {
					dispatch(onGameSuccess(game));
				}
			}).catch(err => console.log("Error on game details request: ", err))
	}
}