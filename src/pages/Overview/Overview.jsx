import * as Style from "./Overview.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import HeadLine from "../../components/HeadLine/";
import Chooser from "../../components/Chooser/";
import Output from "../../components/Output/";
import EASY_TUTORIAL from "../../assets/videos/EasyProg-Tutorial.mp4";

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
                  src={EASY_TUTORIAL}
                  title="Tutorial de Uso EasyProg."
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscop; web-share"
                  allowfullscreen
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
