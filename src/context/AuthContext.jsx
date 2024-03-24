import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
