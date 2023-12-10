/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import * as Styles from "./Button.styles";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";
import CircularProgress from '@mui/material/CircularProgress';

const Button = ({
  label,
  variant = "default",
  fullyWidth,
  onClick,
  leftIcon,
  rightIcon,
  isDisabled,
  isLoading,
}) => {
  return (
    <React.Fragment>
      {variant === "default" && (
        <Styles.Button
          as={motion.button}
          onClick={onClick}
          style={{ width: fullyWidth ? "100%" : "initial" }}
          disabled={isDisabled || isLoading}
          variants={Fade.ChildFade}
        >
          {!isLoading && (
            <React.Fragment>
              {leftIcon && (
                <Styles.Icon>
                  <i className={leftIcon}></i>
                </Styles.Icon>
              )}
              {label}
              {rightIcon && (
                <Styles.Icon>
                  <i className={rightIcon}></i>
                </Styles.Icon>
              )}
            </React.Fragment>
          )}

          {isLoading && (
            <CircularProgress size={16} />
          )}
        </Styles.Button>
      )}
    </React.Fragment>
  );
};

export default Button;
