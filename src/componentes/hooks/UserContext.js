// hooks/UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const predefinedUser = {
  username: "Mohamed",
  password: "renuevo3",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser, predefinedUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
