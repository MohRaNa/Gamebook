import React, { useReducer, useEffect } from "react";
import { useUser } from "../hooks/UserContext"; // Import the useUser hook
import GameCollectionAdd from "./GameCollectionAdd";
import GameCollection from "./GameCollection";

const gameCollectionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.payload];
    case "REMOVE_GAME":
      return state.filter((game) => game.id !== action.payload);
    default:
      return state;
  }
};

function GameCollectionApp() {
  const { user } = useUser(); // Get the user data from the context
  const [gameCollection, dispatch] = useReducer(gameCollectionReducer, user?.gameCollection || []); // Initialize with user's game collection

  useEffect(() => {
    if (user) {
      user.gameCollection = gameCollection; // Update the user object with the game collection
    }
  }, [gameCollection, user]);

  const handleAddGame = (game) => {
    dispatch({ type: "ADD_GAME", payload: game });
  };

  const handleRemoveGame = (gameId) => {
    dispatch({ type: "REMOVE_GAME", payload: gameId });
  };

  return (
    <div>
      <GameCollectionAdd onGameAdded={handleAddGame} />
      <GameCollection games={gameCollection} onRemoveGame={handleRemoveGame} />
    </div>
  );
}

export default GameCollectionApp;
