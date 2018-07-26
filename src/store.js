import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';
import gamesApp from './reducers';

const defaultState = {
  appName: 'Pickup',
  auth: {
	  isRunning: false,
	  isAuthenticated: false,
	  errorMessage: ""
	}
};

const reducer = function(state = defaultState, action) {
  console.log("Reducer called in store component. WRONG FUNCTION EXECUTED");
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
  }
  return state;
};

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
const store = createStoreWithMiddleware(gamesApp);

export default store;