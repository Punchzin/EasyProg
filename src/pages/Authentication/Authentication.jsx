import React from 'react'
import * as Style from "./Authentication.styles";
import EASYPROG_LOGO from "../../assets/images/easyprog-logo.svg"
import EASYPROG_ROBOT from "../../assets/images/easybot.svg"

const Authentication = () => {
    // Insert javascript here
    return (
        <Style.Main>
            <Style.Container>
                <Style.AuthenticationWrapper>
                    <Style.AuthenticationBackground>
                        <Style.Form>
                            <Style.FormHeader>
                                <Style.FormLogo >
                                    <img src={EASYPROG_LOGO} alt="logo EasyProg" />
                                </Style.FormLogo>
                                <Style.FormHeaderText>
                                    <p>EASYPROG</p>
                                    <p>A Testing Framework</p>
                                </Style.FormHeaderText>
                            </Style.FormHeader>
                            <Style.FormWrapper>
                                <Style.FormAuthentication>
                                    <Style.FormAuthenticationText>
                                        <img src={EASYPROG_ROBOT} alt="EasyBot" />
                                        <h1>Authentication</h1>
                                        <p>Autentique-se na plataforma para utilizar as <strong>ferramentas</strong>.</p>
                                    </Style.FormAuthenticationText>
                                    <Style.FormBody>
                                        <Style.InputWrapper>
                                            <Style.InputLabel htmlFor='username'>Username</Style.InputLabel>
                                            <Style.InputItem>
                                                <i class="ri-user-line"></i>
                                                <input type="text" placeholder='User' id='username' />
                                            </Style.InputItem>
                                        </Style.InputWrapper>
                                        <Style.InputWrapper>
                                            <Style.InputLabel htmlFor='password'>Senha</Style.InputLabel>
                                            <Style.InputItem>
                                                <i class="ri-lock-2-line"></i>
                                                <input
                                                    type="text"
                                                    placeholder='User'
                                                    id='password'
                                                />
                                                <i class="ri-eye-line"></i>
                                            </Style.InputItem>
                                        </Style.InputWrapper>
                                        <Style.FormCheck>
                                            <input
                                                type="checkbox"
                                                name='KeepConnected'
                                                id='KeepConnected'
                                            />
                                            <label htmlFor="KeepConnected">
                                                <i class="ri-check-line"></i>
                                            </label>
                                            <p>Manter-se conectado</p>
                                        </Style.FormCheck>
                                    </Style.FormBody>
                                </Style.FormAuthentication>
                                <Style.FormButtons>
                                    <Style.ButtonRegister>
                                        Cadastrar-se
                                    </Style.ButtonRegister>
                                    <Style.ButtonContinue>
                                        Continuar
                                    </Style.ButtonContinue>
                                </Style.FormButtons>
                            </Style.FormWrapper>
                        </Style.Form>
                    </Style.AuthenticationBackground>
                </Style.AuthenticationWrapper>
            </Style.Container>
            <Style.MainBackground/>
        </Style.Main>
    )
}

export default Authentication;