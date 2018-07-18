import React from 'react';

const GameList = props => {
  if (!props.games) {
    return (
      <div className="game-preview">Loading...</div>
    );
  }

  if (props.games.length === 0) {
    return (
      <div className="game-preview">
        No games currently available... Try starting one.
      </div>
    );
  }

  return (
    <div>
      {
        props.games.map(game => {
          return (
            <h2>{game.name}</h2>
          );
        })
      }
    </div>
  );
}

export default GameList;