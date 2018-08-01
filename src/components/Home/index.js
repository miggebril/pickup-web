import Banner from './Banner'
import MainView from './MainView';
import React from 'react'
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
  appName: state.common.appName,
  token: state.common.currentUser.token
});

const mapDispatchToProps = dispatch => ({
  onLoad: (feed, request, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, feed, request, payload }),
  onUnload: () => {
    dispatch({ type: HOME_PAGE_UNLOADED })
  }
});

class Home extends React.Component {

  componentWillMount() {
    const feed = this.props.token ? 'local' : 'global';
    const requestHandler = getGameFeed;

    this.props.onLoad(feed, requestHandler, Promise.all([requestHandler()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log("Home PROPS");
    console.log(this.props);

    return (
      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} />

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