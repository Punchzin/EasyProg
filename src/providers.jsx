/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import ReaderFileProvider from "./contexts/ReaderFileContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ReaderFileProvider>{children}</ReaderFileProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Providers;
