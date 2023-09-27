import { styled } from "styled-components";
import BACKGROUND_LINES from "../../assets/images/background-lines.svg"

export const Main = styled.main`
  width: 100%;
  display: flex;
  height: 100vh;
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

export const Content = styled.section`
  max-width: 1580px;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContentBody = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: #19242f;
  border: 1px solid rgba(50, 59, 69, 0.8);
  border-radius: 4px;
  position: relative;

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #2c2c31;
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

export const Robot = styled.div`
  position: absolute;
  right: 10rem;
  top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ping 3.2s ease infinite;
  
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