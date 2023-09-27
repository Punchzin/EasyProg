import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(50, 59, 69, 0.80);
  background: rgba(15, 25, 35, .8);
  backdrop-filter: blur(8px);
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

