// componentes/welcome/WelcomeScreen.js
import React, { useContext, useState } from "react";
import { useUser } from "../hooks/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const WelcomeScreen = () => {
  const { setUser, predefinedUser } = useUser();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    // Validate user credentials against the predefined user
    if (formData.username === predefinedUser.username && formData.password === predefinedUser.password) {
      setUser({ username: formData.username });
      navigate("/games"); // Navigate to the GamesRouter
    }
  };

  return (
    <div>
      <h1>Welcome to the Gamebook App</h1>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default WelcomeScreen;
