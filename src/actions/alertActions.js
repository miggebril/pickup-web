import { SUCCESS, FAIL, PENDING, WARNING } from '../constants/actionTypes';

export const alertActions = {
	success,
	fail,
	pending,
	warning
};

function success(message) {
	return { type: SUCCESS, message };
}

function fail(message) {
	return { type: FAIL, message };
}

function pending(message) {
	return { type: PENDING, message };
}

function warning(message) {
	return { type: WARNING, message };
}