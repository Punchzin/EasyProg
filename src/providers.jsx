/* eslint-disable react/prop-types */
import { AuthProvider } from "./contexts/AuthContext";
import ReaderFileProvider from "./contexts/ReaderFileContext";
import { CodeProvider } from "./contexts/CodeContext";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CodeProvider>
          <ReaderFileProvider>{children}</ReaderFileProvider>
        </CodeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
