import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(50, 59, 69, 0.8);
  background: rgba(15, 25, 35, 0.8);
  backdrop-filter: blur(8px);
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
