/* eslint-disable react/prop-types */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Auth from "../pages/Auth";
import Code from "../pages/Code/Code";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import useAuthContext from "../hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoutesApp = () => {
  const { signed, isLoading } = useAuthContext();

  const RouterAuth = ({ Item }) => {
    if (isLoading) return;

    if (!signed) window.location.replace("/auth");
    return signed ? <Item /> : null;
  };

  return (
    <React.Fragment>
      <ToastContainer toastClassName={"toastfy"} autoClose={2000} />
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
