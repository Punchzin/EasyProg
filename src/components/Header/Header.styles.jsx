import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(50, 59, 69, 0.80);
  background: #0F1923;
`;

export const HeaderBrand = styled.div`
  color: #FFF;
  font-family: Space Grotesk;
  font-size: 12px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Keywords = styled.button`
  height: 40px;
  align-items: flex-start;
  gap: 16px;
  color: #FFF;
  width: 247px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: line;

  border-radius: 4px;
  background: #0C1218;
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
  border: 1px solid #0BF0D5;
  color: #FFFF;
  background: rgba(11, 240, 213, 0.20);
  transition: all .3s;

  &:hover {
    opacity: 1;
  }
`;


