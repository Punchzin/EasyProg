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

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  gap: 1rem;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`;

export const Output = styled.div`
  display: flex;
  width: 100%;
  max-height: 213px;
  height: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border: 1px solid #323b45;
  background: #19242f;
  border-radius: 4px;
`;
