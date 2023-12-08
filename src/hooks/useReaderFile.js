import { useContext } from "react";
import { ReaderFileContext } from "../contexts/ReaderFileContext";

const useReaderFile = () => {
  const context = useContext(ReaderFileContext);
  if (!context) {
    throw new Error("useReaderFile must be used within a ReaderFileProvider");
  }

  return context;
};

export default useReaderFile;