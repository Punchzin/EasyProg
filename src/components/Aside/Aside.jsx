//import React, {useState} from 'react';
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import EASYBOT_SAD from "../../assets/images/easybot-sad.svg";
import LANG_PY from "../../assets/images/langPy.svg";
import AsideAction from "./AsideAction.jsx";
import { logout } from "../../firebase/firebase.js"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog } from "@mui/material";
// import { motion } from "framer-motion";
import * as Style from "./Aside.styles";
import PopoverFile from "./Popovers/PopoverFile";
import "./styles.css";
// import Fade from "../../global/Transitions/Fade";
// Importing an axios instance or the direct axios library itself
//import axios from 'axios';
//import { useContext } from 'react';
//import { CodeContext } from '../../pages/Code/Code';

const Aside = () => {
  const navigate = useNavigate();

  //const [formValue, setFormValue] = useState('');
  const [helpIsSelected, setHelpIsSelected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [langSelect, setLangSelect] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(logout);

  const handleOpenTutorial = () =>
    window.open("https://www.youtube.com", "_blank");

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
            onClick={() => navigate("/overview")}
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
            <Style.LangPy>
              <img src={LANG_PY} alt="Linguagem Python" 
              onClick={() => (setLangSelect((prev) => !prev), 
              navigate("/code"))}/>
            </Style.LangPy>
          </Style.AsideActions>
          <Style.AsideDivider />
        </Style.ActionsWrapper>
      </Style.AsideWrapper>

      <AsideAction
        actionIcon="ri-logout-box-r-line"
        actionTitle="Desconectar"
        onClick={handleOpen}
        actionIsSelected={logoutIsSelected}
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
            <Style.ButtonClose
              onClick={() => (
                setLogoutIsSelected((prev) => !prev), navigate("/auth")
              )}
            >
              Sim
            </Style.ButtonClose>
            <Style.ButtonContinue onClick={handleClose}>
              Não
            </Style.ButtonContinue>
          </Style.ButtonsConfirm>
        </Style.ExitConfirm>
      </Dialog>
    </Style.Aside>
  );
};

export default Aside;
