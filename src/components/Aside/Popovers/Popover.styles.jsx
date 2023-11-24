import { styled } from "styled-components";

export const WrapperButton = styled.div`
  top: -2rem;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background: #19242f;
  backdrop-filter: blur(2px);
  border: 1px solid #323b45;
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #0f1923;
  border-bottom: 1px solid #323b45;
`;

export const HeaderLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #0bf0d5;
  }

  p {
    font-family: "Space Grotesk", sans-serif;
    color: white;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`;

export const HeaderAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;

  i {
    font-size: 1rem;
    color: #515c67;
    transition: all 0.3s;
  }
  i:hover {
      color: white;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Button = styled.button`
  width: 240px;
  height: 45px;
  display: flex;

  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #323b45;
  background: #0f1923;

  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    border: 1px solid #0bf0d5;
    background: rgba(11, 240, 213, 0.2);
  }
`;

export const ButtonContainer = styled.label`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;

`;

export const ButtonUpload = styled.input`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;


export const InputUpload = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
`;
