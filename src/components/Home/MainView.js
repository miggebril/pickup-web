// import GameList from '../GameList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  games: state.games
});

const MainView = props => {
  return (
    <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        
      <li className="nav-item">
        <a
          href=""
          className="nav-link active">
          
          Neighborhood games
        </a>
      </li>

      </ul>
    </div>  
    </div>
  );
}

export default connect(mapStateToProps, () => ({}))(MainView);