/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import ReaderFileProvider from "./contexts/ReaderFileContext";
import { OpenAiProvider } from "./contexts/OpenAIContext";

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OpenAiProvider>
          <ReaderFileProvider>{children}</ReaderFileProvider>
        </OpenAiProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Providers;
