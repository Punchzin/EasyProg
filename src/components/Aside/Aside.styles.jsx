import { styled } from "styled-components";

export const Aside = styled.aside`
  display: flex;
  max-width: 70px;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  border-right: 1px solid rgba(50, 59, 69, 0.8);
  position: relative;
  align-items: center;
  background: rgba(15, 25, 35, .2);
  backdrop-filter: blur(4px);
`;

export const AsideWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const AsideBrand = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 21px;
    height: 21px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;
`;

export const AsideDivider = styled.div`
  width: 50%;
  height: 1px;
  background: #323b45;
  opacity: 0.8;
`;

export const AsideActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AsideAction = styled.button`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-left: 1px solid #0bf0d5;
    color: #7b8998;
  }

  i {
    font-size: 1.3rem;
    color: #515c67;
    transition: all 0.3s;
  }

  &:hover i {
    color: #7b8998;
  }
`;

export const Lang = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.8;

  &:hover{
    opacity: 1;
    border: #fff;
  }
`;

export const AsideActionSelected = styled.button`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #0bf0d5;
  background: linear-gradient(
    90deg,
    rgba(11, 240, 213, 0.2) 0.72%,
    rgba(11, 240, 213, 0) 97.83%
  );
  i {
    font-size: 1.3rem;
    color: white;
  }
`;

export const ExitConfirm = styled.div` 
  width: 20rem;
  border-radius: 0.75rem;
  border: 1px solid #323b45;
  background: #0F1923;
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