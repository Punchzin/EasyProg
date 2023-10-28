import * as Style from "./Apresentation.styles";
import Aside from "../../components/Aside/";
import Header from "../../components/Header/";
import Tab from "../../components/Tab/";
import Tabs from "../../components/Tabs/";
import HeadLine from "../../components/HeadLine/";
import Chooser from "../../components/Chooser/";
import Output from "../../components/Output/";

const Apresentation = () => {
  // Insira seu javascript aqui
  // 
  return (
    <Style.Main>
      <Aside />
      <Style.Container>
        <Style.HeaderContainer>
          <Header />
          <Tabs><Tab /></Tabs>
        </Style.HeaderContainer>
        <Style.Content>
          <Style.ContentBody>
            <HeadLine title="Hey, Welcome! 👋" description="Escolha uma linguagem." />
            <Style.Wrapper>
              <Chooser />
              <Style.UseMode>
                Video
              </Style.UseMode>
            </Style.Wrapper>
          </Style.ContentBody>
          <Output hasContent={false} />
        </Style.Content>
      </Style.Container>
    </Style.Main>
  );
};

export default Apresentation;
