/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import useReaderFile from "../../hooks/useReaderFile";
import useOpenAIContext from "../../hooks/useOpenAIContext";
import CircularProgress from "@mui/material/CircularProgress";

const Code = () => {
  const [inputText, setInputText] = useState("");
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [outputIsOpen, setOutputIsOpen] = useState(false);

  const { handleFileContent, fileContent } = useReaderFile();

  const { setCodeRequest, getCodeResponse, codeLoading } = useOpenAIContext();

  const contarLinhas = () => {
    const linhas = inputText.split("\n");
    return linhas.length;
  };

  useEffect(() => {
    setInputText(fileContent);
  }, [fileContent]);

  const handleOpen = () => {
    setOutputIsOpen((prev) => !prev);
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
            <Style.Container className={outputIsOpen && "inputOpened"}>
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
                <Style.LineNumbers>
                  {Array.from({ length: contarLinhas() }, (_, index) => (
                    <Style.LineNumber key={index + 1}>
                      {index + 1}
                    </Style.LineNumber>
                  ))}
                </Style.LineNumbers>

                <Style.CodeContainer>
                  <Style.CodeSection
                    value={inputText}
                    language="python"
                    placeholder="Insira seu código Python."
                    onChange={(event) => handleChangeText(event.target.value)}
                    padding={24}
                  />
                </Style.CodeContainer>
              </Style.ContentBody>
            </Style.Container>
            <Output
              outputIsOpen={outputIsOpen}
              setOutputIsOpen={setOutputIsOpen}
              handleOpen={handleOpen}
              hasContent={true}
            />
          </Style.Content>
        </Style.Wrapper>
      </Style.Main>
    </React.Fragment>
  );
};

export default Code;
