//import React, {useState} from 'react';
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import AsideAction from "./AsideAction.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Style from "./Aside.styles";
import PopoverFile from "./Popovers/PopoverFile";
import "./styles.css";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";
// Importing an axios instance or the direct axios library itself
//import axios from 'axios';
//import { useContext } from 'react';
//import { CodeContext } from '../../pages/Code/Code';

const Aside = () => {
  const navigate = useNavigate();

  //const [formValue, setFormValue] = useState('');
  const [helpIsSelected, setHelpIsSelected] = useState(false);
  const [logoutIsSelected, setLogoutIsSelected] = useState(false);

  const handleOpenTutorial = () =>
    window.open("https://www.youtube.com", "_blank");

  return (
    <motion.div
      variants={Fade.ParentFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Style.Aside>
        <Style.AsideWrapper>
          <motion.div
            variants={Fade.ParentFade}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={Fade.ChildFade}>
              <Style.AsideBrand title="Página inicial">
                <img
                  src={EASYPROG_BRAND}
                  alt="LogoTipo EasyPog"
                  onClick={() => navigate("/overview")}
                />
              </Style.AsideBrand>
            </motion.div>
          </motion.div>
          <Style.ActionsWrapper>
            <motion.div variants={Fade.ChildFade}>
              <Style.AsideDivider />
            </motion.div>
            <Style.AsideActions>
              <motion.div variants={Fade.ChildFade}>
                <PopoverFile />
              </motion.div>

              <motion.div variants={Fade.ChildFade}>
                <AsideAction
                  actionIcon="ri-question-line"
                  actionTitle="Ajuda"
                  onClick={() => [
                    setHelpIsSelected((prev) => !prev),
                    handleOpenTutorial(),
                  ]}
                  actionIsSelected={helpIsSelected}
                />
              </motion.div>
            </Style.AsideActions>
            <motion.div variants={Fade.ChildFade}>
              <Style.AsideDivider />
            </motion.div>
          </Style.ActionsWrapper>
        </Style.AsideWrapper>
        <motion.div variants={Fade.ChildFade}>
          <AsideAction
            actionIcon="ri-logout-box-r-line"
            actionTitle="Desconectar"
            onClick={() => [
              setLogoutIsSelected((prev) => !prev),
              navigate("/login"),
            ]}
            actionIsSelected={logoutIsSelected}
          />
        </motion.div>
      </Style.Aside>
    </motion.div>
  );
};

export default Aside;
