
import React from 'react';
import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState, createContext, useContext } from "react";
import Constants from './Code.constants';
import { OpenAI } from 'openai';
import correctCode from './CodeCorrect';


export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState(Constants.FakeCode);
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  // const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
  // async function correctCode() {
  //   const prompt = `correct and explain the errors of the following incorrect python code:\n\n${inputText}`;

  //   const response = await openai.complete({
  //     engine: 'text-davinci-003', // or 'gpt-3.5-turbo'
  //     prompt: prompt,
  //     maxTokens: 500,
  //   });
  //   console.log(response.choices[0].text);
  // }


  return (
    <CodeContext.Provider value={{ inputText, setInputText }}>
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
            <Style.Container className={isOpen && 'inputOpened'}>
              <Style.WrapperItem>
                <Style.InputHeader>
                  <p>Linguagem escolhida: <span>Python</span></p>
                  <h1>
                    Análises de Códigos
                  </h1>
                </Style.InputHeader>
                <Style.CodeActions>
                  <Style.TextButton>
                    <CodeAction
                      actionIcon="ri-play-fill"
                      actionTitle="Iniciar"
                      type="button"
                      onClick={() => {
                        setPlayIsSelected((prev) => !prev);
                        correctCode();
                      }}
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
export const useInputText = () => {
  const context = useContext(CodeContext);
  if (!context) {
    throw new Error('useInputText must be used within a CodeProvider');
  }
  return context;
};

export default Code;