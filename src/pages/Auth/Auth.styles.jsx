import styled from "styled-components";
import BACKGROUND_PRESET from "../../assets/images/background-preset2.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${BACKGROUND_PRESET});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #0c1218;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  max-width: 300px;
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 2rem;
    height: 2rem;
    filter: drop-shadow(0px 5px 10px rgba(11, 240, 213, .3));
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: #fff;
    text-align: center;
    font-family: "Space Grotesk", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    letter-spacing: -1.44px;
  }

  span {
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
  }

  h3 {
    color: #717f8d;
    text-align: center;
    font-family: "Space Grotesk", sans-serifF;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -1.44px;
  }
`;

export const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormChoose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #717f8d;
    font-family: "Space Grotesk", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-decoration-line: underline;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #fff;
    }
  }

  span {
    width: 4px;
    height: 4px;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormFooter = styled.div`
  width: 100%;
  margin-top: .5rem;
`;

// Spare input

export const InputSide = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 0.5rem;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    color: #252d35;
    font-size: 1rem;
    transition: all 0.3s;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(50, 59, 69, 0.4);
  background: #0c1218;
  box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.16);
  height: 48px;
  transition: all 0.3s;

  &:focus-within {
    border-color: rgba(50, 59, 69, 1);

    ${InputSide} ${InputIcon} i {
      color: rgba(50, 59, 69, 1) !important;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;

  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  &::placeholder {
    color: #323b45;
  }
`;

// Spare check

export const CheckWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.completed ? "#8BDE6E" : "#252D35")};
  background: ${(props) =>
    props.completed ? "rgba(139, 222, 110, 0.20)" : "rgba(37, 45, 53, 0.20)"};
  box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.16);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  i {
    color: ${(props) => (props.completed ? "#8BDE6E" : "#252D35")};
    font-size: 1rem;
    transition: all 0.3s;
  }
`;

// Spare progress

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const stepBackgrounds = {
  nothing: "rgba(255, 255, 255, 0.1)",
  bad: "#FF4D4D",
  medium: "#FFC700",
  good: "#8BDE6E",
  strong: "#8BDE6E",
};

const background = (props) => stepBackgrounds[props.currentStep] || "#0B5F6C";

export const ProgressBar = styled.div`
  flex: 1;
  height: 2px;
  border-radius: 4px;
  background: ${background};

  transition: all 0.3s;
  margin-bottom: 1rem;
`;
