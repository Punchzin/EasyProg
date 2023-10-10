import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./Aside.styles";
import handleCopyToAPI from "./texte";
import PopoverFile from "./Popovers/PopoverFile";
import './styles.css'

const Aside = () => {
  const navigate = useNavigate();


  const [helpIsSelected, setHelpIsSelected] = useState(false);
  const [playIsSelected, /*setPlayIsSelected*/] = useState(false);
  const [pauseIsSelected, setPauseIsSelected] = useState(false);
  const [restartIsSelected, setRestartIsSelected] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(false);


  const handleOpenTutorial = () => window.open('https://example.com/1234', '_blank')

  return (
    <Style.Aside>
      <Style.AsideWrapper>
        <Style.AsideBrand title="Página inicial">
          <img 
          src={EASYPROG_BRAND} 
          alt="LogoTipo EasyPog" 
          onClick={() => navigate('/overview')} 
          />
        </Style.AsideBrand>
        <Style.ActionsWrapper>
          <Style.AsideDivider />
          <Style.AsideActions>

            <PopoverFile />

            <AsideAction
              actionIcon="ri-question-line"
              actionTitle="Ajuda"
              onClick={() => [setHelpIsSelected((prev) => !prev), handleOpenTutorial()]}
              actionIsSelected={helpIsSelected}
            />
          </Style.AsideActions>
          <Style.AsideDivider />
          <Style.AsideActions>
            <AsideAction
              actionIcon="ri-play-line"
              actionTitle="Iniciar"
              onClick={handleCopyToAPI}
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
        onClick={() => [setLogoutIsSelected((prev) => !prev), navigate('/login')]}
        actionIsSelected={logoutIsSelected}
      />
    </Style.Aside>
  );
};

export default Aside;
