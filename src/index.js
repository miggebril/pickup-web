import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {   IndexRoute, browserHistory  } from 'react-router';
import Home from './components/Home';
import Game from './components/Game';
import Login from './components/Login';
import { login } from './actions';

// const PickupRouter = () => (
// 	<Router >
// 		<Route path="/" component={App}>
// 			<IndexRoute component={Home} />
// 			<PropsRoute path="/login" component={Login} errorMessage={store.errorMessage} onLoginClick={ credentials => store.dispatch(login(credentials))}/>
//       <PropsRoute path="/games/:id" component={Game} />
// 		</Route>
// 	</Router>
// );

const PickupRouter = (props) => (
  <Router >
    <Switch>
      <Route exact path="/" component={App} currentUser={store.currentUser} />
      <Route path="/login" component={Login} />
      <Route path="/games/:id" component={Game} />
    </Switch>
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
// const PropsRoute = ({ component, ...rest }) => {
//   return (
//     <Route {...rest} render={routeProps => {
//       return renderMergedProps(component, routeProps, rest);
//     }}/>
//   );
// }

ReactDOM.render((
    <Provider store={store}>
      <PickupRouter />
    </Provider> 
), document.getElementById('root'));

export default PickupRouter;