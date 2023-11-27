import React, { useState } from "react";
import useFetch from "./useFetch"; // Asegúrate de importar el hook useFetch

function GameCollectionAdd({ onGameAdded }) {
  const [gameId, setGameId] = useState("");
  const apiKey = "56779ca0e9684d56b417ee3ebfcad1ed"; // Clave de API proporcionada
  const apiURL = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;

  const { info, loading, error } = useFetch(apiURL);

  const handleAddGame = () => {
    if (!loading && !error && info) {
      const gameData = {
        id: info.id,
        name: info.name,
        imageURL: info.background_image,
        metacriticRating: info.metacritic,
      };
      onGameAdded(gameData);
      setGameId(""); // Limpia el campo de texto después de agregar el juego
    }
  }

  return (
    <div>
      <input
        type="text"
        value={gameId}
        onChange={(e) => setGameId(e.target.value)}
      />
      <button onClick={handleAddGame}>Agregar Juego</button>
    </div>
  );
}

export default GameCollectionAdd;
