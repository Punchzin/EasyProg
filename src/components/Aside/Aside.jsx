import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx"
import * as Style from "./Aside.styles";

const Aside = () => {
  return (
    <Style.Aside>
      <Style.AsideWrapper>
        <Style.AsideBrand title="Página inicial">
          <img src={EASYPROG_BRAND} alt="LogoTipo EasyPog" />
        </Style.AsideBrand>
        <Style.ActionsWrapper>
          <Style.AsideDivider />
          <Style.AsideActions>
            <AsideAction actionIcon="ri-file-3-line" actionTitle="Arquivo" actionIsSelected />
            <AsideAction actionIcon="ri-settings-3-line" actionTitle="Configurações" />
            <AsideAction actionIcon="ri-question-line" actionTitle="Ajuda" />
          </Style.AsideActions>
          <Style.AsideDivider />
          <Style.AsideActions>
            <AsideAction actionIcon="ri-play-line" actionTitle="Iniciar" />
            <AsideAction actionIcon="ri-pause-fill" actionTitle="Pausar"/>
            <AsideAction actionIcon="ri-restart-line" actionTitle="Reiniciar" />
          </Style.AsideActions>
        </Style.ActionsWrapper>
      </Style.AsideWrapper>
      <AsideAction actionIcon="ri-logout-box-r-line" actionTitle="Desconectar" />
    </Style.Aside>
  );
};

export default Aside;
