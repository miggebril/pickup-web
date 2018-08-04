import ReactDOM from 'react-dom';
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Login';


const PickupRouter = (props) => (
  <Router >
    <Switch>
      <Route exact path="/" component={App} currentUser={store.currentUser} />
      <Route path="/login" component={Login} />
      <Route path="/games/:id" component={Game} />
    </Switch>
  </Router>
);

ReactDOM.render((
    <Provider store={store}>
      <PickupRouter />
    </Provider> 
), document.getElementById('root'));

export default PickupRouter;