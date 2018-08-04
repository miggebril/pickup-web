import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import api from './middleware/api';
import auth  from './reducers/auth';
import common from './reducers/common';
import games from './reducers/games';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
const store = createStoreWithMiddleware(combineReducers({ auth, common, games }));

export default store;