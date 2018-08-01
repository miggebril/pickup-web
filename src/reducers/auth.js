import { combineReducers } from 'redux';
import games from './games';
import gameList from './gameList';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/actionTypes';

function auth(state = {
    isRunning: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    redirectTo: '/login'
  }, action) {

  console.log("Action type:\n" + action.type);

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
        errorMessage: '',
        redirectTo: '/'
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

const gamesApp = combineReducers({
  auth,
  games,

});

export default gamesApp;