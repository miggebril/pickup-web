import React from 'react';
import GamePreview from './GamePreview';
import ListPagination from './ListPagination';

const GameList = props => {
  if (props.loading) {
    return (
      <div className="game-preview">Loading...</div>
    );
  } else if (props.games) {
      if (props.games.length == 0) {
        return (
              <div className="game-preview">
                No games currently available... Try starting one.
              </div>
            );
      } else {
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
  }

  return null;  
}

export default GameList;