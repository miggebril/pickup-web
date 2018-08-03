import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import api from './middleware/api';
import auth  from './reducers/auth';
import common from './reducers/common';
import games from './reducers/games';

export const history = createHistory();

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
export const store = createStoreWithMiddleware(combineReducers({ auth, common, games }));
