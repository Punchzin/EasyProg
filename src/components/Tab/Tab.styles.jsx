import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .ResetMUIPaper {
    background: transparent !important;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  width: 242px;
  padding: 8px 16px 8px 24px;
  justify-content: space-between;
  align-items: center;

  border-radius: 0px 0px 8px 0px;
  border-right: 1px solid #323b45;
  border-bottom: 1px solid #323b45;
  background: rgba(15, 25, 35, .2);
  backdrop-filter: blur(4px);
  color: #fff;

  p {
    font-size: 12px;
  }
`;

export const Close = styled.button`
  color: #fff;
`;

export const CloseConfirm = styled.div`
  width: 20rem;
  border-radius: 0.75rem;
  border: 1px solid #323b45;
  background: #0f1923;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;

  p {
    line-height: 140%;
    text-align: center;
    max-width: 200px;
    color: #fff;
  }
`;

export const Robot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ping 3.2s ease infinite;

  z-index: 1;

  img {
    width: 4.5rem;
    height: 5.75rem;

    pointer-events: none;
  }

  @keyframes ping {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const ButtonsConfirm = styled.div`
  width: 100%;
  height: 35px;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonClose = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  border-radius: 0.75rem;
  border: 1px solid #323b45;
  background: rgba(50, 59, 69, 0.2);
`;

export const ButtonContinue = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  border-radius: 0.75rem;
  background: #2ae2cd;
  color: #000;
`;
