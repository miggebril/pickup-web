import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';

ReactDOM.render((
    <Provider store={store}>
      <Router history={hashHistory}>
      	<Route path="/" component={App}>
      		<IndexRoute component={Home} />
      		<Route path="4login" component={Login} />
      	</Route>
      </Router>
    </Provider> 
), document.getElementById('root'));