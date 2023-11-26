import React, { useEffect } from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import useReaderFile from "../../hooks/useReaderFile";
import useCallingAPI from "../../hooks/useCallingAPI";
import { useState, createContext } from "react";

export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState("");
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { handleFileContent, fileContent } = useReaderFile();

  const { callOpenAIAPI } = useCallingAPI();

  useEffect(() => {
    setInputText(fileContent);
  }, [fileContent])
  
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeText = (value) => {
    handleFileContent(value);
    setInputText(value);
  }


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
                      onClick={() => {
                        setPlayIsSelected((prev) => !prev);
                        callOpenAIAPI();
                      }}
                    >
                      <CodeAction
                        actionIcon="ri-play-fill"
                        actionTitle="Iniciar"
                        type="button"
                        actionIsSelected={playIsSelected}
                      />
                      <p>Executar código</p>
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
