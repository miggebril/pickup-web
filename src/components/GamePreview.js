import React from 'react';

const GamePreview = props => {
  const game = props.game;

  return (
    <div className="game-preview">
      <div className="game-meta">
        <a>
          <img src={game.court.image}/>
        </a>

        <div className="info">
          <a className="court">
            {game.court.name}
          </a>
          <span className="date">
            {new Date(game.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button
            className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i>
            {game.rating}
          </button>

        </div>
      </div>

      <a to={`game/${game.slug}`} className="preview-link">
        <h1>{game.name}</h1>
        <p>{game.court}</p>
        <span>Details</span>
        <ul className="player-list">
          {
            game.players.map(player => {
              return (
                <li className="player-default player-pill player-outline" key={player}>
                  {player}
                </li>
              )
            });
          }
        </ul>

      </a>
    </div>
  );
}

export default GamePreview;