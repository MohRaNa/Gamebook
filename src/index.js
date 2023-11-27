// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { GamebookApp } from "./GamebookApp";
import { UserProvider } from "./componentes/hooks/UserContext"; 

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <UserProvider>
    <GamebookApp />
  </UserProvider>
);
