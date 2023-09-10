import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import * as Style from "./Apresentation.styles";
import Aside from "../../components/Aside";

const Apresentation = () => {
  // Insira seu javascript aqui
  return (
    <Style.Main>
      <Aside />
      <Style.Container>
        <Style.Header>
          <Style.HeaderBrand>
            <h2>EASYPROG</h2>
          </Style.HeaderBrand>
          <Style.HeaderActions>
            <Style.Keywords>Keywords</Style.Keywords>
            <Style.Login>Login</Style.Login>
          </Style.HeaderActions>
        </Style.Header>
        <Style.Content>
          <Style.Tab>
            <p>Página aberta</p>
            <Style.Close>X</Style.Close>
          </Style.Tab>
          <Style.HeadLine>
            <h2>Hey, Welcome!</h2>
            <h4>Escolha a linguagem.</h4>
            <Style.Robot>
              <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
            </Style.Robot>
          </Style.HeadLine>
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
