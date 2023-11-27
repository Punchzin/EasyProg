import React, { useEffect } from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import useReaderFile from "../../hooks/useReaderFile";
import useOpenAIContext from "../../hooks/useOpenAIContext";
import { useState, createContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState("");
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { handleFileContent, fileContent } = useReaderFile();

  const { setCodeRequest, getCodeResponse, codeLoading } = useOpenAIContext();

  useEffect(() => {
    setInputText(fileContent);
  }, [fileContent]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeText = (value) => {
    setCodeRequest(value);
    handleFileContent(value);
    setInputText(value);
  };

  const handleExecute = () => {
    setPlayIsSelected((prev) => !prev);
    getCodeResponse();
  };

  return (
    <CodeContext.Provider>
      <React.Fragment>
        <Style.GlobalStyles />
        <Style.Main>
          <Aside />
          <Style.Wrapper>
            <Style.HeaderContainer>
              <Header />
              <Tabs>
                <Tab />
              </Tabs>
            </Style.HeaderContainer>
            <Style.Content>
              <Style.Container className={isOpen && "inputOpened"}>
                <Style.WrapperItem>
                  <Style.InputHeader>
                    <p>
                      Linguagem escolhida: <span>Python</span>
                    </p>
                    <h1>Análises de Códigos</h1>
                  </Style.InputHeader>
                  <Style.CodeActions>
                    <Style.TextButton
                      disabled={codeLoading}
                      onClick={handleExecute}
                    >
                      {!codeLoading ? (
                        <React.Fragment>
                          <i className="ri-play-fill"></i>
                          <p>Executar código</p>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <CircularProgress size={16} />
                          <p>Executando código</p>
                        </React.Fragment>
                      )}
                    </Style.TextButton>
                  </Style.CodeActions>
                </Style.WrapperItem>
                <Style.ContentBody>
                  <Style.CodeSection
                    value={inputText}
                    language="python"
                    placeholder="Insira seu código Python."
                    onChange={(event) => handleChangeText(event.target.value)}
                    padding={24}
                  />
                </Style.ContentBody>
              </Style.Container>
              <Output isOpen={isOpen} handleOpen={handleOpen} />
            </Style.Content>
          </Style.Wrapper>
        </Style.Main>
      </React.Fragment>
    </CodeContext.Provider>
  );
};

export default Code;
