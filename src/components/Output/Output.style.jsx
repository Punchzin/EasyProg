import { styled } from "styled-components";

export const OutputContainer = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
`;

export const OutputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #323b45;
  background: #19242f;
  border-radius: 4px;
  z-index: 999;
  transition: all 1s cubic-bezier(0.6, -0.35, 0.1, 1.35);
  transition-delay: 0.3s;

  position: absolute;
`;

export const OutputHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OutputElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    display: flex;
    width: 38px;
    height: 38px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid rgba(50, 59, 69, 0.8);
    background: #0f1923;
    font-size: 20px;
    color: #0bf0d5;
  }
`;

export const WrapperOut = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const OutHeader = styled.div`
  color: #94a6b7;
  font-family: "Space Grotesk", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  gap: 5px;
`;

export const OutMid = styled.div`
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
  
export const OutputButton = styled.button`
  display: flex;
  color: #94a6b7;
  font-family: Space Grotesk;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  gap: 5px;
  
  i {
    font-size: 20px;
  }
`;
  
export const OutputText = styled.div`
  flex: 1;    
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: .25rem;
  overflow-y: auto;
  position: relative;
  white-space: break-spaces;
  transition: all .4s;

  background: ${props => props.outputIsOpen ? '#0F1923' : '#19242f'};
  

  p {
    margin: 12px;
  }
`;

export const OutputTextOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #131E29;
  mask-image: linear-gradient(180deg, rgba(19, 30, 41, 0.00) 30%, #131E29 30%);
  -webkit-mask-image: linear-gradient(180deg, rgba(19, 30, 41, 0.00) 80%, #131E29 100%);
  pointer-events: none;
  transition: .5s all;
  opacity: ${props => props.outputIsOpen ? 0 : 1}
`;