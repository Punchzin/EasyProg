import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState } from "react";
import { useRef } from "react";

const Code = () => {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };  

  function CopyToAPI() {
    const textareaRef = useRef(null);

    const handleCopy = () => {
      const textToCopy = textareaRef.current.value;
      navigator.clipboard.writeText(textToCopy);
    };
  }

  return (
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
          <Style.InputText placeholder="Insira o código" value={texto} onChange={handleChange}/>
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Wrapper>
    </Style.Main>
  );
};

export default Code;
