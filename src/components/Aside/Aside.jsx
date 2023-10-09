import React, {useState} from 'react';
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx";
import {useNavigate} from "react-router-dom";
import * as Style from "./Aside.styles";
// Importing an axios instance or the direct axios library itself
import axios from 'axios';
import PopoverFile from "./Popovers/PopoverFile";
import './styles.css'
import { useContext } from 'react';
import { CodeContext } from '../../pages/Code/Code';



const Aside = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState('');
  const [helpIsSelected, setHelpIsSelected] = useState(false);
  const [playIsSelected, /*setPlayIsSelected*/] = useState(false);
  const [pauseIsSelected, setPauseIsSelected] = useState(false);
  const [restartIsSelected, setRestartIsSelected] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(false);

  const handleOpenTutorial = () => window.open('https://www.youtube.com', '_blank');

  const ChildComponent = () => {
    const { handleCopyToAPI } = useContext(CodeContext);
  
    // Now you can use handleCopyToAPI() anywhere within this component
  }

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
              onClick={ChildComponent.handleCopyToAPI}
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