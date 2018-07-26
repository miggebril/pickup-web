import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import store from './store';
import { Provider, connect } from 'react-redux';
import App from './components/App';
import { Switch } from 'react-router-dom';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import { login } from './actions';

const PickupRouter = () => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<PropsRoute path="login" component={Login} errorMessage={store.errorMessage} onLoginClick={ credentials => store.dispatch(login(credentials))}/>
		</Route>
	</Router>
);

const PropsRouter = () => {
	<Router>
		<Switch>
			<PropsRoute path='/login' component={Login} onLoginClick={ credentials => store.dispatch(login(credentials))}/>
		</Switch>
	</Router>
};

//Initialize component with new properties object
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

// Custom route with properties passed to render
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

ReactDOM.render((
    <Provider store={store}>
      <PickupRouter />
    </Provider> 
), document.getElementById('root'));

export default PickupRouter;