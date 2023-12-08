/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import useReaderFile from "../../hooks/useReaderFile";
import useCodeContext from "../../hooks/useCodeContext";
import CircularProgress from "@mui/material/CircularProgress";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";
import ReactCodeMirror from "@uiw/react-codemirror";
import { tokyoNight, tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";

const Code = () => {
  const [inputText, setInputText] = useState("");
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [outputIsOpen, setOutputIsOpen] = useState(false);

  const { handleFileContent, fileContent } = useReaderFile();

  const { setCodeRequest, getCodeResponse, codeLoading, languageData } =
    useCodeContext();

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
                    Linguagem escolhida:{" "}
                    <span style={{ color: languageData?.color ?? "#0BF0D5" }}>
                      {languageData?.language}
                    </span>
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
                <Style.CodeMirror
                  value={inputText}
                  style={{ width: "100%" }}
                  height="100%"
                  theme={tokyoNight}
                  onChange={(value) => handleChangeText(value)}
                />
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
