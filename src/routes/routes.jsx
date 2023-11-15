import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Auth from "../pages/Auth";
import Code from "../pages/Code/Code";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";

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
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/code" element={<Code />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesApp;
