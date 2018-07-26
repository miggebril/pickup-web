import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';
import gamesApp from './reducers/auth';

const defaultState = {
  appName: 'Pickup',
  auth: {
	  isRunning: false,
	  isAuthenticated: false,
	  errorMessage: ""
	}
};

function reducer(state = defaultState, action) {
  console.log("Reducer called in store component. WRONG FUNCTION EXECUTED");
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
const store = createStoreWithMiddleware(combineReducers({reducer, gamesApp}));

export default store;