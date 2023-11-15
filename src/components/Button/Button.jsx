/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import * as Styles from "./Button.styles";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";

const Button = ({
  label,
  variant = "default",
  fullyWidth,
  onClick,
  leftIcon,
  rightIcon,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      {variant === "default" && (
        <Styles.Button
          onClick={onClick}
          style={{ width: fullyWidth ? "100%" : "initial" }}
          disabled={isDisabled}
          as={motion.button}
          variants={Fade.ChildFade}
        >
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
        </Styles.Button>
      )}
    </React.Fragment>
  );
};

export default Button;
