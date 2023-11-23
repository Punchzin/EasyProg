/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ReaderFileContext = createContext();

const ReaderFileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState("");

  // Função que manipula o conteúdo do arquivo
  const handleFileContent = (content) => {
    setFileContent(content);
  };

  // Função que lê o arquivo
  const handleReadFile = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = (event) => {
      handleFileContent(event.target.result);
    }

    if (file) {
      reader.readAsText(file);
    }

  };

  // Função que salva o arquivo
  const handleSaveFile = (data, filename) => {
    const blob = new Blob([data], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Função que faz o download do arquivo
  const handleDownloadFile = () => {
    const fileType = '.py';
    const generateUUID = crypto.randomUUID();
    
    const data = fileContent;
    const filename = `${generateUUID}${fileType}`;
    handleSaveFile(data, filename);
  };

  return (
    <ReaderFileContext.Provider value={{
        fileContent,
        handleReadFile,
        handleFileContent,
        handleDownloadFile,
    }}>
      {children}
    </ReaderFileContext.Provider>
  );
};

export default ReaderFileProvider;
