import { useState } from "react";
import AsideAction from "../AsideAction";
import { Popover } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Style from "./Popover.styles";
import "./MUIReset.css";

const PopoverFile = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsSelected(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsSelected(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <AsideAction
        actionIcon="ri-file-3-line"
        actionTitle="Arquivo"
        onClick={handleOpen}
        actionIsSelected={isSelected}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: "PaperResetMUI" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Style.WrapperButton>
          <Style.WrapperHeader>
            <Style.HeaderLabel>
              <i className="ri-file-text-line"></i>
              <p>Arquivos</p>
            </Style.HeaderLabel>
            <Style.HeaderAction onClick={handleClose}>
              <i className="ri-close-line"></i>
            </Style.HeaderAction>
          </Style.WrapperHeader>
          <Style.Buttons>
            <Style.Button onClick={() => navigate('/code')}>Novo arquivo</Style.Button>
            <Style.Button>
            <Style.ButtonUpload htmlFor="file-upload">Carregar arquivo</Style.ButtonUpload>
              <Style.InputUpload
                id="file-upload"
                type="file"
                style={{ display: "none" }}
              />
              </Style.Button>
            <Style.Button>Salvar arquivo</Style.Button>
          </Style.Buttons>
        </Style.WrapperButton>
      </Popover>
    </div>
  );
};

export default PopoverFile;
