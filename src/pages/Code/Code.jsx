import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import { useState } from "react";
import { useRef } from "react";
import { saveAs } from 'file-saver';


const Code = () => {



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
            <Style.InputText placeholder="Insira o código"  />
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Wrapper>
    </Style.Main>
  );
};

export const handleCopyToAPI = () => {
  // Assuming the Python file is exposed as an API endpoint
  axios.post('http://localhost:5000/api/send', {data: formValue})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
};

export default Code;
