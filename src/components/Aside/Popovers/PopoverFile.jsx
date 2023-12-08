import { useState } from "react";
import { Popover } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AsideAction from "../AsideAction";
import useReaderFile from "../../../hooks/useReaderFile";
import * as Style from "./Popover.styles";
import "./MUIReset.css";

//função para salvar o arquivo
//data = para ser introduzido o conteúdo, no caso a variavel do input
//filename = nome padrão que terá(alteravel)
//blob = para salvar os dados existentes
//url = url para o blob usar, usando ela na interface em forma de btão ou link tb
// a = criando um elemento

const PopoverFile = () => {
  const navigate = useNavigate();
  const { handleDownloadFile, handleReadFile, handleClearFile } =
    useReaderFile();

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

  const handleNewFile = () => {
    handleClearFile();
    navigate("/code");
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
            <Style.Button onClick={() => handleNewFile()}>
              Novo arquivo
            </Style.Button>
            <Style.Button>
              <Style.ButtonContainer>
                Carregar Arquivo
                <Style.ButtonUpload
                  type="file"
                  onChange={(event) => handleReadFile(event)}
                />
              </Style.ButtonContainer>
              <Style.InputUpload
                id="file-upload"
                type="file"
                style={{ display: "none" }}
              />
            </Style.Button>
            <Style.Button onClick={handleDownloadFile}>
              Salvar arquivo
            </Style.Button>
          </Style.Buttons>
        </Style.WrapperButton>
      </Popover>
    </div>
  );
};

export default PopoverFile;
