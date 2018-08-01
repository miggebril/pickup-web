import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';

class App extends React.Component {
  render() {
    console.log("On render, App properties...");
    console.log(this.props);
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    console.log("App component properties...");
    console.log(this.props);
    console.log("Finished logging app properties");

    return (
      <div>
        <Header
          appName={this.props.appName}
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch} 
        />
        
        {this.props.children}
      </div>
    );
  }
};

App.defaultProps = store.defaultProps;

// type-check to ensure App can render
App.propTypes = {
	dispatch: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  console.log("App state mapping...");
  console.log(state);
	const { auth } = state.gamesApp;
	const { isAuthenticated, errorMessage } = auth;

	return {
	  appName: state.common.appName,
	  isAuthenticated,
	  errorMessage
	}
};

export default connect(mapStateToProps)(App);













// import agent from '../agent';
// import Header from './Header';
// import React from 'react';
// import { connect } from 'react-redux';
// import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
// import { Route, Switch } from 'react-router-dom';
// import Article from '../components/Article';
// import Editor from '../components/Editor';
// import Home from '../components/Home';
// import Login from '../components/Login';
// import Profile from '../components/Profile';
// import ProfileFavorites from '../components/ProfileFavorites';
// import Register from '../components/Register';
// import Settings from '../components/Settings';
// import { store } from '../store';
// import { push } from 'react-router-redux';

// const mapStateToProps = state => {
//   return {
//     appLoaded: state.common.appLoaded,
//     appName: state.common.appName,
//     currentUser: state.common.currentUser,
//     redirectTo: state.common.redirectTo
//   }};

// const mapDispatchToProps = dispatch => ({
//   onLoad: (payload, token) =>
//     dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
//   onRedirect: () =>
//     dispatch({ type: REDIRECT })
// });

// class App extends React.Component {
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.redirectTo) {
//       // this.context.router.replace(nextProps.redirectTo);
//       store.dispatch(push(nextProps.redirectTo));
//       this.props.onRedirect();
//     }
//   }

//   componentWillMount() {
//     const token = window.localStorage.getItem('jwt');
//     if (token) {
//       agent.setToken(token);
//     }

//     this.props.onLoad(token ? agent.Auth.current() : null, token);
//   }

//   render() {
//     if (this.props.appLoaded) {
//       return (
//         <div>
//           <Header
//             appName={this.props.appName}
//             currentUser={this.props.currentUser} />
//             <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//             <Route path="/editor/:slug" component={Editor} />
//             <Route path="/editor" component={Editor} />
//             <Route path="/article/:id" component={Article} />
//             <Route path="/settings" component={Settings} />
//             <Route path="/@:username/favorites" component={ProfileFavorites} />
//             <Route path="/@:username" component={Profile} />
//             </Switch>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <Header
//           appName={this.props.appName}
//           currentUser={this.props.currentUser} />
//       </div>
//     );
//   }
// }

// // App.contextTypes = {
// //   router: PropTypes.object.isRequired
// // };

// export default connect(mapStateToProps, mapDispatchToProps)(App);