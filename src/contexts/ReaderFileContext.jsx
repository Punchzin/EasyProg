/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import useCodeContext from "../hooks/useCodeContext";

export const ReaderFileContext = createContext();

const ReaderFileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState("");
  const { setCodeRequest, setCodeResponse, languageData } = useCodeContext();

  console.log(languageData)

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
      setCodeRequest(event.target.result);
    };

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

  const handleClearFile = () => {
    setCodeRequest("");
    setCodeResponse("");
    setFileContent("");
  };

  // Função que faz o download do arquivo
  const handleDownloadFile = () => {
    const fileType = languageData?.extension ?? 'py';
    const generateUUID = crypto.randomUUID();

    const data = fileContent;
    const filename = `${generateUUID}.${fileType}`;
    handleSaveFile(data, filename);
  };

  return (
    <ReaderFileContext.Provider
      value={{
        fileContent,
        handleReadFile,
        handleFileContent,
        handleDownloadFile,
        handleClearFile,
      }}
    >
      {children}
    </ReaderFileContext.Provider>
  );
};

export default ReaderFileProvider;
