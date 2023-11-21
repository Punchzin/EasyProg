import { useState } from "react";
import { Popover } from "@mui/material";

import { useNavigate } from "react-router-dom";
import AsideAction from "../AsideAction";
import * as Style from "./Popover.styles";
import "./MUIReset.css";

const PopoverFile = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isSelected, setIsSelected] = useState(false);


  //função para salvar o arquivo
  //data = para ser introduzido o conteúdo, no caso a variavel do input
  //filename = nome padrão que terá(alteravel)
  //blob = para salvar os dados existentes
  //url = url para o blob usar, usando ela na interface em forma de btão ou link tb
  // a = criando um elemento

  const saveFile = (data, filename) => {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  const handleSaveFile = () => {
    const data = 'algo';
    const filename = 'arquivo.txt';
    saveFile(data, filename);
  } 


  const handleReaderFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      (content);
    };

    reader.readAsText(file);

  }


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
                onChange={handleReaderFile}
                style={{ display: "none" }}
              />
              </Style.Button>
            <Style.Button onClick={handleSaveFile}>Salvar arquivo</Style.Button>
          </Style.Buttons>
        </Style.WrapperButton>
      </Popover>
    </div>
  );
};

export default PopoverFile;
