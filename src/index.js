import ReactDOM from 'react-dom';
import React from 'react';
import { history, store } from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';
import Home from './components/Home';
import Game from './components/Game';
import Login from './components/Login';
import { login } from './actions';

const PickupRouter = () => (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<PropsRoute path="login" component={Login} errorMessage={store.errorMessage} onLoginClick={ credentials => store.dispatch(login(credentials))}/>
      <PropsRoute path="games/:id" component={Game} />
		</Route>
	</Router>
);

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