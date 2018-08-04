import React from 'react';
import GameList from '../GameList';
import store from '../../store';
import { connect } from 'react-redux';
import { getGameFeed } from '../../actions';
import { CHANGE_TAB, GAME_INFO_REQUEST } from '../../constants/actionTypes';

const RenderLocalFeed = (props) => {
  console.log("Local Feed PROPS");
  console.log(props);

  if (props.currentUser) {
    const onClickHandler = (event) => {
      event.preventDefault();
      props.onFeedClick('local', store.dispatch(getGameFeed(props.currentUser)));
    };

    return (
      <li className="nav-item">
        <a
          href=""
          className={props.feed === 'local' ? "nav-link active" : "nav-link"}
          onClick={onClickHandler}>
          
          Neighborhood games
        </a>
      </li>
    );
  }

  return null;
};

const RenderGlobalFeed = (props) => {
  console.log("Global Feed PROPS");
  console.log(props);

  const onClickHandler = (event) => {
    // TESTING PURPOSES
    const token = (props.currentUser ? props.currentUser : localStorage.getItem('token'));

    event.preventDefault();
    props.onFeedClick('global', store.dispatch(getGameFeed(token)));
  }

  return (
      <li className="nav-item">
        <a
          href=""
          className={props.feed === 'global' ? "nav-link active" : "nav-link"}
          onClick={onClickHandler}>
          
          Public games
        </a>
      </li>
    );
}

const mapStateToProps = state => ({
  ...state.games,
  loading: false
});

const mapDispatchToProps = dispatch => ({
  onFeedClick: (feed, payload) =>
    dispatch({ type: GAME_INFO_REQUEST, feed, payload })
});

const MainView = props => {
  
  console.log("MainView PROPS");
  console.log(props);

  const currentUser = {
    token : localStorage.getItem('token'),
    email : localStorage.getItem('email')
  };

  const handleFeedClick = (event) => {
    event.preventDefault();
  }

  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          
          <RenderLocalFeed feed={props.feed} onFeedClick={props.onFeedClick} currentUser={currentUser.token} />

          <RenderGlobalFeed feed={props.feed} onFeedClick={props.onFeedClick} />

        </ul>
      </div>

      <GameList 
        request={props.request}
        games={props.games}
        gamesCount={props.gamesCount}
        currentPage={props.currentPage}
        loading={props.loading} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);