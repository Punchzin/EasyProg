import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx";
import handleCopyToAPI from "./texte";
import * as Style from "./Aside.styles";
import { useState } from "react";
import './styles.css'
import PopoverFile from "./Popovers/PopoverFile";
import express from 'express';
import fs from 'fs';

const Aside = () => {
  const [settingIsSelected, setSettingIsSelected] = useState(false);
  const [helpIsSelected, setHelpIsSelected] = useState(false);
  const [playIsSelected, setPlayIsSelected] = useState(false);
  const [pauseIsSelected, setPauseIsSelected] = useState(false);
  const [restartIsSelected, setRestartIsSelected] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(false);

  const [fileModalIsOpen, setFileModalIsOpen] = useState(false);
  const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);


 
  const app = express();
  
  app.post('/api/save-python-file', (req, res) => {
    const { content } = req.body; // Conteúdo do arquivo Python enviado pelo cliente
  
    fs.writeFile('../../API/arquivo.py', content, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar o arquivo Python.');
      } else {
        res.send('Arquivo Python salvo com sucesso.');
      }
    });
  });
  
  app.listen(3000, () => {
    console.log('Servidor backend está rodando na porta 3000.');
  });


  return (
    <Style.Aside>
      <Style.AsideWrapper>
        <Style.AsideBrand title="Página inicial">
          <img src={EASYPROG_BRAND} alt="LogoTipo EasyPog" />
        </Style.AsideBrand>
        <Style.ActionsWrapper>
          <Style.AsideDivider />
          <Style.AsideActions>

            <PopoverFile />

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
        onClick={() => setLogoutIsSelected((prev) => !prev)}
        actionIsSelected={logoutIsSelected}
      />
    </Style.Aside>
  );
};

export default Aside;
