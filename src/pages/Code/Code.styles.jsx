import { styled } from "styled-components";
import BACKGROUND_LINES from "../../assets/images/background-lines.svg"

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  background: url(${BACKGROUND_LINES});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Robot = styled.div`
  position: absolute;
  right: 14rem;
  top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ping 3.2s ease infinite;

  z-index: 1;
  
  img {
    width: 58px;
    height: 74px;
    pointer-events: none;
  }
  @keyframes ping {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
`;

export const Content = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.2rem;
  background: #19242f;
  border: 1px solid rgba(50, 59, 69, 0.8);
  border-radius: 4px;
  position: relative;

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(50, 59, 69, 0.8);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #9e9ea0;
    border-radius: 4px;
  }
`;

export const InputText = styled.textarea`
  width: 96%;
  height: 89%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  resize: none;
  margin: 2rem;

  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const CodeActions = styled.div`
  width: 10%;
  display: flex;
  gap: .1rem;
  position: absolute;
  right: 0;
  float: right;  
  margin-left: auto;
`;

export const CodeAction = styled.button`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #0bf0d5;
    color: #0bf0d5;
    background-color: #0bf0d5;
  }

  i {
    font-size: 1.3rem;
    color: #515c67;
    transition: all 0.3s;
  }

  &:hover i {
    color: #7b8998;
  }

  &:[data-isActived='true'] {
    
  }
`;
