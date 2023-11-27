import React from "react";

function GameCollectionItem({ game, onRemoveGame }) {
  return (
    <div className="card">
      <img src={game.imageURL} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Rating de Metacritic: {game.metacriticRating}</p>
      <button onClick={() => onRemoveGame(game.id)}>Eliminar</button>
    </div>
  );
}

export default GameCollectionItem;
