import React, { useState } from "react";
import GameCollectionItem from "./GameCollectionItem";


function GameCollectionSearch({ games, onRemoveGame }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    // Filter the games based on the search query
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredGames);
    setSearching(true);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search games..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searching && (
        <div className="d-flex flex-wrap">
          {searchResults.map((game) => (
            <GameCollectionItem
              key={game.id}
              game={game}
              onRemoveGame={onRemoveGame}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GameCollectionSearch;
