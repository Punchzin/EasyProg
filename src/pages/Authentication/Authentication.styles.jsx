import { styled } from "styled-components";
import backgroundRobots from "../../assets/images/robots-background.svg"

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: #0F1923;
`;

export const MainBackground = styled.div `
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 50vh;
    background-color: #0C1218;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    z-index: 999;
`;

export const AuthenticationWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AuthenticationBackground = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundRobots});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Form = styled.div`
    background-image: url(${backgroundRobots});
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const FormLogo = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #19242F;
    border: 1px solid rgba(50, 59, 69, .8);
`;

export const FormHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    :nth-child(1) {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 124%;
    }

    :nth-child(2) {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 124%; /* 14.88px */
    }
`;

export const FormWrapper = styled.div`
    width: 420px;
    border-radius: 8px;
    border: 1px solid rgba(50, 59, 69, 0.80);
    background: #19242F;
    box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.11);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    overflow: hidden;
`;

export const FormAuthentication = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const FormAuthenticationText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    
    h1 {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        color: #FFF;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        max-width: 230px;
    }
`;

export const FormBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
`;

export const InputLabel = styled.label`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

export const InputItem = styled.div`
    display: flex;
    width: 100%;
    padding: 14px 12px;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: 1px solid rgba(50, 59, 69, 0.80);
    background: #0C1218;
    overflow: hidden;
    transition: all 0.3s;

    i {
        font-size: 16px;
        color: #515C67;
        transition: all 0.3s;
    }

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        ::placeholder {
            color: #515C67;
            font-weight: 500;
        }
    }

    &:focus-within {
        border-color: #0BF0D5;
        i {color: #0BF0D5;}
    }
`;

export const InputIconButton = styled.button `
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const FormCheck = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    input[type="checkbox"] {
        display: none;

        + label {
            position: relative;
            cursor: pointer;
            width: 16px;
            height: 16px;
            border: 1px solid rgba(50, 59, 69, 0.80);
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 32px;
            overflow: hidden;
        }

        + label i {
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 12px;
            width: 45%;
            height: 45%;
            text-align: center;
            border-radius: 32px;
        }

        &:checked + label i {
            opacity: 1;
            background-color: #0BF0D5;
            border-color: #0BF0D5;
        }
    }

    p {
        color: #ffffff;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
    }
`;

export const FormButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonRegister = styled.button`
    background: transparent;
    border: none;
    outline: none;
    color: #0BF0D5;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    cursor: pointer;
`;

export const ButtonContinue = styled.button`
    border: none;
    outline: none;
    display: flex;
    width: 96px;
    height: 31px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 64px;
    background: #0BF0D5;
    color: #0C1218;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;
