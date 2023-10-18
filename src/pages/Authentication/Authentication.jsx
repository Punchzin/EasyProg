/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Style from "./Authentication.styles";
import EASYPROG_LOGO from "../../assets/images/easyprog-logo.svg";
import EASYPROG_ROBOT_SMILE from "../../assets/images/easybot-smile.svg";
import EASYPROG_ROBOT_DUBIOUS from "../../assets/images/easybot-dubious.svg";

const Authentication = () => {
  const navigate = useNavigate();

  const [screen, setScreen] = useState(0);
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPasswordField, setConfirmPasswordField] = useState("");

  const [passwordView, setPasswordView] = useState(false);
  const [passwordConfirmView, setPasswordConfirmView] = useState(false);

  const isRegister = screen == 1;  

  const AUTHENTICATION_TITLE = !isRegister ? "Authentication" : "Registro";
  const AUTHENTICATION_DESCRIPTION = !isRegister ? "Autentique-se" : "Registre-se";
  const BUTTON_TEXT = !isRegister ? "Cadastrar-se" : "Fazer login";
  const EASYBOT_IMAGE = !isRegister
    ? EASYPROG_ROBOT_SMILE
    : EASYPROG_ROBOT_DUBIOUS;

  return (
    <Style.Main>
      <Style.Container>
        <Style.AuthenticationWrapper>
          <Style.AuthenticationBackground>
            <Style.Form>
              <Style.FormHeader>
                <Style.FormLogo>
                  <img src={EASYPROG_LOGO} alt="logo EasyProg"/>
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
                    <img src={EASYBOT_IMAGE} alt="EasyBot" onClick={() => navigate("/overview")}/>
                    </Style.Robot>
                    <h1>{AUTHENTICATION_TITLE}</h1>
                    <p>
                      {AUTHENTICATION_DESCRIPTION} na plataforma para utilizar a{" "}
                      <strong>ferramenta</strong>.
                    </p>
                  </Style.FormAuthenticationText>
                  <Style.FormBody>
                    <Style.InputWrapper>
                      <Style.InputLabel htmlFor="username">
                        Username
                      </Style.InputLabel>
                      <Style.InputItem>
                        <i className="ri-user-line"></i>
                        <input
                          type="text"
                          placeholder="User"
                          id="username"
                          onChange={(e) => setUsernameField(e.target.value)}
                        />
                      </Style.InputItem>
                    </Style.InputWrapper>
                    <Style.InputWrapper>
                      <Style.InputLabel
                        htmlFor="password"
                        onChange={(e) => setPasswordField(e.target.value)}
                      >
                        Senha
                      </Style.InputLabel>
                      <Style.InputItem>
                        <i className="ri-lock-2-line"></i>
                        <input
                          type={!passwordView ? "password" : "text"}
                          placeholder="Password"
                          id="password"
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
                      <Style.InputWrapper>
                        <Style.InputLabel htmlFor="password">
                          Confimar senha
                        </Style.InputLabel>
                        <Style.InputItem>
                          <i className="ri-lock-2-line"></i>
                          <input
                            type={!passwordConfirmView ? "password" : "text"}
                            placeholder="Confirm password"
                            id="password"
														onChange={(e) => setConfirmPasswordField(e.target.value)}
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
                    )}
                    {/* {!isRegister && (
                      <Style.FormCheck>
                        <input
                          type="checkbox"
                          name="KeepConnected"
                          id="KeepConnected"
                        />
                        <label htmlFor="KeepConnected">
                          <i className="ri-check-line"></i>
                        </label>
                        <p>Manter-se conectado</p>
                      </Style.FormCheck>
                    )} */}
                  </Style.FormBody>
                </Style.FormAuthentication>
                <Style.FormButtons>
                  <Style.ButtonRegister
                    onClick={() => setScreen((prev) => !prev)}
                  >
                    {BUTTON_TEXT}
                  </Style.ButtonRegister>
                
                  <Style.ButtonContinue>Continuar</Style.ButtonContinue>
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

export default Authentication;
