import { combineReducers } from 'redux';
import {
  USER_INFO_REQUEST, USER_INFO_SUCCESS, USER_INFO_FAIL
} from '../constants/actionTypes';

export function user(state = {
		isRunning : false
	}, action) {

	switch (action.type) {
		case USER_INFO_REQUEST:
			return Object.assign({}, state, {
				isRunning : true
			});
		case USER_INFO_SUCCESS:
			return Object.assign({}, state, {
				isRunning : false,
				user : action.user
			});
		case USER_INFO_FAIL:
			return Object.assign({}, state, {
				isRunning : false,
				errorMessage : action.message
			});
		default:
			return state;
	}
};