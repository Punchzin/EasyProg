import * as Style from "./Apresentation.styles";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import Tabs from "../../components/Tabs/Tabs";
import HeadLine from "../../components/HeadLine/HeadLine";
import Chooser from "../../components/Chooser/Chooser";


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
          <Style.Output>
            saida de dados
          </Style.Output>
        </Style.Content>
      </Style.Container>
    </Style.Main>
  );
};

export default Apresentation;
