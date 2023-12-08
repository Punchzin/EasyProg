/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import * as Style from "./Auth.styles";
import EASYPROG_LOGO from "../../assets/images/easyprog-logo.svg";
import EASYPROG_ROBOT_SMILE from "../../assets/images/easybot-smile.svg";
import EASYPROG_ROBOT_DUBIOUS from "../../assets/images/easybot-dubious.svg";
import useAuth from "../../hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();

  const [passwordView, setPasswordView] = useState(false);
  const [passwordConfirmView, setPasswordConfirmView] = useState(false);

  const [inputReset, setInputReset] = useState("");

  const handleReset = () => {
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  };

  const {
    CanLogin,
    CanRegister,
    handleChangeForm,
    setIsRegister,
    isRegister,
    isLoading,
    setIsLoading,
    handleRegister,
    handleLogin,
    isFormEmpty,
  } = useAuth();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (isRegister) {
        await handleRegister();
        navigate("/overview");
      } else {
        await handleLogin();
        navigate("/overview");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const AUTHENTICATION_TITLE = !isRegister ? "Authentication" : "Registro";
  const AUTHENTICATION_DESCRIPTION = !isRegister
    ? "Autentique-se"
    : "Registre-se";
  const BUTTON_TEXT = !isRegister ? "Cadastrar-se" : "Fazer login";
  const EASYBOT_IMAGE = !isRegister
    ? EASYPROG_ROBOT_SMILE
    : EASYPROG_ROBOT_DUBIOUS;

  return (
    <Style.Main>
      <Style.GlobalStyles />
      <Style.Container>
        <Style.AuthenticationWrapper>
          <Style.AuthenticationBackground>
            <Style.Form>
              <Style.FormHeader>
                <Style.FormLogo>
                  <img src={EASYPROG_LOGO} alt="logo EasyProg" />
                </Style.FormLogo>
                <Style.FormHeaderText>
                  <p>EASYPROG</p>
                  <p>A Testing Tool</p>
                </Style.FormHeaderText>
              </Style.FormHeader>
              <Style.FormWrapper>
                <Style.FormAuthentication>
                  <Style.FormAuthenticationText>
                    <Style.Robot>
                      <img src={EASYBOT_IMAGE} alt="EasyBot" />
                    </Style.Robot>
                    <h1>{AUTHENTICATION_TITLE}</h1>
                    <p>
                      {AUTHENTICATION_DESCRIPTION} na plataforma para utilizar a
                      <strong>ferramenta</strong>.
                    </p>
                  </Style.FormAuthenticationText>
                  <Style.FormBody>
                    <Style.InputWrapper>
                      <Style.InputItem>
                        <i className="ri-at-line"></i>
                        <input
                          type="text"
                          placeholder="E-mail"
                          id="email"
                         
                          onChange={(e) =>
                            handleChangeForm("email", e.target.value)
                          }
                          required
                        />
                      </Style.InputItem>
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                      <Style.InputItem>
                        <i className="ri-lock-2-line"></i>
                        <input
                          type={!passwordView ? "password" : "text"}
                          placeholder="Password"
                
                          onChange={(e) =>
                            handleChangeForm("password", e.target.value)
                          }
                          id="password"
                          required
                        />
                        <Style.InputIconButton
                          onClick={() => setPasswordView((prev) => !prev)}
                        >
                          <i
                            className={
                              !passwordView ? "ri-eye-line" : "ri-eye-off-line"
                            }
                          ></i>
                        </Style.InputIconButton>
                      </Style.InputItem>
                    </Style.InputWrapper>
                    {isRegister && (
                      <React.Fragment>
                        <Style.InputWrapper>
                          <Style.InputItem>
                            <i className="ri-lock-2-line"></i>
                            <input
                              type={!passwordConfirmView ? "password" : "text"}
                              placeholder="Confirm password"
                              id="password"
                            
                              onChange={(e) =>
                                handleChangeForm(
                                  "passwordConfirm",
                                  e.target.value
                                )
                              }
                            />
                            <Style.InputIconButton
                              onClick={() =>
                                setPasswordConfirmView((prev) => !prev)
                              }
                            >
                              <i
                                className={
                                  !passwordConfirmView
                                    ? "ri-eye-line"
                                    : "ri-eye-off-line"
                                }
                              ></i>
                            </Style.InputIconButton>
                          </Style.InputItem>
                        </Style.InputWrapper>
                      </React.Fragment>
                    )}
                  </Style.FormBody> 
                </Style.FormAuthentication>
                <Style.FormButtons>
                  <Style.ButtonRegister
                    onClick={() => [setIsRegister((prev) => !prev), handleReset()]}
                  >
                    {BUTTON_TEXT}
                  </Style.ButtonRegister>
                  <Style.ButtonContinue
                    type="submit"
                    disabled={
                      isLoading ||
                      (isRegister && !CanRegister) ||
                      (!isRegister && !CanLogin)
                    }
                    onClick={() => handleSubmit()}
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={16}
                        classes={{ colorPrimary: "CircularProgressColor" }}
                      />
                    ) : (
                      "Continuar"
                    )}
                  </Style.ButtonContinue>
                </Style.FormButtons>
              </Style.FormWrapper>
            </Style.Form>
          </Style.AuthenticationBackground>
        </Style.AuthenticationWrapper>
      </Style.Container>
      <Style.MainBackground />
    </Style.Main>
  );
};

export default Auth;
