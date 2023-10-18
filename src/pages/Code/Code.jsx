import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState, createContext } from "react";
import axios from "axios";
import Constants from './Code.constants';


// Create Context object
export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState(Constants.FakeCode);
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  
  const execute = () => {
    if (inputText.trim() !== "") {
      axios
        .post("https://3000-punchzin-easyprog-y7310iw047q.ws-us105.gitpod.io/inserir-dados", { inputText })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const contextValue = {
    execute
  };

  return (
    <CodeContext.Provider value={contextValue}>
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
                        execute();
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
    </CodeContext.Provider>
  );
};

export default Code;
