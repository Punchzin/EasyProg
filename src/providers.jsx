/* eslint-disable react/prop-types */
import { AuthProvider } from "./contexts/AuthContext";
import ReaderFileProvider from "./contexts/ReaderFileContext";
import { OpenAiProvider } from "./contexts/OpenAIContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <OpenAiProvider>
        <ReaderFileProvider>{children}</ReaderFileProvider>
      </OpenAiProvider>
    </AuthProvider>
  );
};

export default Providers;
