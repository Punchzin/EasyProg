import * as Style from "./Apresentation.styles";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Tab from "../../components/Tab/Tab";
import Tabs from "../../components/Tabs/Tabs";
import HeadLine from "../../components/HeadLine/HeadLine";

const Apresentation = () => {
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
          <HeadLine title="Hey, Welcome! 👋" description="Escolha uma linguagem." />
          <Style.Wrapper>
            <Style.Chooser>
              <Style.ChooseItem>Python</Style.ChooseItem>
              <Style.ChooseItem>C#</Style.ChooseItem>
              <Style.ChooseItem>JavaScript</Style.ChooseItem>
            </Style.Chooser>
            <Style.UseMode>
              Video
            </Style.UseMode>
          </Style.Wrapper>
        </Style.Content>
        <Style.Output>
          saida de dados
        </Style.Output>
      </Style.Container>
    </Style.Main>
  );
};

export default Apresentation;
