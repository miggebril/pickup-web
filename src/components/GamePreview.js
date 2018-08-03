import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GAME_INFO_REQUEST, 
         GAME_INFO_SUCCESS, 
         GAME_INFO_FAIL } from '../constants/actionTypes';

const ACTIVE_CLASS = 'btn btn-sm btn-primary';
const PENDING_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  onGetGame: id => dispatch({type: GAME_INFO_REQUEST, id: id})
});

const GamePreview = props => {
  console.log("Game Preview PROPS");
  console.log(props);

  const game = props.game;
  const gameClass = game.HomeScore === 0 && game.AwayScore === 0 ?
    ACTIVE_CLASS : PENDING_CLASS;

  const handleClick = (event) => {
    event.preventDefault();

    console.log("Game Preview PROPS");
    console.log(props);
  }

  return (
    <div className="game-preview">
      <div className="game-meta">

        <div className="info">
          <Link to={`users/${game.Owner.ID}`} className="court">
           { game.HomeCourt.name }
          </Link>
          <button className={gameClass} onClick={handleClick}>
            <span className="status">
              
              { gameClass === ACTIVE_CLASS ?
                  'Has next...' : 'IN PLAY'
              }

            </span>
          </button>
        </div>

        <div className="pull-xs-right">
          <button
            className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            {game.HomeCourt.rating}
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