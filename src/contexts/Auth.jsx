import { useState, useEffect, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const userIsLogged = localStorage.getItem("userIsLogged");

    if (userIsLogged) {
    }
  }, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
