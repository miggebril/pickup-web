import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH
} from '../constants/actionTypes';

function auth(state = {
    isRunning: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
  }, action) {
  console.log("Auth reducer being executed...")
  console.log("Action type: ")
  console.log(action.type)
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isRunning: true,
        isAuthenticated: false,
        user: action.credentials
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isRunning: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, {
        isRunning: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
};

function games(state = {}, action) {
  switch (action.type) {

    default:
      return state;
  }
};

const gamesApp = combineReducers({
  auth,
  games,
});

export default gamesApp;