import React from "react";
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState, createContext } from "react";
import Constants from "./Code.constants";

// import correctCode from './CodeCorrect';

export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState(Constants.FakeCode);
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  
  
  
  const API_KEY = "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";
  async function callOpenAIAPI() {
    console.log("Calling the OpenAI API");
    
    const APIBody = {
      model: "text-davinci-003",
      prompt:
      "Explain the errors of this python code. If this is not a python code, just say: This is not a Python code. " +
      inputText,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    
    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data.choices[0].text);
    });
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
              <Style.Robot>
                <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
              </Style.Robot>
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
                    onChange={(evn) => setInputText(evn.target.value)}
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
// Create a custom hook to access the inputText variable from other components
export default Code;
