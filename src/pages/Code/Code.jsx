import * as Style from "./Code.styles";
import CodeButtons from "./CodeButtons";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import CodeAction from "./CodeAction";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState, createContext } from "react";
import axios from 'axios';

// Create Context object
export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState("");

  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [pauseIsSelected, setPauseIsSelected] = useState(false);
  const [restartIsSelected, setRestartIsSelected] = useState(false);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopyToAPI = () => {
    // Verifique se o inputText não está vazio antes de fazer a solicitação
    if (inputText.trim() !== '') {
      axios.post('http://127.0.0.1:5000/api/send', { data: inputText })
        .then(response => {
          console.log(response.data);
          console.log("ENVIADO");
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };

  // Value to be passed to Provider must be an object
  const contextValue = {
    handleCopyToAPI
  };

  return (
    <CodeContext.Provider value={contextValue}>
      <Style.Main>
        <Aside />
        <Style.Wrapper>
          <Style.HeaderContainer>
            <Header />
            <Style.Robot>
              <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
            </Style.Robot>
            <Tabs><Tab /></Tabs>
          </Style.HeaderContainer>
          <Style.Content>
            <Style.ContentBody>
              <Style.CodeActions>
                <CodeAction
                  actionIcon="ri-play-line"
                  actionTitle="Iniciar"
                  type="button"
                  onClick={() => {
                    setPlayIsSelected((prev) => !prev);
                    handleCopyToAPI(); // Chame a função de envio quando o botão "Iniciar" for clicado
                  }}
                  actionIsSelected={playIsSelected}
                />

                <CodeAction
                  actionIcon="ri-pause-fill"
                  actionTitle="Pausar"
                  onClick={() => setPauseIsSelected((prev) => !prev)}
                  actionIsSelected={pauseIsSelected}
                />
                <CodeAction
                  actionIcon="ri-restart-line"
                  actionTitle="Reiniciar"
                  onClick={() => setRestartIsSelected((prev) => !prev)}
                  actionIsSelected={restartIsSelected}
                />
              </Style.CodeActions>
              <Style.InputText placeholder="Insira o código" onChange={handleChange} />
            </Style.ContentBody>
            <Output />
          </Style.Content>
        </Style.Wrapper>
      </Style.Main>
    </CodeContext.Provider>
  );
};

export default Code;
