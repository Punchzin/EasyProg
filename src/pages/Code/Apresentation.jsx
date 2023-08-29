import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import * as Style from "./Apresentation.styles";

const Apresentation = () => {
  // Insira seu javascript aqui
  return (
    <main>
      <aside>
        <Style.AsideWrapper>
          <Style.AsideBrand>
            <img src={EASYPROG_BRAND} alt="LogoTipo EasyPog" />
          </Style.AsideBrand>
          <Style.AsideDivider>___</Style.AsideDivider>
          <Style.AsideActions>
            <Style.AsideAction>
              {/* File */}
              <i className="ri-file-3-line"></i>
            </Style.AsideAction>
            <Style.AsideAction>
              {/* Configuration */}
              <i className="ri-settings-3-line"></i>
            </Style.AsideAction>
            <Style.AsideAction>
              {/*Help*/}
              <i className="ri-question-line"></i>
            </Style.AsideAction>
          </Style.AsideActions>
          <Style.AsideDivider>___</Style.AsideDivider>
          <Style.AsideActions>
            <Style.AsideAction>
              {/*Run*/}
              <i className="ri-play-line"></i>
              </Style.AsideAction>
            <Style.AsideAction>
              {/*Pause*/}
              <i className="ri-pause-fill"></i>
              </Style.AsideAction>
            <Style.AsideAction>
              {/*Reload*/}
              <i className="ri-restart-line"></i>
              </Style.AsideAction>
          </Style.AsideActions>
        </Style.AsideWrapper>
        <Style.AsideAction>
          {/*Logout*/}
          <i className="ri-logout-box-r-line"></i>
          </Style.AsideAction>
      </aside>
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
    </main>
  );
};

export default Apresentation;
