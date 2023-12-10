/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Styles from "../Auth.styles";
import Check from "./Check";
import { motion } from "framer-motion";
import Fade from "../../../global/Transitions/Fade";

const Input = ({
  type,
  onChange,
  leftIcon,
  rightIcon,
  hasPasswordView,
  placeholder,
  required,
  hasCheck,
  completed = false,
  ...rest
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <Styles.InputWrapper as={motion.div} variants={Fade.ChildFade}>
      <Styles.InputSide>
        {leftIcon && (
          <Styles.InputIcon>
            <i className={leftIcon}></i>
          </Styles.InputIcon>
        )}
      </Styles.InputSide>
      <Styles.Input
        type={viewPassword ? "text" : type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
      <Styles.InputSide>
        {hasPasswordView && (
          <Styles.InputIcon>
            <button onClick={handleViewPassword}>
              <i
                className={viewPassword ? "ri-eye-line" : "ri-eye-off-line"}
              ></i>
            </button>
          </Styles.InputIcon>
        )}
        {rightIcon && (
          <Styles.InputIcon>
            <i className={rightIcon}></i>
          </Styles.InputIcon>
        )}
        {hasCheck && <Check completed={completed} />}
      </Styles.InputSide>
    </Styles.InputWrapper>
  );
};

export default Input;
