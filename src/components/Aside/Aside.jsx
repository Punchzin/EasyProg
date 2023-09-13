import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx";
import * as Style from "./Aside.styles";
import { useState } from "react";

const Aside = () => {
  const [fileIsSelected, setFileIsSelected] = useState(false);
  const [settingIsSelected, setSettingIsSelected] = useState(false);
  const [helpIsSelected, setHelpIsSelected] = useState(false);
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [pauseIsSelected, setPauseIsSelected] = useState(false);
  const [restartIsSelected, setRestartIsSelected] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(false);

  return (
    <Style.Aside>
      <Style.AsideWrapper>
        <Style.AsideBrand title="Página inicial">
          <img src={EASYPROG_BRAND} alt="LogoTipo EasyPog" />
        </Style.AsideBrand>
        <Style.ActionsWrapper>
          <Style.AsideDivider />
          <Style.AsideActions>
            <AsideAction
              actionIcon="ri-file-3-line"
              actionTitle="Arquivo"
              onClick={() => setFileIsSelected((prev) => !prev)}
              actionIsSelected={fileIsSelected}
            />
            <AsideAction
              actionIcon="ri-settings-3-line"
              actionTitle="Configurações"
              onClick={() => setSettingIsSelected((prev) => !prev)}
              actionIsSelected={settingIsSelected}
            />
            <AsideAction
              actionIcon="ri-question-line" 
              actionTitle="Ajuda" 
              onClick={() => setHelpIsSelected((prev) => !prev)}
              actionIsSelected={helpIsSelected}
            />
          </Style.AsideActions>
          <Style.AsideDivider />
          <Style.AsideActions>
            <AsideAction 
              actionIcon="ri-play-line" 
              actionTitle="Iniciar"
              onClick={() => setPlayIsSelected((prev) => !prev)}
              actionIsSelected={playIsSelected}
            />
            <AsideAction 
              actionIcon="ri-pause-fill" 
              actionTitle="Pausar" 
              onClick={() => setPauseIsSelected((prev) => !prev)}
              actionIsSelected={pauseIsSelected}
            />
            <AsideAction 
              actionIcon="ri-restart-line" 
              actionTitle="Reiniciar" 
              onClick={() => setRestartIsSelected((prev) => !prev)}
              actionIsSelected={restartIsSelected}
            />
          </Style.AsideActions>
        </Style.ActionsWrapper>
      </Style.AsideWrapper>
      <AsideAction
        actionIcon="ri-logout-box-r-line"
        actionTitle="Desconectar"
        onClick={() => setLogoutIsSelected((prev) => !prev)}
        actionIsSelected={logoutIsSelected}
      />
    </Style.Aside>
  );
};

export default Aside;
