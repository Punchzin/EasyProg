import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Style from "./Authentication.styles";
import EASYPROG_LOGO from "../../assets/images/easyprog-logo.svg";
import EASYPROG_ROBOT_SMILE from "../../assets/images/easybot-smile.svg";
import EASYPROG_ROBOT_DUBIOUS from "../../assets/images/easybot-dubious.svg";
// import { auth } from "../../services/firebaseConfig";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
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
              <img src={EASYPROG_ROBOT_SMILE} alt="EasyBot" onClick={() => navigate("/overview")} />
            </Style.Robot>
            <h1>Authentication</h1>
            <p>Autentique-se na plataforma para utilizar a <strong>ferramenta</strong>.</p>
          </Style.FormAuthenticationText>
          <Style.FormBody>
            <Style.InputWrapper>
              <Style.InputLabel htmlFor="email">Email</Style.InputLabel>
              <Style.InputItem>
                <i className="ri-mail-line"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Style.InputItem>
            </Style.InputWrapper>
            <Style.InputWrapper>
              <Style.InputLabel htmlFor="password">Password</Style.InputLabel>
              <Style.InputItem>
                <i className="ri-lock-2-line"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Style.InputItem>
            </Style.InputWrapper>
          </Style.FormBody>
        </Style.FormAuthentication>
        <Style.FormButtons>
          <Style.ButtonRegister onClick={() => navigate("/register")}>
            Register
          </Style.ButtonRegister>
          <Style.ButtonContinue onClick={handleLogin}>
            Login
          </Style.ButtonContinue>
        </Style.FormButtons>
      </Style.FormWrapper>
    </Style.Form>
  );
};

export default Login;
