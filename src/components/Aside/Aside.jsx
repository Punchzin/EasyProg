//import React, {useState} from 'react';
import "./styles.css";
import * as Style from "./Aside.styles";
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import EASYBOT_SAD from "../../assets/images/easybot-sad.svg";
import LANG_PY from "../../assets/images/langPy.svg";
import LANG_CS from "../../assets/images/langCs.svg";
import LANG_JS from "../../assets/images/langJs.svg";
import LANG_JV from "../../assets/images/langJv.svg";
import AsideAction from "./AsideAction.jsx";
import PopoverFile from "./Popovers/PopoverFile";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { LANGUAGES_AVAILABLE } from "../../config/language-config.js";
import useAuthContext from "../../hooks/useAuthContext.js";
import useCodeContext from "../../hooks/useCodeContext.js";
import useReaderFile from "../../hooks/useReaderFile.js";

const Aside = () => {
  const { handleSignOut } = useAuthContext();
  const { handleChangeLanguage } = useCodeContext();

  const { handleClearFile } =
    useReaderFile();

  const handleSelectLanguage = (language) => {
    handleChangeLanguage(language);
    handleClearFile();
    navigate("/code");
  };

  const handleHome = () => {
    handleClearFile();
    navigate("/overview");
  }

  const navigate = useNavigate();

  const [helpIsSelected, setHelpIsSelected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [langSelect, setLangSelect] = useState(false);

  const handleOpenTutorial = () =>
    window.open("https://youtu.be/JCVbpKzVvRI", "_blank");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Style.Aside>
      <Style.AsideWrapper>
        <Style.AsideBrand title="Página inicial">
          <img
            src={EASYPROG_BRAND}
            alt="LogoTipo EasyPog"
            onClick={handleHome}
          />
        </Style.AsideBrand>
        <Style.ActionsWrapper>
          <Style.AsideDivider />
          <Style.AsideActions>
            <PopoverFile />
            <AsideAction
              actionIcon="ri-question-line"
              actionTitle="Ajuda"
              onClick={() => [
                setHelpIsSelected((prev) => !prev),
                handleOpenTutorial(),
              ]}
              actionIsSelected={helpIsSelected}
            />
          </Style.AsideActions>
          <Style.AsideDivider />
          <Style.AsideActions>
            <Style.Lang
              onClick={() =>
                handleSelectLanguage(LANGUAGES_AVAILABLE.python.language)
              }
            >
              <img src={LANG_PY} alt="Linguagem Python" />
            </Style.Lang>
          </Style.AsideActions>
          <Style.AsideActions>
            <Style.Lang
              onClick={() =>
                handleSelectLanguage(LANGUAGES_AVAILABLE.csharp.language)
              }
            >
              <img src={LANG_CS} alt="Linguagem Csharp" />
            </Style.Lang>
          </Style.AsideActions>
          <Style.AsideActions>
            <Style.Lang
              onClick={() =>
                handleSelectLanguage(LANGUAGES_AVAILABLE.java.language)
              }
            >
              <img src={LANG_JV} alt="Linguagem Java" />
            </Style.Lang>
          </Style.AsideActions>
          <Style.AsideActions>
            <Style.Lang
              onClick={() =>
                handleSelectLanguage(LANGUAGES_AVAILABLE.javascript.language)
              }
            >
              <img src={LANG_JS} alt="Linguagem JavaScript" />
            </Style.Lang>
          </Style.AsideActions>
          <Style.AsideDivider />
        </Style.ActionsWrapper>
      </Style.AsideWrapper>

      <AsideAction
        actionIcon="ri-logout-box-r-line"
        actionTitle="Desconectar"
        onClick={handleOpen}
      />
      <Dialog
        onClose={handleClose}
        open={open}
        classes={{ paper: "ResetMUIPaper" }}
      >
        <Style.ExitConfirm>
          <Style.Robot>
            <img src={EASYBOT_SAD} alt="EasyBot normal" />
          </Style.Robot>
          <p>Você realmente deseja sair da conta?</p>
          <Style.ButtonsConfirm>
            <Style.ButtonClose onClick={handleClose}>Não</Style.ButtonClose>
            <Style.ButtonContinue
              onClick={() => (handleSignOut(), navigate("/auth"))}
            >
              Sim
            </Style.ButtonContinue>
          </Style.ButtonsConfirm>
        </Style.ExitConfirm>
      </Dialog>
    </Style.Aside>
  );
};

export default Aside;
