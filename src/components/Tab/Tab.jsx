import { Dialog } from "@mui/material";
import * as Style from "./Tab.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import Chooser from "../Chooser/Chooser";

const Tab = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Style.TabWrapper>
      <Style.GlobalStyles />
      <p>Página aberta</p>
      <Style.Close onClick={handleOpen}>
        <i className="ri-close-line"></i>
      </Style.Close>
      <Dialog onClose={handleClose} open={open} classes={{ paper: 'ResetMUIPaper' }}>
        <Style.CloseConfirm>
          <Style.Robot>
            <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
          </Style.Robot>
          <p>Você realmente deseja fechar o arquivo?</p>
          <Style.ButtonsConfirm>
            <Style.ButtonClose onClick={handleClose}>Não</Style.ButtonClose>
            <Style.ButtonContinue onClick={() => navigate("/overview")}>Sim</Style.ButtonContinue>
          </Style.ButtonsConfirm>
        </Style.CloseConfirm>
      </Dialog>
    </Style.TabWrapper>
  );
};

export default Tab;