/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Auth from "../pages/Auth";
import Code from "../pages/Code/Code";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import useAuthContext from "../hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const RoutesApp = () => {
  const { signed, isLoading } = useAuthContext();

  const RouterAuth = ({ Item }) => {
    if (isLoading) return <h1>Loading...</h1>;

    if (!signed) return window.location.replace("/auth");

    return <Item />;
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/overview" element={<RouterAuth Item={Overview} />} />
        <Route path="/code" element={<RouterAuth Item={Code} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default RoutesApp;
