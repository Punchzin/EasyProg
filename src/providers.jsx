/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import ReaderFileProvider from "./contexts/ReaderFileContext";
import { OpenAiProvider } from "./contexts/OpenAIContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <OpenAiProvider>
          <ReaderFileProvider>{children}</ReaderFileProvider>
        </OpenAiProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Providers;
