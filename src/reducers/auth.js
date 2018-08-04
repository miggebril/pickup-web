import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/actionTypes';

function auth(state = {
    isRunning: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    redirectTo: '/login',
    currentUser: {
      token: (localStorage.getItem('token') ? localStorage.getItem('token') : ''),
      email: (localStorage.getItem('email') ? localStorage.getItem('email') : '')
    }
  }, action) {

  console.log("AUTH REDUCER\n" + action.type);
  console.log(action);

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

export default auth;