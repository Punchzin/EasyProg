/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Auth from "../pages/Auth";
import Code from "../pages/Code/Code";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import useAuthContext from "../hooks/useAuthContext";

const Privated = ({ Item }) => {
  const { signed } = useAuthContext();
  return signed > 0 ? <Item /> : <Navigate to="/auth" />;
};

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/overview" element={<Privated Item={Overview} />} />
      <Route path="/code" element={<Code />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesApp;
