import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
// import { useState } from "react";
// import { useRef } from "react";
// import { saveAs } from 'file-saver';

const Code = () => {
  // const [text, setTexto] = useState();

  // const inpText = (event) => {
  //   setTexto(event.target.value);
  // };

  
  //   const CopyToPyFile = () => {
  //   const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  //   saveAs(blob, 'arquivo.py');
  //   const retorno = {console:log("deu certo")};
  // };  
 

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
            <Style.InputText placeholder="Insira o código" /*value={text} onChange={inpText}*/ />
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Wrapper>
    </Style.Main>
  );
};
export default Code;