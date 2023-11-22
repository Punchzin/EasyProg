import { useState } from 'react';

const useReaderFile = () => {
  const [fileContent, setFileContent] = useState(''); 

  const handleFileRead = (content) => {
    setFileContent(content); 
  };


  return { fileContent, handleFileRead }; 
};

export default useReaderFile;