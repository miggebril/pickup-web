import React from 'react';
import GamePreview from './GamePreview';
import ListPagination from './ListPagination';

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
            <GamePreview game={game} key={game.id}/>
          );
        })
      }

      <ListPagination 
        request={props.request}
        currentPage={props.currentPage}
        gamesCount={props.gamesCount} />
    </div>
  );
}

export default GameList;