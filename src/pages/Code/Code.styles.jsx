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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.section`
  max-width: 1440px;
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
`;


export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  bgc
`;

export const Robot = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ping 3.5s ease infinite;
  

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

export const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;