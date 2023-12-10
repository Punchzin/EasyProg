import * as Styles from "./Auth.styles";
import EASY_LOGO from "../../assets/images/easyprog-logo.svg";
import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import Input from "./Spare/Input";
import useRegexForm from "../../hooks/useRegexForm";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";
import Progress from "./Spare/Progress";
import useAuthContext from "../../hooks/useAuthContext";

const AUTH_DICTIONARY = {
  CHOOSE: 0,
  LOGIN: 1,
  REGISTER: 2,
};

const Auth = () => {
  const [currentAuth, setCurrentAuth] = useState(AUTH_DICTIONARY.CHOOSE);

  const isLogin = currentAuth === AUTH_DICTIONARY.LOGIN;
  const isRegister = currentAuth === AUTH_DICTIONARY.REGISTER;

  const {
    form,
    handleResetForm,
    handleCheckField,
    currentPaswordStepSecurity,
  } = useRegexForm();

  const { setForm, handleRegister, handleLogin, isLoading } = useAuthContext();

  useEffect(() => {
    setForm(form);
  }, [setForm, form]);

  const handleChoose = (auth) => {
    handleResetForm();
    setCurrentAuth(auth);
  };

  return (
    <Styles.Wrapper>
      <Styles.Container
        as={motion.div}
        variants={Fade.ParentFade}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Styles.Box
          as={motion.div}
          variants={Fade.ParentFade}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.img
            src={EASY_LOGO}
            alt="Easy Logo"
            variants={Fade.ChildFade}
          />
          <Styles.Form
            as={motion.div}
            variants={Fade.ParentFade}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Styles.FormHeader as={motion.div} variants={Fade.ChildFade}>
              <h2>Welcome</h2>
              <span />
              <h3>.dev</h3>
            </Styles.FormHeader>
            <Styles.FormBody as={motion.div} variants={Fade.ChildFade}>
              {currentAuth === AUTH_DICTIONARY.CHOOSE && (
                <Styles.FormChoose>
                  <Button
                    label="Login"
                    fullyWidth
                    onClick={() => handleChoose(AUTH_DICTIONARY.LOGIN)}
                  />
                  <Button
                    label="Register"
                    fullyWidth
                    onClick={() => handleChoose(AUTH_DICTIONARY.REGISTER)}
                  />
                </Styles.FormChoose>
              )}

              {currentAuth === AUTH_DICTIONARY.LOGIN && (
                <Styles.FormGroup
                  as={motion.div}
                  variants={Fade.ParentFade}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Input
                    type="email"
                    placeholder="E-mail"
                    leftIcon="ri-at-line"
                    required
                    hasCheck
                    onChange={(e) => handleCheckField("email", e.target.value)}
                    completed={form.email.isValid}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    leftIcon="ri-lock-password-line"
                    hasPasswordView
                    required
                    hasCheck
                    onChange={(e) =>
                      handleCheckField("password", e.target.value)
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleLogin();
                      }
                    }}
                    completed={form.password.isValid}
                  />
                  <Styles.FormFooter>
                    <Button
                      isLoading={isLoading}
                      label="Continue"
                      fullyWidth
                      isDisabled={!form.email.isValid || !form.password.isValid}
                      onClick={handleLogin}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleLogin();
                        }
                      }}
                    />
                  </Styles.FormFooter>
                </Styles.FormGroup>
              )}

              {currentAuth === AUTH_DICTIONARY.REGISTER && (
                <Styles.FormGroup
                  as={motion.div}
                  variants={Fade.ParentFade}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Input
                    type="email"
                    placeholder="E-mail"
                    leftIcon="ri-at-line"
                    required
                    hasCheck
                    onChange={(e) => handleCheckField("email", e.target.value)}
                    completed={form.email.isValid}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    leftIcon="ri-lock-password-line"
                    hasPasswordView
                    required
                    hasCheck
                    onChange={(e) =>
                      handleCheckField("password", e.target.value)
                    }
                    completed={form.password.isValid}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    leftIcon="ri-lock-password-line"
                    hasPasswordView
                    required
                    hasCheck
                    onChange={(e) =>
                      handleCheckField("confirmPassword", e.target.value)
                    }
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleRegister();
                      }
                    }}
                    completed={form.confirmPassword.isValid}
                  />
                  <Progress step={currentPaswordStepSecurity} />
                  <Styles.FormFooter>
                    <Button
                      isLoading={isLoading}
                      label="Continue"
                      fullyWidth
                      isDisabled={
                        !form.email.isValid ||
                        !form.password.isValid ||
                        !form.confirmPassword.isValid
                      }
                      onClick={handleRegister}
                    />
                  </Styles.FormFooter>
                </Styles.FormGroup>
              )}
            </Styles.FormBody>
          </Styles.Form>
        </Styles.Box>
        <Styles.Footer as={motion.div} variants={Fade.ChildFade}>
          <a href="/">Voltar para a home</a>
          {(isLogin || isRegister) && (
            <React.Fragment>
              <span />
              <a
                onClick={() =>
                  handleChoose(
                    isLogin ? AUTH_DICTIONARY.REGISTER : AUTH_DICTIONARY.LOGIN
                  )
                }
              >
                {isLogin ? "Registrar-se" : "Login"}
              </a>
            </React.Fragment>
          )}
        </Styles.Footer>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default Auth;
