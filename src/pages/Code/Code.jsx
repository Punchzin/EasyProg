import * as Style from "./Code.styles";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";

const Code = () => {
  // Insira seu javascript aqui
  // 
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
            <Style.InputText>
                Insira o código
            </Style.InputText>
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Wrapper>
    </Style.Main>
  );
};

export default Code;
