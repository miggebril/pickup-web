import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css';

import { GAME_INFO_REQUEST } from '../constants/actionTypes';

const ACTIVE_CLASS = 'game-status-active';
const PENDING_CLASS = 'game-status-pending';

const hasNext = (game) => {
  return (game.HomeScore === 0 && game.AwayScore === 0);
};

const mapDispatchToProps = dispatch => ({
  onGetGame: id => dispatch({type: GAME_INFO_REQUEST, id: id})
});

const GamePreview = props => {
  console.log("Game Preview PROPS");
  console.log(props);

  const game = props.game;
  const gameClass = hasNext(game) ? PENDING_CLASS : ACTIVE_CLASS;

  return (
    <div className="article-preview">
      <div className="article-meta">

        <div className="info">
          <Link to={`users/${game.Owner.ID}`} className="court">
           { game.HomeCourt.Name }
          </Link>
          <div>
            <span className={gameClass}>
                
                { gameClass === ACTIVE_CLASS ?
                    'IN PLAY' : 'Has next...' 
                }

            </span>
          </div>
        </div>

        <div className="pull-xs-right">
          <button
            className="btn btn-sm btn-outline-primary">
            <span>{game.HomeCourt.Rating ? game.HomeCourt.Rating.toFixed(1) : 0}</span>
          </button>

        </div>
      </div>

      <Link to={`games/${game.ID}`} className="preview-link">
        <h1>{game.Name}</h1>
        <p>{game.Owner.Username}</p>
        <span>Details</span>

      </Link>
    </div>
  );
}

export default connect (() => ({}), mapDispatchToProps)(GamePreview);