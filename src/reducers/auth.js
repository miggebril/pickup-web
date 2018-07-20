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

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};

function auth(state = {
    isRunning: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
  }, action) {
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