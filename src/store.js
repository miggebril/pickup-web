import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';
import gamesApp from './reducers/auth';
import common from './reducers/common'

const defaultState = {
  appName: 'Pickup',
  token: null,
  viewChangeCounter: 0,
  auth: {
    isRunning: false,
    isAuthenticated: false,
    errorMessage: ""
  }
};

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
const store = createStoreWithMiddleware(combineReducers({common, gamesApp}));

export default store;