import * as Style from "./Overview.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import HeadLine from "../../components/HeadLine/";
import Chooser from "../../components/Chooser/";
import Output from "../../components/Output/";

const Overview = () => {
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
            <HeadLine
              title="Hey, Welcome! 👋"
              description="Escolha uma linguagem."
            />
            <Style.Wrapper>
              <Chooser />
              <Style.UseMode>
                <iframe
                  width='100%'
                  height='100%'
                  src="https://www.youtube.com/embed/zHcjYG3BRnc?autoplay=1&mute=1&controls=0&loop=1&playlist=zHcjYG3BRnc"
                  title="Tutorial de Uso - EasyProg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                  allowfullscreen
                  style={{ border: "none" }}
                />
              </Style.UseMode>
            </Style.Wrapper>
          </Style.ContentBody>
          <Output />
        </Style.Content>
      </Style.Container>
    </Style.Main>
  );
};

export default Overview;
