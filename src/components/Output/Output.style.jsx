import { styled } from "styled-components";

export const OutputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: 213px;
  height: 100%;
  padding: 1.5rem;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid #323b45;
  background: #19242f;
  border-radius: 4px;
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
  gap: .5rem;

  i {
    display: flex;
    width: 48px;
    height: 48px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;
    border: 1px solid rgba(50, 59, 69, 0.80);
    background: #0F1923;
    font-size: 20px;
    color: #0BF0D5;
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
