import { GAME_INFO_REQUEST, GAME_INFO_SUCCESS, GAME_INFO_FAIL  } from '../constants/actionTypes';

export default function games(state = {
		isRunning: false,
		isAuthenticated: (localStorage.getItem('token') ? true : false),
		currentUser: {
			token: (localStorage.getItem('token') ? localStorage.getItem('token') : ''),
			email: (localStorage.getItem('email') ? localStorage.getItem('email') : '')
		}
	}, action) {

	console.log("Games REDUCER");
	console.log(state);
	console.log(action);

	switch (action.type) {
		case GAME_INFO_REQUEST:
			return {
				...state,
				isRunning: true,
				feed: action.feed
			};
		case GAME_INFO_SUCCESS:
			return {
				...state,
				isRunning: false,
				errorMessage: '',
				games: action.games
			};
		case GAME_INFO_FAIL:
			return {
				...state,
				isRunning: false,
				errorMessage: action.message
			};
		default:
			return state;
	}
}