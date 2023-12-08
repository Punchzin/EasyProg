import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(50, 59, 69, 0.8);
  background: rgba(15, 25, 35, .2);
  backdrop-filter: blur(4px);
`;

export const HeaderBrand = styled.div`
  color: #fff;
  font-family: Space Grotesk;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const InputIconButton = styled.button`
  font-size: 22px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Login = styled.button`
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: line;

  opacity: 0.8;
  border-radius: 4px;
  border: 1px solid #0bf0d5;
  color: #ffff;
  background: rgba(11, 240, 213, 0.2);
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Robot = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ping 3.2s ease infinite;

  z-index: 1;
  
  img {
    width: 48px;
    height: 50px;
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
