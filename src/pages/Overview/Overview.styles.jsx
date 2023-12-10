import { styled } from "styled-components";
import BACKGROUND_LINES from "../../assets/images/background-lines.svg";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
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
  padding: 2rem 1.5rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  gap: 1rem;
  overflow: hidden;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export const UseMode = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border-radius: 4px;
  border: 2px dashed rgba(50, 59, 69, 0.5);
  background: rgba(26, 39, 52, 0.3);
  backdrop-filter: blur(4px);

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
`;
