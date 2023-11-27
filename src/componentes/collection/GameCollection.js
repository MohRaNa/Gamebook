import React from "react";
import GameCollectionItem from "./GameCollectionItem";
import GameCollectionSearch from "./GameCollectionSearch"; // Import the GameCollectionSearch component

function GameCollection({ games, onRemoveGame }) {
  return (
    <div>
      <GameCollectionSearch games={games} onRemoveGame={onRemoveGame} /> {/* Render the GameCollectionSearch component */}
      <div className="d-flex flex-wrap">
        {games.map((game) => (
          <GameCollectionItem
            key={game.id}
            game={game}
            onRemoveGame={onRemoveGame}
          />
        ))}
      </div>
    </div>
  );
}

export default GameCollection;

