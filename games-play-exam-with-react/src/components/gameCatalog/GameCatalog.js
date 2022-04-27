import { useEffect, useState } from 'react';
import GameCard from './GameCard';
import gameService from '../../services/gameService';

function GameCatalog({
  navigationChangeHandler,
}) {
  let [games, setGames ] = useState([]);

  useEffect(() => {
    gameService.getAll()
    .then(
      gamesResult => {
        setGames(gamesResult);
      }
    )
  }, [])


  return (
    <section id="game-catalog">
      <h1>All Games</h1>

      {games.map(game => <GameCard key={game._id} game={game} navigationChangeHandler={navigationChangeHandler}></GameCard>)}

      <h3 className="no-articles">No articles yet</h3>
    </section>
  );
}

export default GameCatalog;