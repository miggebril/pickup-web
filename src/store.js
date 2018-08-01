import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import api from './middleware/api';
import gamesApp from './reducers/auth';
import common from './reducers/common'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
const store = createStoreWithMiddleware(combineReducers({common, gamesApp}));

export default store;