import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Apresentation from "../pages/Apresentation";
import Authentication from "../pages/Authentication";
import Code from "../pages/Code/Code";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useEffect } from "react";

const Privated = ({ Item }) => {
  const [user, loading, error] = useAuthState(auth);
  const [userReady, setUserReady] = useState(false);
  const { isLogged } = useAuth();

  useEffect(() => {
    if (!loading) {
      setUserReady(true);
    }
  }, [loading]);

  if (!userReady) {
    return null;
  }

  return isLogged ? <Item /> : <Navigate to="/login" />;
};

const RoutesApp = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/overview" element={< Apresentation />} />
        <Route path="/code" element={<Code />} />
      </Routes>
  );
};

export default RoutesApp;
