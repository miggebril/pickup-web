import React from 'react';
import Banner from './Banner';
import MainView from './MainView';
import { connect } from 'react-redux'
import { getGameFeed } from '../../actions';
import { gameActions } from '../../actions/gameActions';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: (feed, currentUser, request, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, feed, currentUser, request, payload }),
  onUnload: () => {
    dispatch({ type: HOME_PAGE_UNLOADED })
  }
});

class Home extends React.Component {

  componentWillMount() {
    console.log("HOME PROPS");
    console.log(this.props);
    console.log(this.state);

    const requestHandler = getGameFeed;
    const currentUser = this.props.currentUser;
    const feed = currentUser.token ? 'local' : 'global';

    this.props.onLoad(feed, currentUser, requestHandler, Promise.all([requestHandler()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log("Home PROPS");
    console.log(this.props);

    return (
      <div className="home-page">
        <Banner token={this.props.currentUser.token} appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                
                <p>Pickup Ball</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);