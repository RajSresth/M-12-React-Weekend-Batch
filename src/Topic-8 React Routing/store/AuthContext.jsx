import { useState, createContext, useContext } from "react";

// step-1 createContext
const AuthContext = createContext(null);

// step-2 Provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

// step-3 useContext
export const useAuth = () => useContext(AuthContext);
