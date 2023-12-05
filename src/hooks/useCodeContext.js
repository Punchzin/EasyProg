import { useContext } from "react";
import { CodeContext } from "../contexts/CodeContext";

const useCodeContext = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error("useCodeContext must be used within a CodeContextProvider");
  }
  return context;
};

export default useCodeContext;
