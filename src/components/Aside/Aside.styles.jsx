import { styled } from "styled-components";

export const Aside = styled.aside`
  display: flex;
  max-width: 70px;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  border-right: 1px solid rgba(50, 59, 69, 0.8);
  background: #0f1923;
  position: relative;
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

  &:[data-isActived='true'] {
    
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
