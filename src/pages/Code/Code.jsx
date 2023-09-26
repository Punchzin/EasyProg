import * as Style from "./Code.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import Output from "../../components/Output/";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";

const Code = () => {
  // Insira seu javascript aqui
  //
  return (
    <Style.Main>
      <Aside />
      <Style.Container>
        <Style.HeaderContainer>
          <Header />
          <Tabs>
            <Tab />
          </Tabs>
        </Style.HeaderContainer>
        <Style.Content>
          <Style.ContentBody>
            <Style.Wrapper>
              <Style.Robot>
                <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
              </Style.Robot>
            </Style.Wrapper>
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Container>
    </Style.Main>
  );
};

export default Code;
