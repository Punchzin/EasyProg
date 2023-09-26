import React from "react";
import { useState } from "react";
import AsideAction from "../AsideAction";
import { Popover } from "@mui/material";

const PopoverFile = () => {
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
    const id = open ? 'simple-popover' : undefined;

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
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
            >
               <button>Novo arquivo</button>
            </Popover>
        </div>
    )
}

export default PopoverFile;