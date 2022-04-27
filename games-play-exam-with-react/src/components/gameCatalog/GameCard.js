function GameCard({
    game,
    navigationChangeHandler,
}) {
    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/game-details/${game._id}`);
      };

    return (
        <div className="allGames">
        <div className="allGames-info">
          <img src={game.imageUrl} />
          <h6>{game.category}</h6>
          <h2>{game.title}</h2>
          <a href={`/game/` + game._id} onClick={onDetailsClick} className="details-button">
            Details
          </a>
        </div>
      </div>
    );
}

export default GameCard;