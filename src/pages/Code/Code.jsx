import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState, createContext, useContext } from "react";
import axios from 'axios';

// Create Context object
export const CodeContext = createContext();

const Code = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopyToAPI = () => {
    axios.post('http://127.0.0.1:5000/api/send', {data: inputText})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
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